
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

const GemstoneSection: React.FC<{title: string, content: string, imageSrc: string, imageAlt: string}> = ({ title, content, imageSrc, imageAlt }) => (
    <div className="not-prose my-12">
        <h3 className="text-2xl font-semibold text-[var(--c-heading)] mb-3">{title}</h3>
        <p className="text-lg text-[var(--c-text-primary)]/90">{content}</p>
        <ImageWithAlt src={imageSrc} alt={imageAlt} className="aspect-w-16 aspect-h-9" />
    </div>
);


const AmberColorsAndTonesPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[24]}')`}}
        >
             <SEO
                titleKey="seo_amber_colors_tones_title"
                descriptionKey="seo_amber_colors_tones_desc"
                imageUrl="https://i.postimg.cc/ZY9zKXzb/Vicky-Amber-Gems-background-0034.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">The Color Spectrum of Burmese Gems</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">Myanmar is home to some of the world's most vibrant and diverse gemstones, with Burmese amber standing out not only for its age but for its surprising range of natural colors.</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>🟡 Burmese Amber</h2>
                        <SectionDivider/>
                        <p>Though often associated with golden or honey tones, Burmese amber can naturally appear in:</p>
                         <ul className="font-medium">
                             <li>Cherry red</li>
                             <li>Cognac brown</li>
                             <li>Green</li>
                             <li>Milky yellow (Mila)</li>
                             <li>Rare blue and violet sheens</li>
                         </ul>
                        <p>Some pieces even glow under UV light. These colors are influenced by age, oxidation, and mineral inclusions, making Burmese amber a rare organic gemstone with a wide emotional and visual appeal.</p>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/B27732/FFFFFF?text=Amber+Color+Variety" alt="A collage of different Burmese amber colors, including red, honey, and mila." /></div>

                        <h2>💎 Precious Gemstones from Myanmar</h2>
                        <SectionDivider/>
                        <GemstoneSection 
                            title="Ruby"
                            content="Famous for its 'pigeon blood' red tone, Burmese ruby also comes in various reds and pinks, symbolizing vitality and protection."
                            imageSrc="https://placehold.co/800x450/A72643/FFFFFF?text=Burmese+Ruby"
                            imageAlt="A high-quality, vibrant red Burmese ruby gemstone."
                        />
                         <GemstoneSection 
                            title="Sapphire"
                            content="Known for deep blues, but also found in yellow, green, pink, and colorless varieties. Each shade offers different symbolic meanings—wisdom, peace, prosperity."
                            imageSrc="https://placehold.co/800x450/2A4C88/FFFFFF?text=Burmese+Sapphire"
                            imageAlt="A deep blue, velvety Burmese sapphire."
                        />
                        <GemstoneSection 
                            title="Spinel"
                            content="A lesser-known but highly colorful gemstone in shades of hot pink, violet, orange, red, and even cobalt blue. Spinel is prized for its brilliance and wide tonal range."
                            imageSrc="https://placehold.co/800x450/E63946/FFFFFF?text=Colorful+Spinel+Gems"
                            imageAlt="A collection of spinel gems in various bright colors like pink, orange, and violet."
                        />

                        <h2>🧿 Semi-Precious Gemstones</h2>
                        <SectionDivider/>
                        <GemstoneSection 
                            title="Peridot"
                            content="Bright green with a fiery glow."
                            imageSrc="https://placehold.co/800x450/93C47D/3D352E?text=Vibrant+Peridot"
                            imageAlt="A vibrant green peridot gemstone, glowing with light."
                        />
                        <GemstoneSection 
                            title="Zircon"
                            content="Found in blue, brown, yellow, and clear, with diamond-like sparkle."
                            imageSrc="https://placehold.co/800x450/A4C2F4/3D352E?text=Sparkling+Zircon"
                            imageAlt="A sparkling blue zircon with brilliant facets."
                        />
                         <GemstoneSection 
                            title="Moonstone"
                            content="Displays blue and silver sheen with mystical appeal."
                            imageSrc="https://placehold.co/800x450/D0E0E3/3D352E?text=Mystical+Moonstone"
                            imageAlt="A moonstone gemstone showing its characteristic blue adularescence."
                        />
                    
                        <h2>A Tapestry of Time and Earth</h2>
                        <SectionDivider/>
                        <p>Each stone’s tone and color reflect millions of years of formation, and their variety allows jewelers, collectors, and spiritual users to find stones that align with specific energies, styles, and meanings.</p>
                    </div>
                </div>
            </div>
            <BackToTopButton />
        </div>
    );
};

export default AmberColorsAndTonesPage;
