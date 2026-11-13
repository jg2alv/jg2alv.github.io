// Adapted from widgets/campo-de-interferencia.html: the original interference
// surface and its ray-picked ripples, without the exported widget UI or particles.
type Vector3 = [number, number, number];
type Point = [number, number];

const vertexSource = `
precision highp float;
attribute vec2 aUV;
uniform mat4 uVP;
uniform float uTime, uYaw, uShift, uPulseTime;
uniform vec3 uHover;
uniform vec4 uImpulses[8];
varying vec2 vUV;
varying vec3 vWorld, vNormal;

vec3 shape(vec2 uv) {
  vec2 q = (uv - .5) * 6.;
  float x = q.x, z = q.y, d = length(q);
  float y = .29 * sin(x * 1.7 + uTime * .38)
    + .22 * cos(z * 2.1 - uTime * .32)
    + .14 * sin(x * 2.6 + z * 1.8 - uTime * .54);
  y += .12 * sin(d * 4. - uTime * .9) * exp(-d * .28);
  float hoverDistance = length(q - uHover.xy);
  y -= uHover.z * .4 * exp(-hoverDistance * hoverDistance * 2.5);
  float pulses = 0.;
  for (int i = 0; i < 8; i++) {
    float age = uPulseTime - uImpulses[i].z;
    if (uImpulses[i].w > 0. && age >= 0. && age <= 6.) {
      float front = length(q - uImpulses[i].xy) - age * 1.15;
      pulses += uImpulses[i].w * cos(front * 7.5)
        * exp(-front * front * 3.1 - age * .72);
    }
  }
  return vec3(x, y - .35 + pulses / (1. + abs(pulses) * .9), z);
}

vec3 rotatePoint(vec3 p) {
  float c = cos(uYaw), s = sin(uYaw);
  p = vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
  float ca = cos(.05), sa = sin(.05);
  return vec3(p.x, ca * p.y - sa * p.z, sa * p.y + ca * p.z);
}

void main() {
  vUV = aUV;
  vec3 p = shape(aUV);
  vec3 du = shape(aUV + vec2(.0008, 0.)) - p;
  vec3 dv = shape(aUV + vec2(0., .0008)) - p;
  vWorld = rotatePoint(p);
  vNormal = rotatePoint(normalize(cross(dv, du)));
  vec4 clip = uVP * vec4(vWorld, 1.);
  clip.x += uShift * clip.w;
  gl_Position = clip;
}
`;

const fragmentSource = `
#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec3 uCamera, uTint, uHover;
uniform float uTime, uPulseTime;
uniform vec4 uImpulses[8];
varying vec2 vUV;
varying vec3 vWorld, vNormal;

float grid(vec2 uv, vec2 cells) {
  vec2 p = uv * cells;
  vec2 d = abs(fract(p - .5) - .5) / max(fwidth(p), vec2(.001));
  return 1. - min(min(d.x, d.y), 1.);
}

void main() {
  vec3 normal = normalize(vNormal);
  if (!gl_FrontFacing) normal = -normal;
  vec3 view = normalize(uCamera - vWorld);
  vec3 light = normalize(vec3(-2.8, 5., 3.2) - vWorld);
  float diffuse = max(dot(normal, light), 0.);
  float rim = pow(1. - abs(dot(normal, view)), 2.8);
  float fine = grid(vUV, vec2(50.));
  float major = grid(vUV, vec2(10.));
  float level = fract(vWorld.y * 2.3 - uTime * .045);
  float contour = 1. - smoothstep(0., .055, min(level, 1. - level));
  float strength = .035 + .10 * diffuse + rim * .15;
  strength += fine * (.12 + .16 * diffuse) + major * .12;
  strength += contour * (.62 + .3 * diffuse);
  vec2 field = (vUV - .5) * 6.;
  strength += .12 * uHover.z * exp(-dot(field - uHover.xy, field - uHover.xy) * 3.);
  for (int i = 0; i < 8; i++) {
    float age = uPulseTime - uImpulses[i].z;
    if (uImpulses[i].w > 0. && age >= 0. && age <= 6.) {
      float front = abs(length(field - uImpulses[i].xy) - age * 1.15);
      strength += uImpulses[i].w * .65 * exp(-front * 14. - age * .8);
    }
  }
  float edge = 1. - .4 * pow(length(vUV - .5) * 1.25, 3.);
  float depth = clamp(1. - (length(uCamera - vWorld) - 3.) * .075, .32, 1.);
  gl_FragColor = vec4(uTint, clamp(strength * edge * depth, 0., .94));
}
`;

function multiply(a: Float32Array, b: Float32Array) {
  const out = new Float32Array(16);
  for (let column = 0; column < 4; column++) {
    for (let row = 0; row < 4; row++) {
      for (let index = 0; index < 4; index++) {
        out[column * 4 + row] += a[index * 4 + row] * b[column * 4 + index];
      }
    }
  }
  return out;
}

function cameraMatrix(aspect: number, eye: Vector3) {
  const normalize = (vector: Vector3): Vector3 => {
    const length = Math.hypot(...vector);
    return vector.map((value) => value / length) as Vector3;
  };
  const cross = (a: Vector3, b: Vector3): Vector3 => [
    a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0],
  ];
  const dot = (a: Vector3, b: Vector3) => a.reduce((sum, value, index) => sum + value * b[index], 0);
  const z = normalize(eye), x = normalize(cross([0, 1, 0], z)), y = cross(z, x);
  const view = new Float32Array([
    x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0,
    -dot(x, eye), -dot(y, eye), -dot(z, eye), 1,
  ]);
  const f = 1 / Math.tan(.63 / 2), near = .1, far = 60;
  return multiply(new Float32Array([
    f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) / (near - far), -1,
    0, 0, 2 * far * near / (near - far), 0,
  ]), view);
}

function createProgram(gl: WebGLRenderingContext) {
  const shaders: WebGLShader[] = [];
  const program = gl.createProgram();
  if (!program) return null;
  for (const [type, source] of [[gl.VERTEX_SHADER, vertexSource], [gl.FRAGMENT_SHADER, fragmentSource]] as const) {
    const shader = gl.createShader(type);
    if (!shader) { gl.deleteProgram(program); return null; }
    shaders.push(shader);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      shaders.forEach((item) => gl.deleteShader(item));
      gl.deleteProgram(program);
      return null;
    }
    gl.attachShader(program, shader);
  }
  gl.linkProgram(program);
  shaders.forEach((shader) => gl.deleteShader(shader));
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

function mountField(canvas: HTMLCanvasElement): () => void {
  const stage = canvas.parentElement;
  if (!stage) return () => {};
  const gl = canvas.getContext('webgl', {
    alpha: true, antialias: true, powerPreference: 'low-power', premultipliedAlpha: false,
  });
  if (!gl || !gl.getExtension('OES_standard_derivatives')) return () => {};
  const program = createProgram(gl);
  if (!program) return () => {};

  const uniform = (name: string) => gl.getUniformLocation(program, name);
  const uniforms = {
    vp: uniform('uVP'), camera: uniform('uCamera'), tint: uniform('uTint'), time: uniform('uTime'),
    yaw: uniform('uYaw'), shift: uniform('uShift'), hover: uniform('uHover'),
    pulseTime: uniform('uPulseTime'), impulses: uniform('uImpulses[0]'),
  };
  const uv: number[] = [], indices: number[] = [], resolution = 96;
  for (let y = 0; y <= resolution; y++) {
    for (let x = 0; x <= resolution; x++) uv.push(x / resolution, y / resolution);
  }
  for (let y = 0; y < resolution; y++) {
    for (let x = 0; x < resolution; x++) {
      const a = y * (resolution + 1) + x, b = a + 1, c = a + resolution + 1;
      indices.push(a, c, b, b, c, c + 1);
    }
  }
  const mesh = gl.createBuffer(), elementBuffer = gl.createBuffer();
  if (!mesh || !elementBuffer) {
    gl.deleteBuffer(mesh); gl.deleteBuffer(elementBuffer); gl.deleteProgram(program);
    return () => {};
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, mesh);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uv), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  const attribute = gl.getAttribLocation(program, 'aUV');
  const eye: Vector3 = [0, 3.1, 5.3];
  const impulses = new Float32Array(32);
  for (let index = 0; index < 8; index++) impulses[index * 4 + 2] = -100;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = true, lost = false, disposed = false, frame = 0, lastPaint = 0;
  let width = 1, height = 1, time = 0, pulseTime = 0, nextImpulse = 0;
  let pointerX = 0, targetX = 0, hoverX = 0, hoverZ = 0, hoverAmount = 0;
  let targetHoverX = 0, targetHoverZ = 0, targetHoverAmount = 0;
  let down = false, lastEmit = 0, lastPoint: Point | null = null;
  let tint: Vector3 = [0, 1, .52];
  let projection = cameraMatrix(1, eye);
  const listeners = new AbortController();

  function draw() {
    if (disposed || lost || width < 2 || height < 2) return;
    gl!.viewport(0, 0, width, height);
    gl!.clearColor(0, 0, 0, 0);
    gl!.clear(gl!.COLOR_BUFFER_BIT | gl!.DEPTH_BUFFER_BIT);
    gl!.enable(gl!.DEPTH_TEST);
    gl!.disable(gl!.CULL_FACE);
    gl!.disable(gl!.BLEND);
    gl!.useProgram(program);
    gl!.uniformMatrix4fv(uniforms.vp, false, projection);
    gl!.uniform3fv(uniforms.camera, eye);
    gl!.uniform3fv(uniforms.tint, tint);
    gl!.uniform1f(uniforms.time, time);
    gl!.uniform1f(uniforms.pulseTime, pulseTime);
    gl!.uniform1f(uniforms.yaw, -.48 + pointerX * .1);
    gl!.uniform1f(uniforms.shift, .52);
    gl!.uniform3f(uniforms.hover, hoverX, hoverZ, hoverAmount * .6);
    gl!.uniform4fv(uniforms.impulses, impulses);
    gl!.bindBuffer(gl!.ARRAY_BUFFER, mesh);
    gl!.enableVertexAttribArray(attribute);
    gl!.vertexAttribPointer(attribute, 2, gl!.FLOAT, false, 0, 0);
    gl!.bindBuffer(gl!.ELEMENT_ARRAY_BUFFER, elementBuffer);
    gl!.drawElements(gl!.TRIANGLES, indices.length, gl!.UNSIGNED_SHORT, 0);
    gl!.disableVertexAttribArray(attribute);
  }

  function schedule() {
    if (!frame && !disposed && !lost && visible && !document.hidden && !motion.matches) {
      frame = requestAnimationFrame(animate);
    }
  }
  function animate(now: number) {
    frame = 0;
    if (disposed || lost || !visible || document.hidden || motion.matches) return;
    if (now - lastPaint >= 1000 / 30) {
      const delta = lastPaint ? Math.min((now - lastPaint) / 1000, .06) : 0;
      lastPaint = now;
      time += delta * 1.5;
      pulseTime += delta;
      pointerX += (targetX - pointerX) * .11;
      hoverX += (targetHoverX - hoverX) * .11;
      hoverZ += (targetHoverZ - hoverZ) * .11;
      hoverAmount += (targetHoverAmount - hoverAmount) * .11;
      draw();
    }
    schedule();
  }
  function invalidate() {
    if (motion.matches) {
      pointerX = targetX;
      hoverX = targetHoverX;
      hoverZ = targetHoverZ;
      hoverAmount = targetHoverAmount;
      if (visible && !document.hidden) draw();
    } else schedule();
  }
  function stop() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    lastPaint = 0;
  }
  function resize() {
    const rect = stage!.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, matchMedia('(pointer: coarse)').matches ? 1.25 : 1.5);
    width = Math.max(1, Math.round(rect.width * dpr));
    height = Math.max(1, Math.round(rect.height * dpr));
    canvas.width = width; canvas.height = height;
    projection = cameraMatrix(width / height, eye);
    if (visible && !document.hidden) draw();
    invalidate();
  }
  function readTheme() {
    const raw = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    const hex = raw.replace('#', '');
    if (/^[0-9a-f]{6}$/i.test(hex)) {
      tint = [0, 2, 4].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255) as Vector3;
    }
    if (visible && !document.hidden) draw();
    invalidate();
  }
  function heightAt(x: number, z: number) {
    const radius = Math.hypot(x, z);
    let y = .29 * Math.sin(x * 1.7 + time * .38) + .22 * Math.cos(z * 2.1 - time * .32)
      + .14 * Math.sin(x * 2.6 + z * 1.8 - time * .54)
      + .12 * Math.sin(radius * 4 - time * .9) * Math.exp(-radius * .28) - .35;
    let pulse = 0;
    for (let index = 0; index < 8; index++) {
      const k = index * 4, age = pulseTime - impulses[k + 2];
      if (age < 0 || age > 6) continue;
      const front = Math.hypot(x - impulses[k], z - impulses[k + 1]) - age * 1.15;
      pulse += impulses[k + 3] * Math.cos(front * 7.5) * Math.exp(-front * front * 3.1 - age * .72);
    }
    y += pulse / (1 + Math.abs(pulse) * .9);
    return y - hoverAmount * .6 * .4 * Math.exp(-((x - hoverX) ** 2 + (z - hoverZ) ** 2) * 2.5);
  }
  function pick(clientX: number, clientY: number): Point | null {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    const nx = (clientX - rect.left) / rect.width * 2 - 1, ny = 1 - (clientY - rect.top) / rect.height * 2;
    if (nx < -1 || nx > 1 || ny < -1 || ny > 1) return null;
    const length = Math.hypot(...eye), zy = eye[1] / length, zz = eye[2] / length, f = Math.tan(.63 / 2);
    const ray: Vector3 = [(nx - .52) * rect.width / rect.height * f, ny * f * zz - zy, -ny * f * zy - zz];
    const yaw = -.48 + pointerX * .1, c = Math.cos(yaw), s = Math.sin(yaw);
    const inverse = (point: Vector3): Vector3 => {
      const y = Math.cos(.05) * point[1] + Math.sin(.05) * point[2];
      const z = -Math.sin(.05) * point[1] + Math.cos(.05) * point[2];
      return [c * point[0] - s * z, y, s * point[0] + c * z];
    };
    const origin = inverse(eye), direction = inverse(ray), lower = [-3, -2.5, -3], upper = [3, 1.8, 3];
    let near = .01, far = 40;
    for (let axis = 0; axis < 3; axis++) {
      if (Math.abs(direction[axis]) < .00001) {
        if (origin[axis] < lower[axis] || origin[axis] > upper[axis]) return null;
        continue;
      }
      const a = (lower[axis] - origin[axis]) / direction[axis], b = (upper[axis] - origin[axis]) / direction[axis];
      near = Math.max(near, Math.min(a, b)); far = Math.min(far, Math.max(a, b));
    }
    if (near >= far) return null;
    const residual = (distance: number) => origin[1] + direction[1] * distance
      - heightAt(origin[0] + direction[0] * distance, origin[2] + direction[2] * distance);
    let previous = near, previousValue = residual(near);
    for (let index = 1; index <= 80; index++) {
      const current = near + (far - near) * index / 80, value = residual(current);
      if (value * previousValue <= 0) {
        let a = previous, b = current, fa = previousValue;
        for (let step = 0; step < 12; step++) {
          const middle = (a + b) * .5, fm = residual(middle);
          if (fa * fm <= 0) b = middle; else { a = middle; fa = fm; }
        }
        const distance = (a + b) * .5, x = origin[0] + direction[0] * distance, z = origin[2] + direction[2] * distance;
        return Math.abs(residual(distance)) < .005 && Math.abs(x) < 2.995 && Math.abs(z) < 2.995 ? [x, z] : null;
      }
      previous = current; previousValue = value;
    }
    return null;
  }
  function track(event: PointerEvent) {
    targetX = event.clientX / innerWidth - .5;
    const point = pick(event.clientX, event.clientY);
    targetHoverAmount = point ? 1 : 0;
    if (point) {
      if (hoverAmount < .015) { hoverX = point[0]; hoverZ = point[1]; }
      targetHoverX = point[0]; targetHoverZ = point[1];
    }
    invalidate();
    return point;
  }
  function emit(point: Point, amplitude: number) {
    if (motion.matches) return;
    const offset = (nextImpulse++ % 8) * 4;
    impulses[offset] = point[0]; impulses[offset + 1] = point[1];
    impulses[offset + 2] = pulseTime; impulses[offset + 3] = amplitude * .6;
    invalidate();
  }
  window.addEventListener('pointermove', (event) => {
    if (!visible || document.hidden) return;
    const point = track(event);
    if (down && point) {
      const now = performance.now();
      if (now - lastEmit > 100 && (!lastPoint || Math.hypot(point[0] - lastPoint[0], point[1] - lastPoint[1]) > .16)) {
        emit(point, .19); lastEmit = now; lastPoint = point;
      }
    }
  }, { passive: true, signal: listeners.signal });
  window.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if (event.target instanceof Element && event.target.closest('a, button, input, textarea, select, summary')) return;
    const point = track(event);
    if (!point) return;
    down = true; lastPoint = point; lastEmit = performance.now(); emit(point, .52);
  }, { passive: true, signal: listeners.signal });
  const release = () => { down = false; lastPoint = null; targetHoverAmount = 0; invalidate(); };
  window.addEventListener('pointerup', release, { passive: true, signal: listeners.signal });
  window.addEventListener('pointercancel', release, { passive: true, signal: listeners.signal });
  window.addEventListener('blur', release, { signal: listeners.signal });
  document.addEventListener('pointerleave', () => { targetX = 0; release(); }, { signal: listeners.signal });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else { draw(); invalidate(); }
  }, { signal: listeners.signal });
  motion.addEventListener('change', () => { stop(); draw(); invalidate(); }, { signal: listeners.signal });
  canvas.addEventListener('webglcontextlost', (event) => { event.preventDefault(); lost = true; stop(); }, { signal: listeners.signal });
  canvas.addEventListener('webglcontextrestored', () => {
    destroy();
    if (canvas.isConnected) fields.set(canvas, mountField(canvas));
  }, { signal: listeners.signal });
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(stage);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) { draw(); invalidate(); } else stop();
  });
  visibilityObserver.observe(stage);
  const themeObserver = new MutationObserver(readTheme);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  readTheme(); resize();
  function destroy() {
    if (disposed) return;
    disposed = true; stop(); listeners.abort();
    resizeObserver.disconnect(); visibilityObserver.disconnect(); themeObserver.disconnect();
    gl!.deleteBuffer(mesh); gl!.deleteBuffer(elementBuffer); gl!.deleteProgram(program);
  }
  return destroy;
}

const fields = new Map<HTMLCanvasElement, () => void>();
export function initInterferenceFields() {
  document.querySelectorAll<HTMLCanvasElement>('[data-interference-field]').forEach((canvas) => {
    if (!fields.has(canvas)) fields.set(canvas, mountField(canvas));
  });
}
function disposeFields() {
  fields.forEach((dispose) => dispose());
  fields.clear();
}
document.addEventListener('astro:page-load', initInterferenceFields);
document.addEventListener('astro:before-swap', disposeFields);
if (import.meta.hot) import.meta.hot.dispose(disposeFields);
