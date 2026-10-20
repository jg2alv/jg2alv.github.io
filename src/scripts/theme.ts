const STORAGE_KEY = 'portfolio-theme';
type Theme = 'light' | 'dark';

function savedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
}

function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // The current-session toggle still works when storage is unavailable.
  }
}

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function currentTheme(): Theme {
  const theme = document.documentElement.dataset.theme;
  return theme === 'dark' || theme === 'light' ? theme : systemTheme();
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  const meta = document.querySelector<HTMLMetaElement>('[data-theme-color]');
  if (meta) meta.content = theme === 'dark' ? '#16191d' : '#f2f3f1';

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    const next = theme === 'dark' ? 'light' : 'dark';
    button.dataset.theme = theme;
    button.setAttribute('aria-label', `Switch to ${next} theme`);
  });
  document.querySelectorAll<HTMLElement>('[data-theme-tooltip]').forEach((tooltip) => {
    tooltip.textContent = theme === 'dark' ? 'Light theme' : 'Dark theme';
  });
}

export function initThemeToggle() {
  applyTheme(currentTheme());

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    if (button.dataset.ready === 'true') return;
    button.dataset.ready = 'true';
    button.addEventListener('click', () => {
      const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
      saveTheme(next);
      applyTheme(next);
    });
  });

  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', () => {
    if (!savedTheme()) applyTheme(systemTheme());
  });
}
