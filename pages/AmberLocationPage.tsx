
import React, { useState, useEffect } from 'react';
import SectionDivider from '../components/SectionDivider';
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


const AmberLocationPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[11]}')`}}
        >
            <SEO
                titleKey="seo_amber_location_title"
                descriptionKey="seo_amber_location_desc"
                keywordsKey="seo_amber_location_keywords"
                imageUrl="https://i.postimg.cc/YSjbzK3j/Vicky-Amber-Gems-background-0010.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">Where Burmese Amber is Found</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">The Heart of the Hukawng Valley</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>A Single, Precious Source</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>Virtually all of the world's Burmese amber, or Burmite, is mined from a single location: the Hukawng Valley in the Kachin State of northern Myanmar. This remote, jungle-clad region is the exclusive source of this 99-million-year-old gemstone.</p>
                            <p>The amber deposits are found in layers of clay and stone dating back to the Cretaceous period. The challenging terrain and political instability of the region make mining difficult, contributing to the rarity and value of Burmite.</p>
                        </div>
                        <div className="not-prose">
                           <ImageWithAlt src="https://placehold.co/800x450/9FB8AD/FFFFFF?text=Hukawng+Valley,+Myanmar" alt="A lush, green, and remote jungle landscape representing the Hukawng Valley in Myanmar." />
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopButton />
        </div>
    );
};

export default AmberLocationPage;
