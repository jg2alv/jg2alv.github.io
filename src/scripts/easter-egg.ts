export function initEasterEgg() {
  const button = document.querySelector<HTMLButtonElement>('[data-easter-egg]');
  const toast = document.querySelector<HTMLElement>('[data-easter-toast]');
  if (!button || !toast || button.dataset.ready === 'true') return;

  button.dataset.ready = 'true';
  let timer: number | undefined;
  button.addEventListener('click', () => {
    toast.textContent = '';
    window.setTimeout(() => {
      toast.textContent = 'This corner is reserved for a future Easter egg.';
    }, 0);
    toast.classList.add('easter-toast--visible');
    window.clearTimeout(timer);
    timer = window.setTimeout(() => toast.classList.remove('easter-toast--visible'), 2800);
  });
}
