
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { translations as enTranslations } from '../i18n/translations/en';
import { DEFAULT_LANG } from '../i18n/config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  titleKey?: keyof typeof enTranslations;
  descriptionKey?: keyof typeof enTranslations;
  keywordsKey?: keyof typeof enTranslations;
  imageUrl?: string;
  type?: 'website' | 'article' | 'product';
}

const setMetaTag = (attr: 'name' | 'property', key: string, value: string) => {
    let element = document.querySelector(`meta[${attr}='${key}']`) as HTMLMetaElement;
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
    }
    element.setAttribute('content', value);
};

const setOrRemoveLinkTag = (rel: string, href: string | null, hreflang?: string) => {
    const selector = `link[rel="${rel}"]` + (hreflang ? `[hreflang="${hreflang}"]` : '');
    let element = document.querySelector(selector) as HTMLLinkElement;

    if (href) {
        if (!element) {
            element = document.createElement('link');
            element.setAttribute('rel', rel);
            if (hreflang) {
                element.setAttribute('hreflang', hreflang);
            }
            document.head.appendChild(element);
        }
        element.setAttribute('href', href);
    } else if (element) {
        element.remove();
    }
};


const SEO: React.FC<SEOProps> = ({ 
    title: rawTitle, 
    description: rawDescription, 
    keywords: rawKeywords,
    titleKey, 
    descriptionKey,
    keywordsKey,
    imageUrl, 
    type = 'website' 
}) => {
  const { lang, t, availableLanguages } = useLanguage();
  const location = useLocation();

  const title = rawTitle || (titleKey ? t(titleKey) as string : 'Vicky Amber & Gems');
  const description = rawDescription || (descriptionKey ? t(descriptionKey) as string : 'Authentic Burmese amber and precious gems.');
  const keywords = rawKeywords || (keywordsKey ? t(keywordsKey) as string : '');

  useEffect(() => {
    // 1. Basic Meta
    document.title = title;
    setMetaTag('name', 'description', description);
    
    // Keywords meta tag
    if (keywords) {
        setMetaTag('name', 'keywords', keywords);
    } else {
        const el = document.querySelector('meta[name="keywords"]');
        if (el) el.remove();
    }

    // 2. HTML lang and dir
    const htmlTag = document.documentElement;
    htmlTag.lang = lang;
    htmlTag.dir = availableLanguages[lang]?.direction || 'ltr';

    // 3. Canonical and Hreflang URLs
    const origin = window.location.origin;
    const pathWithoutHash = window.location.pathname; 
    const hashPath = location.pathname;
    
    const canonicalUrl = `${origin}${pathWithoutHash}#${hashPath}`;
    setOrRemoveLinkTag('canonical', canonicalUrl);
    
    // Hreflang links
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());
    
    const pathWithoutLang = hashPath.substring(3) || '/';

    // Add x-default
    const xDefaultHref = `${origin}${pathWithoutHash}#/${DEFAULT_LANG}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    setOrRemoveLinkTag('alternate', xDefaultHref, 'x-default');

    // Add all other languages
    Object.keys(availableLanguages).forEach(langCode => {
      const href = `${origin}${pathWithoutHash}#/${langCode}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
      setOrRemoveLinkTag('alternate', href, langCode);
    });

    // 4. Open Graph & Twitter Cards
    const ogImage = imageUrl || 'https://i.postimg.cc/Qd8yW639/vkambergems-logo-small.png';
    
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', 'Vicky Amber & Gems');
    setMetaTag('property', 'og:locale', lang);
    
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

  }, [lang, title, description, keywords, location.pathname, availableLanguages, imageUrl, type, t]);

  return null;
};

export default SEO;
