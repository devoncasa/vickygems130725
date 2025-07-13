
import React from 'react';
import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { useLanguage } from '../i18n/LanguageContext';

const ImageWithAlt: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = 'aspect-video' }) => (
    <div className={`w-full bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center my-6 overflow-hidden ${className}`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover"/>
    </div>
);

const AboutPage: React.FC = () => {
    const { lang } = useLanguage();
    
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "About Vicky Amber & Gems",
        "url": window.location.href,
        "description": "Discover the story behind Vicky Amber & Gems, our mission to provide authentic Burmese amber, and our commitment to transparency and ethical sourcing from Myanmar.",
        "inLanguage": lang,
        "isPartOf": {
            "@type": "WebSite",
            "url": window.location.origin,
            "name": "Vicky Amber & Gems"
        }
    };

    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[0]}')`}}
        >
            <SEO 
                titleKey="seo_about_title"
                descriptionKey="seo_about_desc"
                keywordsKey="seo_about_keywords"
                imageUrl="https://i.postimg.cc/L89yhZgt/Vicky-Amber-Gems-background-0012.jpg"
            />
            <JsonLd data={webPageSchema} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">About Vicky Amber & Gems</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">Connecting Discerning Individuals to the Spirit of Myanmar</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <div className="not-prose">
                           <ImageWithAlt src="https://placehold.co/1200x675/A56C50/F8F5F2?text=Vicky+Amber+%26+Gems" alt="Hero banner showing an array of beautiful Burmese amber gems" />
                        </div>
                        
                        <h2>Our Story</h2>
                        <SectionDivider />
                        <div className="not-prose grid md:grid-cols-2 gap-8 items-center text-lg text-[var(--c-text-primary)]/90">
                            <div className="space-y-6 text-left">
                                <p>
                                    Founded on a passion for genuine Burmese amber, Vicky Amber & Gems began as a personal journey. Vicky Sinchoury, our founder, embarked on a mission to bring these rare, 99-million-year-old treasures from the historic mines of Myanmar to the global stage.
                                </p>
                                <p>
                                    What started as a simple appreciation for their beauty grew into a commitment to authenticity, ethical sourcing, and scientific verification. Today, Vicky Amber & Gems stands as a trusted bridge between the ancient world of Burmite and discerning collectors worldwide.
                                </p>
                            </div>
                            <ImageWithAlt src="https://placehold.co/600x600/7E746A/FFFFFF?text=Vicky+Sinchoury" alt="Portrait of Vicky Sinchoury, Founder of Vicky Amber & Gems" className="aspect-square" />
                        </div>

                        <h2>Our Mission</h2>
                        <SectionDivider />
                        <p>
                            Our mission is to be the most trusted global source for authentic Burmese amber and other precious gems from Myanmar. We are committed to:
                        </p>
                        <ul>
                            <li><strong>Authenticity:</strong> Guaranteeing every piece is 100% genuine and scientifically verified.</li>
                            <li><strong>Transparency:</strong> Providing clear, honest information about our products, pricing, and processes.</li>
                            <li><strong>Education:</strong> Empowering our clients with the knowledge to appreciate the unique history and qualities of their purchase.</li>
                            <li><strong>Ethical Sourcing:</strong> Working directly with local miners to ensure fair practices and respect for the communities and the land.</li>
                        </ul>
                        <div className="not-prose">
                            <ImageWithAlt src="https://placehold.co/1200x675/C8A97E/3D352E?text=High-Quality+Burmite" alt="Close-up of a high-quality Burmese amber piece showing its clarity and inclusions" />
                        </div>

                        <h2>Our Vision</h2>
                        <SectionDivider />
                        <p>
                            We envision a world where the timeless beauty and spiritual significance of Burmese amber is accessible to all who seek it. We aim to cultivate a global community of collectors and enthusiasts who value authenticity, history, and the profound connection between humanity and the natural world.
                        </p>
                        <div className="not-prose">
                            <ImageWithAlt src="https://placehold.co/1200x675/B27732/FFFFFF?text=Amber+Mala" alt="Hands holding a string of amber prayer beads, symbolizing a spiritual connection" />
                        </div>
                        
                        <h2>Why Choose Us?</h2>
                        <SectionDivider />
                        <p>
                            Choosing Vicky Amber & Gems means choosing unparalleled quality and integrity. We offer:
                        </p>
                         <ul>
                            <li><strong>Unwavering Authenticity:</strong> Our guarantee is backed by gemological expertise and scientific testing.</li>
                            <li><strong>Scientific Verification:</strong> We use modern tools to ensure you are getting real Burmite, not imitations.</li>
                             <li><strong>Ethical and Direct Sourcing:</strong> A clear, fair supply chain from the mine to you.</li>
                             <li><strong>Expert Knowledge:</strong> Decades of experience and professional certification at your service.</li>
                        </ul>
                        <div className="not-prose">
                            <ImageWithAlt src="https://placehold.co/1200x675/9FB8AD/3D352E?text=Gemology" alt="A gemologist carefully inspecting a gemstone with professional tools" />
                        </div>

                        {/* Call to Action */}
                        <div className="not-prose text-center mt-16">
                             <h2 className="text-3xl md:text-4xl font-bold text-[var(--c-heading)]">Join Us on This Journey</h2>
                              <div className="w-48 h-1 bg-[var(--c-accent-primary)]/30 mx-auto my-6 rounded-full"></div>
                             <p className="text-lg text-[var(--c-text-secondary)] max-w-2xl mx-auto">
                                We invite you to explore our collections and discover a piece of ancient history that resonates with your spirit. Experience the warmth, beauty, and timeless energy of the world's oldest amber.
                             </p>
                             <Link to="/collection" className="mt-8 inline-block btn-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg text-lg">
                                Explore the Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
