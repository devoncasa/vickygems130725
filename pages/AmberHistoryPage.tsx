
import React, { useState, useEffect } from 'react';
import SectionDivider from '../components/SectionDivider';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';

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


const AmberHistoryPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[10]}')`}}
        >
            <SEO
                titleKey="seo_amber_history_title"
                descriptionKey="seo_amber_history_desc"
                keywordsKey="seo_amber_history_keywords"
                imageUrl="https://i.postimg.cc/Xq6LWZ0y/Vicky-Amber-Gems-background-001.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">History of Burmese Amber</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">A Journey Through Time</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>A Glimpse into a Prehistoric World</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>Burmese amber, or Burmite, is a direct portal to the Cretaceous period, over 99 million years ago. While dinosaurs roamed the Earth, ancient conifers in what is now Myanmar exuded resin that trapped a complete ecosystem within its embrace.</p>
                            <p>Unlike younger ambers, Burmite preserves a vanished world, containing the most diverse range of prehistoric life found in fossilized resin. For centuries, it was known to local people, used in medicine and as amulets. It entered the Silk Road trade during the Chinese Han Dynasty, where it was prized as “hu po” (Tiger's soul) and reserved for royalty, symbolizing power and purity.</p>
                        </div>
                        <div className="not-prose">
                           <ImageWithAlt src="https://placehold.co/800x450/A56C50/FFFFFF?text=Prehistoric+Amber" alt="An artistic depiction of a prehistoric forest with large conifers exuding resin, with a dinosaur in the background." />
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopButton />
        </div>
    );
};

export default AmberHistoryPage;
