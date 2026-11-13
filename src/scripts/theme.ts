import { currentLanguage } from './i18n';
import { isTheme, PREFERENCE_KEYS, resolveTheme, type Theme } from '../utils/preferences';

let initialized = false;
let manualTheme: Theme | null = null;

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  const meta = document.querySelector<HTMLMetaElement>('[data-theme-color]');
  if (meta) meta.content = theme === 'dark' ? '#0a0a0a' : '#f7f8fa';

  const labels = {
    en: `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`,
    pt: `Ativar tema ${theme === 'dark' ? 'claro' : 'escuro'}`,
    es: `Activar tema ${theme === 'dark' ? 'claro' : 'oscuro'}`,
  };
  const label = labels[currentLanguage()];
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    button.dataset.theme = theme;
    button.setAttribute('aria-label', label);
  });
  document.querySelectorAll<HTMLElement>('[data-theme-tooltip]').forEach((tooltip) => {
    tooltip.textContent = label;
  });
}

export function initThemeToggle() {
  if (initialized) return;
  initialized = true;
  try {
    const saved = sessionStorage.getItem(PREFERENCE_KEYS.theme);
    manualTheme = isTheme(saved) ? saved : null;
  } catch {
    // System preferences still work when session storage is unavailable.
  }
  let media: MediaQueryList | null = null;
  try {
    if (typeof window.matchMedia === 'function') media = window.matchMedia('(prefers-color-scheme: dark)');
  } catch {
    // A browser without media-query support uses the light theme.
  }
  applyTheme(resolveTheme(media?.matches ?? false, manualTheme));
  media?.addEventListener('change', (event) => {
    if (manualTheme === null) applyTheme(resolveTheme(event.matches));
  });

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
      manualTheme = next;
      try {
        sessionStorage.setItem(PREFERENCE_KEYS.theme, next);
      } catch {
        // Keep the manual choice in memory for the current page.
      }
      applyTheme(next);
    });
  });
  document.addEventListener('portfolio:language-change', () => applyTheme(currentTheme()));
}
