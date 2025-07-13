
import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink, useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { CartIcon, MenuIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon } from './IconComponents';
import { NavLink as NavLinkType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageCode } from '../i18n/config';

interface HeaderProps {
    cartCount: number;
}

const LanguageSwitcher: React.FC<{isMobile?: boolean}> = ({ isMobile = false }) => {
    const { lang, setLang, availableLanguages } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLangChange = (newLang: LanguageCode) => {
        const path = location.pathname;
        const newPath = `/${newLang}${path.substring(3) || '/'}`;
        setLang(newLang);
        navigate(newPath); 
    };
    
    if (isMobile) {
        return (
            <div className="px-3 py-2">
                 <label htmlFor="lang-switcher-mobile" className="block text-sm font-medium text-[var(--c-text-secondary)]">{availableLanguages[lang]?.name || 'Language'}</label>
                 <select
                    id="lang-switcher-mobile"
                    value={lang}
                    onChange={(e) => handleLangChange(e.target.value as LanguageCode)}
                    className="mt-1 block w-full ps-3 pe-10 py-2 text-base border-[var(--c-border)] bg-[var(--c-footer-bg)] text-[var(--c-footer-text)] focus:outline-none focus:ring-[var(--c-accent-primary)] focus:border-[var(--c-accent-primary)] sm:text-sm rounded-md"
                >
                    {Object.entries(availableLanguages).map(([code, { name }]) => (
                        <option key={code} value={code} className="bg-[var(--c-footer-bg)] text-[var(--c-footer-text)]">{name}</option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <div className="relative">
            <select
                id="lang-switcher-desktop"
                value={lang}
                onChange={(e) => handleLangChange(e.target.value as LanguageCode)}
                className="text-sm appearance-none bg-transparent text-[var(--c-text-secondary)] hover:text-[var(--c-accent-primary)] pe-6 py-2 rounded-md focus:outline-none cursor-pointer"
            >
                {Object.entries(availableLanguages).map(([code, { name }]) => (
                    <option key={code} value={code} className="bg-[var(--c-footer-bg)] text-[var(--c-footer-text)]">{name}</option>
                ))}
            </select>
            <ChevronDownIcon className="w-4 h-4 absolute top-1/2 end-1 -translate-y-1/2 pointer-events-none text-[var(--c-text-secondary)]" />
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
    const { lang, t, dir } = useLanguage();

    const linkClasses = "py-2 px-1 lg:px-3 relative text-sm uppercase tracking-wider transition-colors duration-300 flex items-center gap-1";
    const activeLinkClasses = "text-[var(--c-accent-primary)] font-semibold";
    const inactiveLinkClasses = "text-[var(--c-text-primary)] opacity-80 hover:opacity-100 hover:text-[var(--c-accent-primary)]";
    
    const getTranslatedPath = (path = '#') => `/${lang}${path === '/' ? '' : path}`;
    const getTranslationKey = (name: string) => `nav_${name.replace(/ /g, '_')}`;

    const ChevronIcon = dir === 'rtl' ? ChevronLeftIcon : ChevronRightIcon;

    const DesktopNav = () => (
        <nav className="hidden lg:flex items-center space-x-2">
            {NAV_LINKS.map((link) => (
                <div key={link.name} className="relative group">
                    <RouterNavLink
                        to={link.path ? getTranslatedPath(link.path) : '#'}
                        className={({ isActive }) => `${linkClasses} ${link.path && isActive ? activeLinkClasses : inactiveLinkClasses}`}
                    >
                        {t(getTranslationKey(link.name) as any)}
                        {link.submenus && <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />}
                    </RouterNavLink>
                    {link.submenus && (
                        <div className="absolute top-full start-0 mt-2 min-w-[250px] max-h-[80vh] overflow-y-auto bg-[var(--c-surface)] shadow-xl rounded-md border border-[var(--c-border)] p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible z-20 transform group-hover:translate-y-0 -translate-y-2">
                            {link.submenus.map(submenu => (
                                <RouterNavLink
                                    key={submenu.name}
                                    to={submenu.path ? getTranslatedPath(submenu.path) : '#'}
                                    className={({ isActive }) => `block px-4 py-2 text-sm rounded-md transition-colors ${isActive ? 'bg-[var(--c-accent-primary)]/10 text-[var(--c-accent-primary)]' : 'text-[var(--c-text-primary)]/90 hover:bg-[var(--c-accent-primary)]/10 hover:text-[var(--c-accent-primary)]'}`}
                                >
                                    {t(getTranslationKey(submenu.name) as any)}
                                </RouterNavLink>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );

    const MobileNav = () => (
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
                <div key={link.name}>
                    {link.submenus ? (
                        <>
                            <button
                                onClick={() => setOpenMobileSubmenu(openMobileSubmenu === link.name ? null : link.name)}
                                className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-[var(--c-text-primary)]/90 hover:bg-[var(--c-accent-primary)]/10 hover:text-[var(--c-accent-primary)]"
                            >
                                <span>{t(getTranslationKey(link.name) as any)}</span>
                                <ChevronIcon className={`w-5 h-5 transition-transform ${openMobileSubmenu === link.name ? 'rotate-90' : ''}`} />
                            </button>
                            {openMobileSubmenu === link.name && (
                                <div className="ps-6 space-y-1 mt-1 border-s-2 border-[var(--c-border)] ms-1">
                                    {link.submenus.map(submenu => (
                                        <RouterNavLink
                                            key={submenu.name}
                                            to={submenu.path ? getTranslatedPath(submenu.path) : '#'}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-[var(--c-accent-primary)]/10 text-[var(--c-accent-primary)] font-semibold' : 'text-[var(--c-text-secondary)] hover:bg-[var(--c-accent-primary)]/10'}`}
                                        >
                                            {t(getTranslationKey(submenu.name) as any)}
                                        </RouterNavLink>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <RouterNavLink
                            to={link.path ? getTranslatedPath(link.path) : '#'}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `block px-3 py-3 rounded-md text-base font-medium ${isActive ? 'bg-[var(--c-accent-primary)]/10 text-[var(--c-accent-primary)] font-semibold' : 'text-[var(--c-text-primary)]/90 hover:bg-[var(--c-accent-primary)]/10 hover:text-[var(--c-accent-primary)]'}`}
                        >
                            {t(getTranslationKey(link.name) as any)}
                        </RouterNavLink>
                    )}
                </div>
            ))}
            <div className="mt-4 border-t border-[var(--c-border)] pt-4">
                 <LanguageSwitcher isMobile={true} />
            </div>
        </nav>
    );

    return (
        <header className="bg-[var(--c-bg)]/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm border-b border-[var(--c-border)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex-shrink-0">
                        <Link to={getTranslatedPath('/')}>
                            <img src="https://i.postimg.cc/Qd8yW639/vkambergems-logo-small.png" alt="Vicky Amber & Gems Logo" className="h-16 w-auto"/>
                        </Link>
                    </div>

                    <DesktopNav />

                    <div className="flex items-center">
                        <div className="hidden lg:block border-s border-[var(--c-border)] mx-2 h-6"></div>
                        <div className="hidden lg:block">
                           <LanguageSwitcher />
                        </div>

                        <button className="relative p-2 rounded-full hover:bg-[var(--c-accent-primary)]/10 transition-colors ms-2" aria-label="View shopping cart">
                            <CartIcon className="h-6 w-6 text-[var(--c-text-primary)] opacity-80" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -end-1 block h-5 w-5 rounded-full bg-[var(--c-accent-secondary)] text-white text-xs flex items-center justify-center border-2 border-[var(--c-bg)]">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <div className="lg:hidden ms-2">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-[var(--c-text-primary)] opacity-80 hover:bg-[var(--c-accent-primary)]/10">
                                {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden bg-[var(--c-bg)]/95 border-t border-[var(--c-border)]">
                    <MobileNav />
                </div>
            )}
        </header>
    );
};

export default Header;
