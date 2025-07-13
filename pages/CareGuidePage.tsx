
import React from 'react';
import SectionDivider from '../components/SectionDivider';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';

const ImageWithAlt: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = 'aspect-video' }) => (
    <div className={`w-full bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center my-6 overflow-hidden ${className}`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover"/>
    </div>
);

const CareGuidePage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[21]}')` }}
        >
            <SEO 
                titleKey="seo_care_guide_title"
                descriptionKey="seo_care_guide_desc"
                keywordsKey="seo_care_guide_keywords"
                imageUrl="https://i.postimg.cc/Twz7P7n1/Vicky-Amber-Gems-background-0017.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">How to Take Care of Burmese Amber Jewelry</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)] max-w-3xl mx-auto">
                            Burmese amber, or Burmite, is a precious organic gemstone that requires special care to maintain its natural beauty and integrity. Unlike harder mineral gemstones, amber is soft and can be susceptible to damage if not handled correctly. Follow these guidelines to ensure your amber jewelry remains a timeless treasure for generations to come.
                        </p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>Gentle Cleaning</h2>
                        <SectionDivider />
                        <div className="space-y-4">
                            <p>
                                Use a soft, lint-free cloth (like a microfiber or flannel cloth) dampened with lukewarm water to gently wipe your amber jewelry. This is usually sufficient to remove dust and oils.
                            </p>
                            <p>
                                For more stubborn grime, you can use a mild, non-detergent soap mixed with lukewarm water. Rinse thoroughly with clean water and dry immediately with a soft cloth.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Gentle+Cleaning" alt="A person's hands gently wiping an amber necklace with a soft, white cloth." /></div>

                        <h2>Avoid Harsh Chemicals</h2>
                        <SectionDivider />
                        <div className="space-y-4">
                            <p>
                                Never use chemical cleaners, detergents, or ultrasonic cleaners on your amber jewelry. These can dull the surface and cause irreversible damage.
                            </p>
                             <p>
                                Remove your amber jewelry before applying perfume, hairspray, lotions, or sunscreen. The chemicals in these products can create a white coating on the amber that is difficult to remove.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Avoid+Chemicals" alt="An amber bracelet placed safely away from perfume bottles and lotion containers." /></div>
                        
                        <h2>Protect from Scratches</h2>
                        <SectionDivider />
                        <div className="space-y-4">
                            <p>
                                Amber is relatively soft (about 2.0-2.5 on the Mohs hardness scale), so it can be easily scratched by harder materials.
                            </p>
                             <p>
                                Store your amber jewelry separately from other jewelry, especially pieces with metal settings or harder gemstones like diamonds or sapphires. A soft pouch or a fabric-lined jewelry box is ideal.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Safe+Storage" alt="An amber pendant being placed into a soft, velvet jewelry pouch for protection." /></div>

                        <h2>Avoid Extreme Temperatures and Sunlight</h2>
                        <SectionDivider />
                        <div className="space-y-4">
                           <p>
                                Prolonged exposure to direct sunlight can cause amber to darken over time and may lead to brittleness.
                            </p>
                             <p>
                                Sudden temperature changes can also cause stress fractures. Avoid leaving your amber jewelry in a hot car or in direct sunlight for extended periods.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Protect+from+Sun" alt="Amber jewelry sitting in a shaded jewelry box, protected from direct sunlight streaming through a window." /></div>

                        <h2>Re-polishing</h2>
                        <SectionDivider />
                        <div className="space-y-4">
                           <p>
                                Over time, amber may lose some of its luster due to contact with skin and the environment. You can restore its shine by gently rubbing it with a small amount of olive oil on a soft cloth, then polishing it with a clean, dry cloth to remove any excess oil.
                            </p>
                             <p>
                                For deeper scratches or significant dullness, it is best to consult a professional jeweler who has experience with amber.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Polishing" alt="A soft cloth with a drop of oil being used to re-polish a set of amber beads." /></div>
                        
                        <h2>Wear with Care</h2>
                        <SectionDivider />
                         <p>
                            While amber is durable enough for everyday wear, it's best to remove it before engaging in strenuous activities, such as sports, gardening, or heavy lifting, to prevent impact damage.
                        </p>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Wear+With+Care" alt="A person taking off an amber ring before starting to garden." /></div>
                    
                        <h2>A Final Note</h2>
                        <SectionDivider />
                         <p>
                            By following these simple care instructions, you can preserve the natural warmth, beauty, and history of your Burmese amber jewelry, ensuring it continues to be a source of joy and fascination for years to come.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareGuidePage;
