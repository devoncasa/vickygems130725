
import React, { useState, useEffect } from 'react';
import SectionDivider from '../components/SectionDivider';
import { BACKGROUND_IMAGES, AMBER_COLOR_DETAILS } from '../constants';
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

const AmberColorsPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[4]}')`}}
        >
            <SEO 
                titleKey="seo_amber_colors_title"
                descriptionKey="seo_amber_colors_desc"
                keywordsKey="seo_amber_colors_keywords"
                imageUrl="https://i.postimg.cc/Xq6LWZ0y/Vicky-Amber-Gems-background-001.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">The Different Types of Burmese Amber</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">An Exploration of Color and Rarity</p>
                    </div>

                     <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        {AMBER_COLOR_DETAILS.map((amber) => (
                            <React.Fragment key={amber.id}>
                                <h2 id={amber.id}>{amber.name}</h2>
                                <SectionDivider/>
                                <p>{amber.description}</p>
                                <p><strong>Rarity:</strong> {amber.rarity}</p>
                                {amber.specialNote && <p><strong>Special Note:</strong> {amber.specialNote}</p>}
                                <div className="not-prose">
                                    <ImageWithAlt src={amber.imageUrl} alt={`A piece of ${amber.name} showing its unique color and texture.`} />
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <BackToTopButton />
        </div>
    );
};

export default AmberColorsPage;
