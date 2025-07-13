
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { NAV_LINKS, PRODUCTS, BLOG_POSTS } from '../constants';
import { NavLink as NavLinkType } from '../types';
import { ChevronRightIcon } from './IconComponents';
import JsonLd from './JsonLd';

const findNameForPath = (path: string, links: NavLinkType[]): string | null => {
    for (const link of links) {
        if (link.path === path) return link.name;
        if (link.submenus) {
            const found = findNameForPath(path, link.submenus);
            if(found) return found;
        }
    }
    return null;
}

const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const { lang, t } = useLanguage();

    const getTranslationKey = (name: string) => `nav_${name.replace(/ /g, '_')}`;

    const pathnames = location.pathname.split('/').filter(x => x && x !== lang);
    
    const crumbs: { name: string, to: string }[] = [{ name: t('nav_Home' as any), to: `/${lang}` }];

    let currentPath = '';
    pathnames.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const to = `/${lang}${currentPath}`;
        let name = '';
        
        // Try to find a static name from NAV_LINKS
        const staticName = findNameForPath(currentPath, NAV_LINKS);
        if (staticName) {
            name = t(getTranslationKey(staticName) as any);
        } else {
            // Handle dynamic segments
            const prevSegment = index > 0 ? pathnames[index - 1] : null;
            if (prevSegment === 'collection') {
                const product = PRODUCTS.find(p => p.id === segment);
                name = product ? product.name : "Product";
            } else if (prevSegment === 'blog') {
                const post = BLOG_POSTS.find(p => p.id === segment);
                name = post ? post.title : "Article";
            } else {
                 name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            }
        }
        
        crumbs.push({ name, to });
    });

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${window.location.origin}${window.location.pathname.split('#')[0]}#${crumb.to}`
        }))
    };


    return (
        <>
            {crumbs.length > 1 && <JsonLd data={breadcrumbSchema} />}
            <nav aria-label="Breadcrumb" className="bg-[var(--c-surface-alt)] border-b border-[var(--c-border)]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ol className="flex items-center space-x-1 py-3 text-sm flex-wrap">
                        {crumbs.map((crumb, index) => {
                            const isLast = index === crumbs.length - 1;
                            return (
                                <li key={index} className="flex items-center">
                                    {index > 0 && (
                                        <ChevronRightIcon className="w-4 h-4 text-[var(--c-text-secondary)] mx-1 flex-shrink-0" />
                                    )}
                                    {isLast ? (
                                        <span className="font-semibold text-[var(--c-text-primary)] truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                                            {crumb.name}
                                        </span>
                                    ) : (
                                        <Link to={crumb.to} className="text-[var(--c-text-secondary)] hover:text-[var(--c-accent-primary)] transition-colors">
                                            {crumb.name}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </nav>
        </>
    );
};

export default Breadcrumbs;
