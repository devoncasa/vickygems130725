
import React from 'react';
import SectionDivider from '../components/SectionDivider';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';

const ImageWithAlt: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = 'aspect-video' }) => (
    <div className={`w-full bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center my-6 overflow-hidden ${className}`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover"/>
    </div>
);

const WarrantyPolicyPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[32]}')` }}
        >
            <SEO 
                titleKey="seo_warranty_policy_title"
                descriptionKey="seo_warranty_policy_desc"
                keywordsKey="seo_warranty_policy_keywords"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">Warranty Policy</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">Last Updated: October 12, 2023</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>1. Our Commitment to Quality</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>At Vicky Amber & Gems, we stand behind the quality and craftsmanship of our products. Each piece is created with meticulous care and is inspected to ensure it meets our high standards before it reaches you. Our warranty reflects our confidence in the durability of our jewelry.</p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Quality+Inspection" alt="A gemologist's hands using tweezers to inspect a finished gemstone under a bright light." /></div>

                        <h2>2. What Our Warranty Covers</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>Our warranty covers manufacturing defects in materials and workmanship. A manufacturing defect is a flaw that is present at the time of purchase, resulting from the crafting process.</p>
                            <p>Examples of manufacturing defects may include:</p>
                        </div>
                         <ul>
                            <li>Faulty clasps or closures.</li>
                            <li>Structural weaknesses in settings or links.</li>
                            <li>Unusual discoloration of metal (not related to natural tarnishing).</li>
                        </ul>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Bracelet+Clasp" alt="A macro shot showing the detail of a high-quality, secure bracelet clasp." /></div>

                        <h2>3. What Our Warranty Does Not Cover</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>Our warranty does not cover damage resulting from:</p>
                            <ul>
                                <li>Normal wear and tear, including scratches, dents, or dulling of surfaces.</li>
                                <li>Accidental damage, misuse, or improper care.</li>
                                <li>Exposure to harsh chemicals, extreme temperatures, or moisture.</li>
                                <li>Loss or theft of the item.</li>
                                <li>Repairs or alterations performed by a third party not authorized by Vicky Amber & Gems.</li>
                            </ul>
                            <p>Please refer to our Care Guide for instructions on how to properly maintain your jewelry.</p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Damaged+Jewelry" alt="A piece of jewelry with visible scratches and a small chip, indicating accidental damage." /></div>

                        <h2>4. Warranty Period</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>Our warranty is valid for a period of one (1) year from the date of purchase. Please retain your original proof of purchase, as it will be required to make a warranty claim.</p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=One+Year+Warranty" alt="A calendar icon with a one-year period highlighted, representing the warranty period." /></div>

                        <h2>5. How to Make a Warranty Claim</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>If you believe your item has a manufacturing defect, please contact us at info.vkamber@gmail.com with the following information:</p>
                            <ul>
                                <li>Your full name and order number.</li>
                                <li>A clear description of the issue.</li>
                                <li>Photographs of the item, clearly showing the defect.</li>
                            </ul>
                            <p>Our team will review your claim and guide you through the next steps.</p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Contact+Support" alt="A person typing an email on a laptop, with an envelope icon in the foreground." /></div>
                        
                        <h2>6. Our Assessment Process</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>Once we receive your item, our gemologists and artisans will assess it to determine if the damage is due to a manufacturing defect. If the claim is approved, we will, at our discretion, either repair the item free of charge or provide a replacement of equal value. If the item is no longer available, we may offer a store credit.</p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Gemstone+Assessment" alt="A magnifying glass or loupe held over a gemstone, symbolizing careful assessment." /></div>

                        <h2>7. Disclaimer</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>Vicky Amber & Gems reserves the right to reject any warranty claim that does not meet our policy criteria. This warranty gives you specific legal rights, and you may also have other rights which vary by jurisdiction.</p>
                        </div>
                        
                        <h2>8. Contact Us</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>For any questions regarding our Warranty Policy, please contact our customer service team at info.vkamber@gmail.com.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarrantyPolicyPage;
