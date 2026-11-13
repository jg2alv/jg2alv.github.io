import { translations, type Language, type TranslationKey } from '../data/translations';
import { htmlLanguage, isSupportedLanguage, PREFERENCE_KEYS, resolveLanguage, selectLocalizedText } from '../utils/preferences';

let initialized = false;
let manualLanguage: Language | null = null;
const originalText = new WeakMap<HTMLElement, string>();
const originalAttributes = new WeakMap<HTMLElement, Map<string, string | null>>();

export function currentLanguage(): Language {
  const language = document.documentElement.lang.toLowerCase().split('-')[0];
  return isSupportedLanguage(language) ? language : 'en';
}

function browserLanguages(): readonly string[] {
  return navigator.languages?.length ? navigator.languages : [navigator.language ?? 'en'];
}

export function applyTranslations(root: ParentNode = document) {
  const language = currentLanguage();
  root.querySelectorAll<HTMLElement>('[data-i18n], [data-i18n-en], [data-i18n-pt], [data-i18n-es]').forEach((element) => {
    if (!originalText.has(element)) originalText.set(element, element.textContent ?? '');
    const key = element.dataset.i18n as TranslationKey | undefined;
    const values = {
      en: element.getAttribute('data-i18n-en') ?? (key ? translations.en[key] : undefined),
      pt: element.getAttribute('data-i18n-pt') ?? (key ? translations.pt[key] : undefined),
      es: element.getAttribute('data-i18n-es') ?? (key ? translations.es[key] : undefined),
    };
    element.textContent = selectLocalizedText(language, values, originalText.get(element)) ?? '';
  });
  for (const attribute of ['aria-label', 'title', 'placeholder']) {
    root.querySelectorAll<HTMLElement>(`[data-i18n-${attribute}-en], [data-i18n-${attribute}-pt], [data-i18n-${attribute}-es]`).forEach((element) => {
      let originals = originalAttributes.get(element);
      if (!originals) {
        originals = new Map();
        originalAttributes.set(element, originals);
      }
      if (!originals.has(attribute)) originals.set(attribute, element.getAttribute(attribute));
      const text = selectLocalizedText(language, {
        en: element.getAttribute(`data-i18n-${attribute}-en`),
        pt: element.getAttribute(`data-i18n-${attribute}-pt`),
        es: element.getAttribute(`data-i18n-${attribute}-es`),
      }, originals.get(attribute));
      if (text === null) element.removeAttribute(attribute);
      else element.setAttribute(attribute, text);
    });
  }
}

export function applyLanguage(language: unknown) {
  if (!isSupportedLanguage(language)) return;
  document.documentElement.lang = htmlLanguage(language);
  applyTranslations();
  document.querySelectorAll<HTMLButtonElement>('[data-language]').forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.dispatchEvent(new CustomEvent('portfolio:language-change', { detail: { language } }));
}

export function initI18n() {
  if (initialized) return;
  initialized = true;
  try {
    const saved = sessionStorage.getItem(PREFERENCE_KEYS.language);
    manualLanguage = isSupportedLanguage(saved) ? saved : null;
  } catch {
    // System preferences still work when session storage is unavailable.
  }
  applyLanguage(resolveLanguage(browserLanguages(), manualLanguage));
  document.querySelectorAll<HTMLButtonElement>('[data-language]').forEach((button) => {
    button.addEventListener('click', () => {
      const language = button.dataset.language;
      if (!isSupportedLanguage(language)) return;
      manualLanguage = language;
      try {
        sessionStorage.setItem(PREFERENCE_KEYS.language, language);
      } catch {
        // Keep the manual choice in memory for the current page.
      }
      applyLanguage(language);
    });
  });
  window.addEventListener('languagechange', () => {
    if (manualLanguage === null) applyLanguage(resolveLanguage(browserLanguages()));
  });
}
