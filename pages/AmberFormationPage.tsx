
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

const AmberFormationPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[13]}')`}}
        >
            <SEO
                titleKey="seo_amber_formation_title"
                descriptionKey="seo_amber_formation_desc"
                keywordsKey="seo_amber_formation_keywords"
                imageUrl="https://i.postimg.cc/L89yhZgt/Vicky-Amber-Gems-background-0012.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">How Burmese Amber is Formed</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">A Million-Year Metamorphosis</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>From Liquid Resin to Solid Gem</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>The formation of amber is a multi-million-year process of polymerization. It begins as a sticky resin exuded by ancient trees to heal wounds. This resin is not sap; it is a complex organic compound that is resistant to decay.</p>
                            <p>For it to become true amber, this resin must be buried under sediment, typically in an oxygen-poor environment like a river delta or lagoon. Over millions of years, under immense heat and pressure, the volatile organic molecules within the resin link together, cross-link, and harden. This process transforms the soft, sticky resin into a hard, fossilized gem. Younger, partially-fossilized resin is known as copal and lacks the hardness and durability of true amber like Burmite.</p>
                        </div>
                        <div className="not-prose">
                           <ImageWithAlt src="https://placehold.co/800x450/7E6B64/FFFFFF?text=Resin+to+Amber" alt="A diagram showing the transformation process from liquid tree resin, to copal, to fully fossilized amber." />
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopButton />
        </div>
    );
};

export default AmberFormationPage;
