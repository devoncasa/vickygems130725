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

const AmberPropertiesPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[14]}')`}}
        >
            <SEO
                titleKey="seo_amber_properties_title"
                descriptionKey="seo_amber_properties_desc"
                imageUrl="https://i.postimg.cc/7YMsxNhP/Vicky-Amber-Gems-background-0013.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">Physical & Chemical Properties</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">The Scientific Signature of Burmite</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>The Defining Traits of Burmite</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                Burmese amber (Burmite) is an organic gemstone composed primarily of carbon, hydrogen, and oxygen. Its ancient origin and unique formation process have given it a distinct set of physical and chemical properties that not only set it apart from other ambers but also make it identifiable to gemologists.
                            </p>
                        </div>
                        <div className="not-prose">
                           <ImageWithAlt src="https://placehold.co/800x450/3D352E/FFFFFF?text=Amber+Properties" alt="An infographic illustrating the physical properties of amber: hardness, density, and refractive index." />
                        </div>
                        
                        <h2>Key Gemological Indicators</h2>
                        <SectionDivider/>
                         <ul>
                             <li>
                                <strong>Hardness:</strong> Burmite registers between 2.5 and 3.0 on the Mohs hardness scale. This makes it noticeably harder and more durable than younger ambers like Baltic amber (2.0-2.5), allowing it to take a higher polish and be suitable for more intricate carvings.
                             </li>
                             <li>
                                <strong>Density:</strong> With a specific gravity of approximately 1.08 g/cm³, Burmite is exceptionally lightweight. This property allows it to float in a saturated saltwater solution, a classic and effective test to differentiate it from denser imitations like glass or plastic.
                             </li>
                             <li>
                                <strong>Refractive Index (RI):</strong> The RI of Burmite is consistently around 1.54. Gemologists use a refractometer to measure this property, which helps reliably distinguish it from other resins and synthetic materials with different optical characteristics.
                             </li>
                             <li>
                                <strong>Fluorescence:</strong> Under ultraviolet (UV) light, Burmese amber exhibits a strong and characteristic fluorescence, typically appearing as a milky-blue or sometimes a yellowish-green hue. This natural glow is a key indicator of its authenticity and is difficult to replicate in forgeries.
                             </li>
                             <li>
                                <strong>Thermal Properties:</strong> Amber is a poor conductor of heat, which is why it feels warm to the touch compared to mineral gemstones, which feel cool.
                             </li>
                         </ul>
                         
                         <h2>Chemical Composition</h2>
                         <SectionDivider/>
                         <p>
                             Chemically, Burmite is a complex polymer of organic resins. While its exact formula varies, it does not contain succinic acid, a compound found in Baltic amber. This chemical difference is a key marker used in advanced laboratory tests like FTIR spectroscopy to confirm the geological origin of an amber specimen.
                         </p>

                    </div>
                </div>
            </div>
            <BackToTopButton />
        </div>
    );
};

export default AmberPropertiesPage;