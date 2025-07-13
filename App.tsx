
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Outlet, useParams, useNavigate, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BuildYourOwnPage from './pages/BuildYourOwnPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OurGuaranteePage from './pages/LearnAndBeliefsPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PricingGuidePage from './pages/PricingGuidePage';
import AmberColorsPage from './pages/AmberColorsPage';
import ScrollToTop from './components/ScrollToTop';
import { Chatbot } from './components/Chatbot';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CareGuidePage from './pages/CareGuidePage';
import PreOrderPolicyPage from './pages/PreOrderPolicyPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import WarrantyPolicyPage from './pages/WarrantyPolicyPage';
import ReturnPolicyPage from './pages/ReturnPolicyPage';
import GitInfoPage from './pages/GitInfoPage';
import Breadcrumbs from './components/Breadcrumbs';

// Import new Amber Guide pages
import AmberHistoryPage from './pages/AmberHistoryPage';
import AmberLocationPage from './pages/AmberLocationPage';
import AmberUniquenessPage from './pages/AmberUniquenessPage';
import AmberFormationPage from './pages/AmberFormationPage';
import AmberPropertiesPage from './pages/AmberPropertiesPage';
import AmberAuthPage from './pages/AmberAuthPage';
import AmberIndustryUsePage from './pages/AmberIndustryUsePage';
import AmberComparisonAmbersPage from './pages/AmberComparisonAmbersPage';
import AmberComparisonMineralsPage from './pages/AmberComparisonMineralsPage';
import AmberAvailabilityPage from './pages/AmberAvailabilityPage';
import AmberRegulationsPage from './pages/AmberRegulationsPage';
import AmberFutureTrendsPage from './pages/AmberFutureTrendsPage';
import AmberFutureTechPage from './pages/AmberFutureTechPage';
import AmberMarketsPage from './pages/AmberMarketsPage';
import AmberReligionPage from './pages/AmberReligionPage';
import AmberColorsAndTonesPage from './pages/AmberColorsAndTonesPage';

// i18n imports
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { LanguageCode, languages, DEFAULT_LANG } from './i18n/config';

const Layout: React.FC = () => {
    const [cartCount, setCartCount] = useState(0);
    const { lang, dir } = useLanguage();
    const { pathname } = useLocation();
    
    // Determine if it's the home page for the current language
    const isHomePage = pathname === `/${lang}` || pathname === `/${lang}/`;

    return (
        <div className="flex flex-col min-h-screen" dir={dir}>
            <Header cartCount={cartCount} />
            {!isHomePage && <Breadcrumbs />}
            <main className="flex-grow pb-16 md:pb-0">
                <Outlet context={{ setCartCount }} />
            </main>
            <Footer />
            <Chatbot />
        </div>
    );
};

const LanguageWrapper: React.FC = () => {
    const { lang } = useParams<{ lang: string }>();
    const { setLang, availableLanguages } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const validLang = lang as LanguageCode;
        if (lang && availableLanguages[validLang]) {
            setLang(validLang);
             document.documentElement.lang = validLang;
             document.documentElement.dir = availableLanguages[validLang].direction;
        } else {
            // Redirect to default language if URL lang is invalid
            // Preserve the rest of the path
            const pathWithoutLang = location.pathname.split('/').slice(2).join('/');
            navigate(`/${DEFAULT_LANG}/${pathWithoutLang}`, { replace: true });
        }
    }, [lang, setLang, navigate, availableLanguages, location.pathname]);
    
    // This component sets the language context and then renders the main layout.
    return <Layout />;
};


const App: React.FC = () => {
    return (
        <LanguageProvider>
            <HashRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/:lang" element={<LanguageWrapper />}>
                        {/* Main Pages */}
                        <Route index element={<HomePage />} />
                        <Route path="collection" element={<CollectionPage />} />
                        <Route path="collection/:productId" element={<ProductDetailPage />} />
                        <Route path="build-your-set" element={<BuildYourOwnPage />} />
                        <Route path="order-confirmation" element={<OrderConfirmationPage />} />
                        <Route path="blog" element={<BlogPage />} />
                        <Route path="blog/:postId" element={<BlogPostPage />} />
                        
                        {/* Detailed Content Pages */}
                        <Route path="our-guarantee" element={<OurGuaranteePage />} />
                        <Route path="pricing-guide" element={<PricingGuidePage />} />
                        <Route path="amber-colors" element={<AmberColorsPage />} />
                        <Route path="about" element={<AboutPage />} />

                        {/* New Standalone Pages */}
                        <Route path="faqs" element={<FaqPage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="git-info" element={<GitInfoPage />} />
                        
                        {/* Policy Pages */}
                        <Route path="policies/colors-and-tones" element={<AmberColorsAndTonesPage />} />
                        <Route path="policies/care-guide" element={<CareGuidePage />} />
                        <Route path="policies/pre-order" element={<PreOrderPolicyPage />} />
                        <Route path="policies/shipping" element={<ShippingPolicyPage />} />
                        <Route path="policies/warranty" element={<WarrantyPolicyPage />} />
                        <Route path="policies/returns" element={<ReturnPolicyPage />} />
                        <Route path="policies/privacy" element={<PrivacyPolicyPage />} />

                        {/* Amber Guide Pages */}
                        <Route path="amber-guide/history" element={<AmberHistoryPage />} />
                        <Route path="amber-guide/location" element={<AmberLocationPage />} />
                        <Route path="amber-guide/uniqueness" element={<AmberUniquenessPage />} />
                        <Route path="amber-guide/formation" element={<AmberFormationPage />} />
                        <Route path="amber-guide/properties" element={<AmberPropertiesPage />} />
                        <Route path="amber-guide/authentication" element={<AmberAuthPage />} />
                        <Route path="amber-guide/industry-use" element={<AmberIndustryUsePage />} />
                        <Route path="amber-guide/comparison-ambers" element={<AmberComparisonAmbersPage />} />
                        <Route path="amber-guide/comparison-minerals" element={<AmberComparisonMineralsPage />} />
                        <Route path="amber-guide/availability" element={<AmberAvailabilityPage />} />
                        <Route path="amber-guide/regulations" element={<AmberRegulationsPage />} />
                        <Route path="amber-guide/future-trends" element={<AmberFutureTrendsPage />} />
                        <Route path="amber-guide/future-tech" element={<AmberFutureTechPage />} />
                        <Route path="amber-guide/markets" element={<AmberMarketsPage />} />
                        <Route path="amber-guide/religion" element={<AmberReligionPage />} />
                    </Route>
                    {/* Redirect from root to default language */}
                    <Route path="*" element={<Navigate to={`/${DEFAULT_LANG}/`} replace />} />
                </Routes>
            </HashRouter>
        </LanguageProvider>
    );
};

export default App;