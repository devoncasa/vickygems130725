export const languages = {
    en: { name: 'English', direction: 'ltr' },
    th: { name: 'ไทย', direction: 'ltr' },
    ar: { name: 'العربية', direction: 'rtl' },
    hi: { name: 'हिन्दी', direction: 'ltr' },
    es: { name: 'Español', direction: 'ltr' },
    zh: { name: '中文(简体)', direction: 'ltr' },
    id: { name: 'Bahasa Indonesia', direction: 'ltr' },
    ur: { name: 'اردو', direction: 'rtl' },
} as const;

export const DEFAULT_LANG = 'en';

export type LanguageCode = keyof typeof languages;