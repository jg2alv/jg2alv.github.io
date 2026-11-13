import { applyTranslations } from './i18n';

export function initNavigation() {
  const sidebar = document.querySelector<HTMLElement>('.sidebar');
  if (!sidebar || sidebar.dataset.ready === 'true') return;
  sidebar.dataset.ready = 'true';
  const links = Array.from(sidebar.querySelectorAll<HTMLAnchorElement>('[data-section-link]'));
  const currentSection = document.querySelector<HTMLElement>('[data-current-section]');
  const mobile = window.matchMedia('(max-width: 850px)');
  let previousScroll = window.scrollY;
  let scrollFrame = 0;
  let pointerNearEdge = false;
  let pointerOverRail = false;

  function reveal() {
    sidebar?.classList.remove('is-retracted');
  }

  function hasKeyboardFocus() {
    const focused = document.activeElement;
    return Boolean(focused && sidebar?.contains(focused) && focused.matches(':focus-visible'));
  }

  function updateRail() {
    scrollFrame = 0;
    const position = window.scrollY;
    const movement = position - previousScroll;
    if (position <= 120 || movement < -3 || pointerNearEdge || pointerOverRail || hasKeyboardFocus()) {
      reveal();
    } else if (movement > 3) {
      sidebar?.classList.add('is-retracted');
    }
    if (Math.abs(movement) > 3) previousScroll = position;
  }

  window.addEventListener('scroll', () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateRail);
  }, { passive: true });
  window.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    pointerNearEdge = mobile.matches ? event.clientY >= window.innerHeight - 100 : event.clientX <= 110;
    if (pointerNearEdge) reveal();
  }, { passive: true });
  sidebar.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'touch') return;
    pointerOverRail = true;
    reveal();
  });
  sidebar.addEventListener('pointerleave', () => {
    pointerOverRail = false;
  });
  sidebar.addEventListener('focusin', reveal);
  mobile.addEventListener('change', () => {
    pointerNearEdge = false;
    previousScroll = window.scrollY;
    reveal();
  });
  window.addEventListener('pagehide', () => {
    window.cancelAnimationFrame(scrollFrame);
    scrollFrame = 0;
  });

  function setActive(section: string) {
    links.forEach((link) => {
      const active = link.dataset.sectionLink === section;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (currentSection) {
      currentSection.dataset.i18n = `nav.${section}`;
      applyTranslations(currentSection.parentElement ?? document);
    }
  }

  links.forEach((link) => link.addEventListener('click', () => {
    if (document.body.dataset.activePage === 'home') setActive(link.dataset.sectionLink ?? 'home');
    reveal();
  }));

  if (document.body.dataset.activePage !== 'home') return;
  const sections = links.map((link) => document.getElementById(link.dataset.sectionLink ?? '')).filter((section): section is HTMLElement => Boolean(section));
  if (!sections.length) return;
  const initialSection = window.location.hash.slice(1);
  if (sections.some((section) => section.id === initialSection)) setActive(initialSection);
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible[0]) setActive(visible[0].target.id);
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}
