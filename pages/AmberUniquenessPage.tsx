
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

const AmberUniquenessPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[12]}')`}}
        >
            <SEO
                titleKey="seo_amber_uniqueness_title"
                descriptionKey="seo_amber_uniqueness_desc"
                keywordsKey="seo_amber_uniqueness_keywords"
                imageUrl="https://i.postimg.cc/JzppX4j9/Vicky-Amber-Gems-background-0011.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">Why the Oldest Amber is in Myanmar</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">A Story of Geological Destiny</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>The Land Before Time: Gondwana's Legacy</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                The story of Burmese amber begins on the ancient supercontinent of Gondwana. The landmass that would one day become Myanmar was once part of this giant continent. As tectonic plates shifted over millions of years, this specific block of land, carrying with it ancient forests, broke away and began a long, slow journey northward.
                            </p>
                        </div>
                        <div className="not-prose">
                           <ImageWithAlt src="https://placehold.co/800x450/7E746A/FFFFFF?text=Tectonic+Collision" alt="A geological diagram showing tectonic plates colliding, representing the formation of Myanmar's amber deposits." />
                        </div>
                        
                        <h2>A Collision of Continents</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                             <p>
                                The crucial event in Burmite's creation was the collision of this drifting landmass with the Eurasian continent. This monumental tectonic impact created the immense pressure and geothermal heat required for fossilization. This process transformed the ancient tree resin, burying it deep within the earth and subjecting it to the perfect conditions to harden into the durable, gem-quality amber we know today.
                            </p>
                            <p>
                                While other regions had amber-producing forests, the unique intensity and timing of this geological event protected and preserved the resin for nearly 100 million years. In many other parts of the world, similar deposits were either destroyed by subsequent geological activity or never underwent the complete fossilization process.
                            </p>
                        </div>

                        <h2>Key Factors for Preservation</h2>
                        <SectionDivider/>
                        <ul>
                            <li><strong>Ancient Origin:</strong> The forests existed on the Gondwana supercontinent, providing the raw resin.</li>
                            <li><strong>Tectonic Journey:</strong> The landmass drifted into a unique position for a continental collision.</li>
                            <li><strong>Ideal Fossilization Conditions:</strong> The collision provided the necessary heat and pressure to create true, hard amber.</li>
                            <li><strong>Geological Stability:</strong> The region remained stable enough over the subsequent millions of years to protect the fragile amber deposits from destruction.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <BackToTopButton />
        </div>
    );
};

export default AmberUniquenessPage;
