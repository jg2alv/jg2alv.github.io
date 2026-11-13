export type SupportedLanguage = 'pt' | 'en' | 'es';
export type Theme = 'light' | 'dark';

export const PREFERENCE_KEYS = {
  language: 'portfolio-visit-language-v1',
  theme: 'portfolio-visit-theme-v1',
} as const;

export function isSupportedLanguage(value: unknown): value is SupportedLanguage {
  return value === 'pt' || value === 'en' || value === 'es';
}

export function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark';
}

export function resolveLanguage(languages: readonly string[], manual?: unknown): SupportedLanguage {
  if (isSupportedLanguage(manual)) return manual;
  for (const locale of languages) {
    const language = locale.trim().toLowerCase().split(/[-_]/)[0];
    if (isSupportedLanguage(language)) return language;
  }
  return 'en';
}

export function resolveTheme(prefersDark: boolean, manual?: unknown): Theme {
  return isTheme(manual) ? manual : prefersDark ? 'dark' : 'light';
}

export function htmlLanguage(language: SupportedLanguage): string {
  return language === 'pt' ? 'pt-BR' : language;
}

export function selectLocalizedText(
  language: SupportedLanguage,
  values: Partial<Record<SupportedLanguage, string | null>>,
  fallback: string | null = '',
): string | null {
  return values[language] ?? values.en ?? fallback;
}
