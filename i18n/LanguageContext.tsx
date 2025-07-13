
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { translations as enTranslations } from './translations/en';
import { translations as thTranslations } from './translations/th';
import { translations as arTranslations } from './translations/ar';
import { translations as hiTranslations } from './translations/hi';
import { translations as esTranslations } from './translations/es';
import { translations as zhTranslations } from './translations/zh';
import { translations as idTranslations } from './translations/id';
import { translations as urTranslations } from './translations/ur';
import { languages, DEFAULT_LANG, LanguageCode } from './config';

const allTranslations: Record<LanguageCode, typeof enTranslations> = {
    en: enTranslations,
    th: thTranslations,
    ar: arTranslations,
    hi: hiTranslations,
    es: esTranslations,
    zh: zhTranslations,
    id: idTranslations,
    ur: urTranslations,
};

type TranslationKey = keyof typeof enTranslations;

interface LanguageContextType {
    lang: LanguageCode;
    dir: 'ltr' | 'rtl';
    setLang: (lang: LanguageCode) => void;
    t: <K extends TranslationKey>(key: K, replacements?: { [key: string]: string | number }) => typeof enTranslations[K];
    availableLanguages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<LanguageCode>(DEFAULT_LANG);
    const dir = languages[lang]?.direction || 'ltr';

    const t = useCallback(<K extends TranslationKey>(key: K, replacements?: { [key: string]: string | number }): typeof enTranslations[K] => {
        let translation = allTranslations[lang]?.[key] || enTranslations[key];

        if (typeof translation === 'string' && replacements) {
            Object.keys(replacements).forEach(rKey => {
                translation = translation.replace(new RegExp(`{{${rKey}}}`, 'g'), String(replacements[rKey]));
            });
        }
        
        return translation as typeof enTranslations[K];
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, dir, setLang, t, availableLanguages: languages }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
