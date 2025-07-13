
import React from 'react';
import SectionDivider from '../components/SectionDivider';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';

const ImageWithAlt: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = 'aspect-video' }) => (
    <div className={`w-full bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center my-6 overflow-hidden ${className}`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover"/>
    </div>
);

const PreOrderPolicyPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[31]}')` }}
        >
            <SEO 
                titleKey="seo_preorder_policy_title"
                descriptionKey="seo_preorder_policy_desc"
                keywordsKey="seo_preorder_policy_keywords"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">Pre-Order Policy</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">Last Updated: October 12, 2023</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>Our Pre-Order Process</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                At Vicky Amber & Gems, our pre-order service allows you to commission a custom piece of Burmese amber jewelry tailored to your exact specifications. We work closely with you to bring your vision to life, combining your preferences with our expertise in gemology and craftsmanship.
                            </p>
                            <p>
                                Please review the following steps to understand how our pre-order process works.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Custom+Design+Sketch" alt="A beautiful, artistic sketch of a custom amber bracelet design on drafting paper." /></div>

                        <h2>Step 1: Consultation and Design</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                Begin by contacting us with your design idea, inspiration, or specific requirements. You can use our "Build Your Pre-Order" tool to explore options or reach out to us directly for a more personalized consultation.
                            </p>
                            <p>
                                We will discuss your preferences for amber color, bead size, quality grade, and any additional features such as metal caps or amulets. Our team will provide expert guidance to help you make informed choices.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Amber+Color+Palette" alt="A palette showing a range of different amber colors and beads for customer selection." /></div>
                        
                        <h2>Step 2: Quotation and Deposit</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                Based on your requirements, we will provide you with a detailed price quotation outlining the cost of materials and craftsmanship. This quotation is transparent and free of hidden fees.
                            </p>
                            <p>
                                To proceed with the pre-order, a non-refundable deposit of 50% of the total price is required. This deposit secures the materials for your piece and confirms your commitment to the custom order.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Price+Quotation" alt="An icon of a price tag and a formal document, representing a price quotation." /></div>

                        <h2>Step 3: Crafting and Production</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                           <p>
                                Once the deposit is confirmed, our skilled artisans will begin crafting your custom piece. We take great care in selecting and shaping each bead to meet our high standards of quality.
                            </p>
                             <p>
                                Production time typically ranges from 2–4 weeks, depending on the complexity of the design and the availability of specific materials. We will keep you updated on the progress of your order.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Artisan+Crafting" alt="Close-up of an artisan's hands carefully polishing an amber bead at a workbench." /></div>

                        <h2>Step 4: Final Payment and Shipping</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                           <p>
                               Upon completion, we will notify you and provide photos of the finished product for your approval. We want to ensure you are completely satisfied before we proceed.
                            </p>
                             <p>
                                The remaining 50% balance is due before shipping. Once the final payment is received, your order will be carefully packaged, fully insured, and shipped to you with tracking information provided.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Final+Product+in+Box" alt="A finished, custom amber necklace elegantly displayed in a luxury gift box, ready for shipping." /></div>
                        
                        <h2>Cancellations and Changes</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                             <p>
                                Due to the custom nature of pre-orders, the initial 50% deposit is non-refundable once production has begun. This is because materials are specifically sourced and cut for your unique piece.
                            </p>
                            <p>
                               Any changes to the design after the deposit has been paid may be subject to additional charges and may extend the production timeline. We will discuss any potential costs with you before proceeding with changes.
                            </p>
                        </div>
                        
                        <h2>Contact Us</h2>
                        <SectionDivider/>
                         <p>
                            For any questions about our Pre-Order Policy or to start your custom design journey, please contact us at info.vkamber@gmail.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreOrderPolicyPage;
