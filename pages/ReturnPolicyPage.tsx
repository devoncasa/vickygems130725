
import React from 'react';
import SectionDivider from '../components/SectionDivider';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';

const ImageWithAlt: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = 'aspect-video' }) => (
    <div className={`w-full bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center my-6 overflow-hidden ${className}`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover"/>
    </div>
);

const ReturnPolicyPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[32]}')` }}
        >
            <SEO 
                titleKey="seo_return_policy_title"
                descriptionKey="seo_return_policy_desc"
                keywordsKey="seo_return_policy_keywords"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">Return Policy</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">Last Updated: October 12, 2023</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>1. Our Philosophy on Returns & Customer Satisfaction</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>Our return policy is designed to ensure our customers are completely satisfied with their purchases. If you experience any issues with your purchase, we strongly encourage you to reach out to us for a resolution before requesting a return.</p>
                            <p>Our primary goal is to provide exceptional customer service and a positive shopping experience for all of our customers.</p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Customer+Service" alt="A friendly customer service representative with a headset, symbolizing our commitment to satisfaction." /></div>

                        <h2>2. The Personal Nature of Burmese Amber</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>Burmese amber has the unique ability to absorb the natural oils and fumes of its owner, making each piece deeply personal. Over time, it attunes to the energy and essence of the individual who wears it.</p>
                            <p>Because of this intimate characteristic, exchanging ownership of Burmese amber jewelry is not suitable. This principle is similar to clothing that has been worn; it can no longer be considered new or untouched. When choosing Burmese amber jewelry, it is important to keep in mind that it will become a unique piece, specific to you.</p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Personal+Connection" alt="A close-up of a person's hand wearing an amber bracelet, showing the personal connection to the jewelry." /></div>

                        <h2>3. Conditions for an Accepted Return</h2>
                        <SectionDivider/>
                        <h3>Incorrect Item Received</h3>
                        <p>We will only accept returns if the items received are different from what was agreed upon during the ordering process. If you have received an incorrect item, please contact us immediately.</p>
                        
                        <h3>Authenticity Claims</h3>
                        <p>If you believe an item is not authentic, you may provide a certificate from a reliable, independent gemologist or gem lab to prove your claim. In the unlikely event that an item is found to be not authentic, we will provide a full refund or replacement.</p>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Authenticity+Verified" alt="An image comparing two different items side-by-side, with a gemology certificate to represent authenticity verification." /></div>

                        <h2>4. Non-Returnable Circumstances</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>Due to the personal nature of our products and the fact that they are made to order, returns will not be accepted if you change your mind or decide you no longer want the item.</p>
                            <p>We ask that you make your selection thoughtfully, understanding that you are choosing a piece that will become uniquely yours.</p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Final+Sale" alt="An icon or stamp that clearly indicates 'Final Sale' or 'No Returns' to illustrate the policy." /></div>

                        <h2>5. How to Proceed</h2>
                        <SectionDivider/>
                       <p>
                            If you believe your order qualifies for a return based on the conditions above, or if you have any other issues with your purchase, please contact us first.
                        </p>
                        <address className="not-prose not-italic space-y-1 text-lg">
                            <p><strong>Email:</strong> info.vkamber@gmail.com</p>
                            <p>We will work with you to find a satisfactory resolution.</p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnPolicyPage;
