
import React from 'react';
import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { useLanguage } from '../i18n/LanguageContext';

const PricingGuidePage: React.FC = () => {
    const { lang } = useLanguage();

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Amber Pricing & Quality Guide",
        "url": window.location.href,
        "description": "Understand the value of your amber with our transparent guide to pricing based on color, rarity, clarity, and craftsmanship. Learn why bead size matters.",
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
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[28]}')` }}
        >
            <SEO 
                titleKey="seo_pricing_guide_title"
                descriptionKey="seo_pricing_guide_desc"
                keywordsKey="seo_pricing_guide_keywords"
                imageUrl="https://i.postimg.cc/gcfFw4Gv/Vicky-Amber-Gems-background-0033.jpg"
            />
            <JsonLd data={webPageSchema} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold tracking-tight">Our Amber Pricing & Quality Guide</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">A Transparent Look into the Value of Your Amber</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <p className="lead">
                            At Vicky Amber & Gems, we believe that understanding the value of your piece is as important as its beauty. Our pricing is a direct reflection of rarity, quality, and craftsmanship. This guide provides a transparent look at how we determine the price of our authentic Burmese amber.
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 items-center not-prose my-12">
                             <div className="flex-shrink-0 w-full md:w-2/5 h-64 bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center overflow-hidden">
                                <img src="https://placehold.co/600x400/C8A97E/3D352E?text=Amber+Colors" alt="A spectrum of different amber colors from light honey to dark cherry, representing rarity" loading="lazy" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-4xl mt-0">The Foundation: Color & Rarity</h2>
                                <p className="text-[var(--c-text-secondary)]">
                                    The journey of pricing begins with the amber's natural color, which is a primary indicator of its rarity and market value. Each color tier has a different base price per gram.
                                </p>
                            </div>
                        </div>
                        <ul>
                            <li><strong>Top Tiers (e.g., Mila, Black Amber):</strong> These are exceptionally rare and command the highest prices due to their unique visual properties and limited availability.</li>
                            <li><strong>Mid Tiers (e.g., Cherry Red, Pigeon Blood):</strong> Valued for their pure, gem-like tones, these colors are uncommon and highly sought after.</li>
                            <li><strong>Classic Tiers (e.g., Golden, Honey):</strong> These are the more traditional and widely recognized colors of Burmese amber, offering a classic beauty at a more accessible price point.</li>
                        </ul>
                        
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center not-prose my-12">
                             <div className="flex-shrink-0 w-full md:w-2/5 h-64 bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center overflow-hidden">
                                <img src="https://placehold.co/600x400/9FB8AD/3D352E?text=Clarity+vs+Inclusions" alt="A comparison image showing a very clear amber piece next to one with natural cloud-like inclusions" loading="lazy" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-4xl mt-0">Beyond Color: The Nuances of Quality</h2>
                                <p className="text-[var(--c-text-secondary)]">
                                    Within each color, quality is paramount. Our "Quality Tier" filter helps you navigate these nuances, but it's not a simple one-size-fits-all metric. It adapts to the unique characteristics of each amber type.
                                </p>
                            </div>
                        </div>
                        
                        <div className="not-prose space-y-4 my-8">
                            <div className="p-6 bg-[var(--c-accent-primary)]/20 border-l-4 border-[var(--c-accent-primary)] rounded-r-lg">
                                <h3 className="text-2xl font-semibold">For Most Amber: It's All About Clarity</h3>
                                <p className="mt-2 text-[var(--c-text-primary)]/80">For most colors, the Quality Tier (Standard, Select, Premium) directly corresponds to the amber's clarity. "Premium" pieces are exceptionally clear with minimal inclusions, while "Standard" pieces might have more visible natural patterns or "swirls."</p>
                            </div>
                            <div className="p-6 bg-[var(--c-accent-primary)]/30 border-l-4 border-[var(--c-accent-primary-hover)] rounded-r-lg">
                                <h3 className="text-2xl font-semibold">Exception: <Link to="/amber-colors#mila" className="text-[var(--c-accent-primary-hover)] hover:underline">Mila Amber</Link> & Richness</h3>
                                <p className="mt-2 text-[var(--c-text-primary)]/80">Mila amber is unique. Its value isn't just in clarity but in its 'richness'—the depth and complexity of its semi-liquid, semi-solid internal structure. A "Premium" Mila piece has an almost molten-gold appearance, a quality far rarer than simple clarity.</p>
                            </div>
                             <div className="p-6 bg-[var(--c-heading)]/80 text-white border-l-4 border-[var(--c-heading)] rounded-r-lg">
                                <h3 className="text-2xl font-semibold text-white">Exception: <Link to="/amber-colors#black" className="text-gray-300 hover:underline">Black Amber</Link> & Purity</h3>
                                <p className="mt-2 text-neutral-300">For Black Amber, the ultimate prize is purity of color. A "Premium" piece is a deep, uniform black with no brown undertones. This is incredibly rare, as most black amber is simply the darkest part of a brown piece.</p>
                            </div>
                        </div>

                         <div className="flex flex-col md:flex-row gap-8 items-center not-prose my-12">
                             <div className="flex-shrink-0 w-full md:w-2/5 h-64 bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center overflow-hidden">
                                <img src="https://placehold.co/600x400/7E746A/FFFFFF?text=Bead+Sizes" alt="A lineup of amber beads in increasing sizes from 8mm to 14mm, showing the concept of scale" loading="lazy" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-4xl mt-0">Craftsmanship & Scarcity: The Bead Size Rule</h2>
                                <p className="text-[var(--c-text-secondary)]">
                                   The final major factor is bead size. As beads get larger, their price increases not linearly, but exponentially.
                                </p>
                            </div>
                        </div>
                        <ol>
                            <li><strong>Scarcity of Material:</strong> It is much harder to find large, flawless pieces of raw amber from which to carve large beads. A single large bead might require a piece of raw amber that could have produced dozens of smaller beads.</li>
                            <li><strong>Crafting Risk:</strong> The process of rounding a large bead carries a higher risk of revealing hidden fissures, which would render the entire piece unusable.</li>
                        </ol>
                        <p>
                            To reflect this, our pricing is based on a well-established gemological rule: <strong>for every 0.25mm increase in bead size from a 10mm baseline, the price increases by 5%.</strong> This ensures the price accurately reflects the exponential increase in the value and scarcity of the material required.
                        </p>

                        <div className="mt-16 text-center not-prose">
                            <h3 className="text-3xl">See It in Action</h3>
                            <p className="mt-2 text-[var(--c-text-secondary)]">Ready to see how these rules come together? Use our builder to create your pre-order and watch the transparent price breakdown update with every choice you make.</p>
                            <Link to="/build-your-set" className="mt-6 inline-block btn-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg">
                                Build Your Custom Pre-Order
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingGuidePage;
