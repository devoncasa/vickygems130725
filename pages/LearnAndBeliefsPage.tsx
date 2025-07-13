
import React from 'react';
import SectionDivider from '../components/SectionDivider';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { useLanguage } from '../i18n/LanguageContext';

const OurGuaranteePage: React.FC = () => {
    const { lang } = useLanguage();

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Our Guarantee of Authenticity",
        "url": window.location.href,
        "description": "Learn about our unwavering commitment to authenticity, ethical sourcing, and scientific verification for every piece of Burmese amber and gemstone we sell.",
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
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[26]}')` }}
        >
            <SEO 
                titleKey="seo_guarantee_title"
                descriptionKey="seo_guarantee_desc"
                keywordsKey="seo_guarantee_keywords"
                imageUrl="https://i.postimg.cc/Bn7C6703/Vicky-Amber-Gems-background-002.jpg"
            />
            <JsonLd data={webPageSchema} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold tracking-tight">Our Guarantee</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">Authenticity You Can Trust. Transparency You Deserve.</p>
                    </div>
                    
                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <div className="space-y-4">
                            <p>
                               At Vicky Amber & Gems, our foundation is built on an unwavering commitment to authenticity.
                            </p>
                            <p>
                                We understand that you are not just purchasing a gemstone, but a piece of natural history. Our guarantee is our promise that you are receiving genuine, ethically sourced, and scientifically verified Burmite amber.
                            </p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-8 items-center not-prose my-12">
                            <div className="flex-grow">
                                <h2 className="text-4xl mt-0">The Science of Authenticity</h2>
                                <SectionDivider />
                                <p className="text-[var(--c-text-secondary)]">
                                    We bridge the gap between ancient wisdom and modern science. To ensure every piece meets the highest standards, we employ a multi-step verification process.
                                </p>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-1/3 h-48 bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center text-center overflow-hidden">
                                <img src="https://placehold.co/400x300/F0EBE6/534B42?text=UV+Fluorescence+Test" alt="UV fluorescence testing of amber" className="w-full h-full object-cover" loading="lazy" />
                            </div>
                        </div>

                        <ul>
                            <li><strong>Expert Gemological Analysis:</strong> Each piece is inspected by certified gemologists who specialize in amber. They analyze color, clarity, and the unique characteristics of Burmite.</li>
                            <li><strong>UV Fluorescence Testing:</strong> Genuine Burmese amber exhibits a distinct strong, milky-blue fluorescence under ultraviolet light, a key indicator that easily separates it from common imitations like copal or plastic.</li>
                            <li><strong>Microscopic Inclusion Study:</strong> We examine the prehistoric inclusions—the tiny flora and fauna trapped within the amber—which are characteristic of the Cretaceous period from which Burmite originates. These natural time capsules are impossible to fake.</li>
                        </ul>

                        <div className="mt-16 not-prose grid md:grid-cols-2 gap-8 items-center bg-[var(--c-surface-alt)] p-8 rounded-lg">
                             <div className="space-y-4">
                                <h3 className="text-3xl">Ethical & Transparent Sourcing</h3>
                                <p className="text-[var(--c-text-secondary)]">
                                    We are deeply committed to a supply chain that honors both the land and its people. We achieve this through:
                                </p>
                                <ul className="space-y-2 text-[var(--c-text-secondary)] list-disc list-inside">
                                    <li><strong>Direct Partnerships:</strong> We work directly with small-scale, trusted miners and artisans in the Hukawng Valley, eliminating middlemen.</li>
                                    <li><strong>Ethical Extraction:</strong> Our relationships ensure that our amber is sourced with respect for the local environment.</li>
                                    <li><strong>Fair Compensation:</strong> We guarantee that the local communities who are the custodians of this resource are treated with respect and compensated fairly.</li>
                                    <li><strong>Full Transparency:</strong> We believe in a clear, traceable path for every gemstone, from the mine to your hands.</li>
                                </ul>
                            </div>
                            <div className="aspect-w-4 aspect-h-3 rounded-lg shadow-md overflow-hidden bg-white flex items-center justify-center text-center">
                                <img src="https://placehold.co/400x300/F0EBE6/534B42?text=Ethical+Sourcing" alt="Hands holding raw gemstones, symbolizing ethical sourcing" className="w-full h-full object-cover" loading="lazy" />
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center not-prose my-12">
                            <div className="flex-grow">
                                <h2 className="text-4xl mt-0">Certificate of Authenticity</h2>
                                <SectionDivider />
                                <p className="text-[var(--c-text-secondary)]">
                                   Every item from Vicky Amber & Gems is accompanied by our official Certificate of Authenticity. This document is our written promise to you, confirming:
                                </p>
                                <ul className="mt-4 space-y-2 text-[var(--c-text-secondary)] list-disc list-inside">
                                    <li>The item's <strong>genuine nature</strong> as authentic Burmese Amber.</li>
                                    <li>The unique <strong>specifications</strong> of your piece.</li>
                                    <li>Its <strong>verified origin</strong> from Myanmar.</li>
                                    <li>Our commitment to your <strong>peace of mind</strong> and confidence in your investment.</li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-1/3 h-48 bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center text-center overflow-hidden">
                                 <img src="https://placehold.co/400x300/F0EBE6/534B42?text=Certificate" alt="Vicky Amber & Gems Certificate of Authenticity" className="w-full h-full object-cover" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurGuaranteePage;
