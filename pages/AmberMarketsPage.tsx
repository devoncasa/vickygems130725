
import React, { useState, useEffect } from 'react';
import SectionDivider from '../components/SectionDivider';
import SEO from '../components/SEO';
import { BACKGROUND_IMAGES } from '../constants';

const ImageWithAlt: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = 'aspect-video' }) => (
    <div className={`w-full bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center my-6 overflow-hidden ${className}`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover"/>
    </div>
);

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 bg-[var(--c-accent-primary)] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
            aria-label="Go to top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
};

const AmberMarketsPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[22]}')`}}
        >
            <SEO
                titleKey="seo_amber_markets_title"
                descriptionKey="seo_amber_markets_desc"
                keywordsKey="seo_amber_markets_keywords"
                imageUrl="https://i.postimg.cc/15x2RtKB/Vicky-Amber-Gems-background-0024.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">Roles in Current Markets</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">From Luxury Goods to Scientific Data</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>A Multifaceted Gem</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>Burmese amber plays a distinct role in several markets. In the luxury goods market, it is a unique material for high-end jewelry and bespoke pieces. In the scientific community, it is an invaluable data source for paleontological research.</p>
                            <p>In the collector's market, particularly in Asia, it is a symbol of status, wisdom, and a tangible link to deep time, often seen as a store of value similar to fine art.</p>
                        </div>
                        <div className="not-prose">
                           <ImageWithAlt src="https://placehold.co/800x450/B27732/FFFFFF?text=Global+Markets" alt="A collage showing amber in different contexts: a luxury jewelry display, a scientific lab, and an art auction." />
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopButton />
        </div>
    );
};

export default AmberMarketsPage;
