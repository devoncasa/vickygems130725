
import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { PRODUCTS, BLOG_POSTS, BACKGROUND_IMAGES } from '../constants';
import ProductCard from '../components/ProductCard';
import SectionDivider from '../components/SectionDivider';
import useScrollAnimation from '../hooks/useScrollAnimation';
import CallToActionSection from '../components/CallToActionSection';
import SEO from '../components/SEO';
import { useLanguage } from '../i18n/LanguageContext';
import { Product } from '../types';
import JsonLd from '../components/JsonLd';

const heroImages = [
    'https://i.postimg.cc/cLNN457q/hero-section-background-vicky-001.jpg',
    'https://i.postimg.cc/90rcZR0v/hero-section-background-vicky-0010.jpg',
    'https://i.postimg.cc/FRP9Ygry/hero-section-background-vicky-0011.jpg',
    'https://i.postimg.cc/V6sfsH8s/hero-section-background-vicky-0012.jpg',
    'https://i.postimg.cc/Qd5xfTmD/hero-section-background-vicky-0013.jpg',
    'https://i.postimg.cc/nLJVghSD/hero-section-background-vicky-0014.jpg',
    'https://i.postimg.cc/vHCZ7zWX/hero-section-background-vicky-0015.jpg',
    'https://i.postimg.cc/CLRKftfz/hero-section-background-vicky-0016.jpg',
    'https://i.postimg.cc/02Ssvqwd/hero-section-background-vicky-002.jpg',
    'https://i.postimg.cc/2jMDg5VS/hero-section-background-vicky-003.jpg',
    'https://i.postimg.cc/kG0PSTkb/hero-section-background-vicky-004.jpg',
    'https://i.postimg.cc/RFbBSSdG/hero-section-background-vicky-005.jpg',
    'https://i.postimg.cc/76L4rG3f/hero-section-background-vicky-006.jpg',
    'https://i.postimg.cc/PqyH7z8g/hero-section-background-vicky-007.jpg',
    'https://i.postimg.cc/JzwRHhL2/hero-section-background-vicky-008.jpg',
    'https://i.postimg.cc/44SfZ5FZ/hero-section-background-vicky-009.jpg',
];

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
    const { ref, isVisible } = useScrollAnimation();
    return (
        <section ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
            {children}
        </section>
    );
};

interface OutletContextType {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const HomePage: React.FC = () => {
    const { setCartCount } = useOutletContext<OutletContextType>();
    const { lang, t } = useLanguage();
    const newArrivals = PRODUCTS.filter(p => p.isNewArrival).slice(0, 4);
    const blogSnippets = BLOG_POSTS.slice(0, 3);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleAddToCart = (product: Product) => {
        setCartCount(prev => prev + 1);
    };
    
    const getTranslatedPath = (path = '#') => `/${lang}${path === '/' ? '' : path}`;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);

    const websiteUrl = window.location.origin;
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Vicky Amber & Gems",
        "url": websiteUrl,
        "logo": "https://i.postimg.cc/Qd8yW639/vkambergems-logo-small.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+66-63-195-9922",
            "contactType": "Customer Service"
        },
        "sameAs": [
            "https://facebook.com/vickygems",
            "https://instagram.com/vickygems",
            "https://twitter.com/vickygems"
        ]
    };
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": websiteUrl,
        "inLanguage": lang,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${websiteUrl}/#/${lang}/collection?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };


    return (
        <div 
            className="space-y-20 md:space-y-28 pb-24 overflow-x-hidden page-container-with-bg"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[25]}')` }}
        >
            <SEO 
                titleKey="home_meta_title" 
                descriptionKey="home_meta_description" 
                keywordsKey="home_meta_keywords"
                imageUrl={heroImages[0]}
            />
            <JsonLd data={organizationSchema} />
            <JsonLd data={websiteSchema} />


            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[500px] sm:min-h-[600px] flex items-center justify-center text-white text-center bg-[var(--c-footer-bg)]">
                {heroImages.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-40' : 'opacity-0'}`}
                        style={{ backgroundImage: `url('${src}')` }}
                        aria-hidden={index !== currentImageIndex}
                    ></div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-heading)]/70 to-transparent z-10"></div>
                
                <div className="relative z-20 p-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>{t('home_hero_title')}</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" style={{textShadow: '0 1px 5px rgba(0,0,0,0.5)'}}>{t('home_hero_subtitle')}</p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to={getTranslatedPath('/collection')} className="btn-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg text-lg">
                            {t('home_hero_cta')}
                        </Link>
                    </div>
                </div>
            </section>
            
            <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold">{t('home_famed_mines_title')}</h2>
                     <p className="mt-4 text-lg text-[var(--c-text-primary)] opacity-90">{t('home_famed_mines_subtitle')}</p>
                </div>
                 <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <div className="text-center p-4">
                        <h3 className="text-2xl font-semibold">{t('home_gem_jade')}</h3>
                        <p className="text-sm mt-2 text-[var(--c-text-secondary)]">{t('home_gem_jade_desc')}</p>
                    </div>
                     <div className="text-center p-4">
                        <h3 className="text-2xl font-semibold">{t('home_gem_rubies')}</h3>
                        <p className="text-sm mt-2 text-[var(--c-text-secondary)]">{t('home_gem_rubies_desc')}</p>
                    </div>
                     <div className="text-center p-4">
                        <h3 className="text-2xl font-semibold">{t('home_gem_sapphires')}</h3>
                        <p className="text-sm mt-2 text-[var(--c-text-secondary)]">{t('home_gem_sapphires_desc')}</p>
                    </div>
                     <div className="text-center p-4">
                        <h3 className="text-2xl font-semibold">{t('home_gem_amber')}</h3>
                        <p className="text-sm mt-2 text-[var(--c-text-secondary)]">{t('home_gem_amber_desc')}</p>
                    </div>
                </div>
            </AnimatedSection>
            
            {/* New Arrivals Section */}
            <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center">{t('home_new_arrivals_title')}</h2>
                <SectionDivider />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {newArrivals.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </AnimatedSection>
            
            {/* Shop with Confidence Section */}
            <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="max-w-4xl mx-auto bg-[var(--c-surface)] p-8 rounded-lg shadow-lg border border-[var(--c-border)] text-center">
                    <h2 className="text-3xl font-bold">{t('home_confidence_title')}</h2>
                    <p className="mt-4 text-lg text-[var(--c-text-primary)] opacity-90">{t('home_confidence_subtitle')}</p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        <div>
                            <span className="text-4xl">🔬</span>
                            <h3 className="mt-2 text-xl font-semibold">{t('home_confidence_auth_title')}</h3>
                             <p className="text-sm text-[var(--c-text-secondary)] mt-1">{t('home_confidence_auth_desc')}</p>
                        </div>
                        <div>
                            <span className="text-4xl">🌍</span>
                            <h3 className="mt-2 text-xl font-semibold">{t('home_confidence_sourcing_title')}</h3>
                            <p className="text-sm text-[var(--c-text-secondary)] mt-1">{t('home_confidence_sourcing_desc')}</p>
                        </div>
                         <div>
                            <span className="text-4xl">🌱</span>
                            <h3 className="mt-2 text-xl font-semibold">{t('home_confidence_sustain_title')}</h3>
                             <p className="text-sm text-[var(--c-text-secondary)] mt-1">{t('home_confidence_sustain_desc')}</p>
                        </div>
                    </div>
                     <Link to={getTranslatedPath('/our-guarantee')} className="mt-8 inline-block btn-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg">
                        {t('home_confidence_cta')}
                    </Link>
                 </div>
            </AnimatedSection>
            
             {/* Blog Preview Section */}
            <AnimatedSection className="bg-transparent py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center">{t('home_blog_title')}</h2>
                    <SectionDivider />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogSnippets.map((post) => (
                             <Link 
                                to={getTranslatedPath(`/blog/${post.id}`)}
                                key={post.id} 
                                className="group block bg-[var(--c-surface)] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[var(--c-border)]"
                                >
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-[var(--c-surface-alt)] flex items-center justify-center">
                                    <img src={post.featuredImage} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-6">
                                    <span className={`text-sm font-bold uppercase tracking-widest ${post.category === 'Science' ? 'text-[var(--c-accent-secondary-hover)]' : 'text-[var(--c-accent-primary)]'}`}>{post.category}</span>
                                    <h3 className="text-2xl mt-2 leading-tight group-hover:text-[var(--c-accent-primary)] transition-colors">{post.title}</h3>
                                    <p className="mt-3 text-[var(--c-text-primary)] opacity-90 text-base line-clamp-3">{post.summary}</p>
                                    <p className="mt-4 font-semibold text-sm text-[var(--c-accent-primary)] group-hover:text-[var(--c-heading)]">
                                        {t('Read More')} &rarr;
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                     <div className="text-center mt-12">
                         <Link to={getTranslatedPath('/blog')} className="text-[var(--c-accent-primary)] hover:text-[var(--c-heading)] font-semibold transition-colors group">
                           {t('home_blog_cta')} <span className="transition-transform group-hover:translate-x-1 inline-block">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <CallToActionSection 
                    title={t('home_cta_title')}
                    subtitle={t('home_cta_subtitle')}
                    buttonText={t('home_cta_button')}
                    buttonLink={getTranslatedPath('/build-your-set')}
                    backgroundImageUrl="https://i.postimg.cc/pXtcbS21/Vicky-Amber-Gems-background-0014.jpg"
                />
            </AnimatedSection>
        </div>
    );
};

export default HomePage;