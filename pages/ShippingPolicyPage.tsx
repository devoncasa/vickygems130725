
import React from 'react';
import SectionDivider from '../components/SectionDivider';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';

const ImageWithAlt: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = 'aspect-video' }) => (
    <div className={`w-full bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center my-6 overflow-hidden ${className}`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover"/>
    </div>
);

const ShippingPolicyPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[33]}')` }}
        >
            <SEO 
                titleKey="seo_shipping_policy_title"
                descriptionKey="seo_shipping_policy_desc"
                keywordsKey="seo_shipping_policy_keywords"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">Shipping & Delivery Policy</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">Last Updated: October 12, 2023</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>1. Order Processing</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                All orders are processed within 1–3 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
                            </p>
                            <p>
                                Please note that processing times may be longer during peak seasons or promotional periods.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Order+Packing" alt="A jewelry box being carefully packed into a shipping box with protective material." /></div>

                        <h2>2. Domestic Shipping (Within Thailand)</h2>
                        <SectionDivider/>
                        <p>
                            We offer complimentary shipping via Kerry Express for all domestic orders within Thailand. You can typically expect your order to arrive within 1–3 business days after it has been shipped.
                        </p>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Kerry+Express+Thailand" alt="A map of Thailand with the Kerry Express logo, indicating domestic shipping." /></div>
                        
                        <h2>3. International Shipping</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                We ship worldwide to ensure our customers can enjoy our products no matter where they are. International shipping is handled by trusted carriers such as DHL Express or FedEx.
                            </p>
                            <p>
                                Shipping rates and times vary depending on the destination country. Estimated shipping costs will be calculated and displayed at checkout.
                            </p>
                            <p>
                                Typical delivery times for international orders range from 5–14 business days, depending on the destination and customs processing.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=International+Shipping" alt="A world map with DHL and FedEx logos, representing global delivery." /></div>

                        <h2>4. Shipping Confirmation and Tracking</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                           <p>
                                Once your order has shipped, you will receive a shipping confirmation email containing your tracking number. You can use this number to track your package on the carrier’s website.
                            </p>
                             <p>
                                Please allow 24–48 hours for the tracking information to become available.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Package+Tracking" alt="A computer screen showing a package tracking website with a map and delivery status." /></div>

                        <h2>5. Customs, Duties, and Taxes</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                           <p>
                                Vicky Amber & Gems is not responsible for any customs duties, taxes, or import fees that may be charged upon delivery. These charges are the responsibility of the recipient and are determined by the customs agency of the destination country.
                            </p>
                             <p>
                                We recommend contacting your local customs office for more information on potential charges.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Customs+Duty" alt="An icon of a customs declaration form and a government building, representing import taxes." /></div>
                        
                        <h2>6. Shipping Insurance</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                             <p>
                                For your peace of mind, all orders are fully insured against loss, theft, or damage during transit. The insurance covers the full value of your purchase.
                            </p>
                             <p>
                                In the unlikely event that your package is lost or damaged, please contact us immediately so we can initiate a claim with the shipping carrier.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Insured+Shipment" alt="A shield icon over a shipping box, symbolizing insured shipment protection." /></div>
                        
                        <h2>7. Incorrect Address</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                             <p>
                                Please ensure that your shipping address is correct at the time of purchase. We are not responsible for orders shipped to an incorrect address provided by the customer.
                            </p>
                            <p>
                                If you notice an error in your shipping address, please contact us as soon as possible. We will do our best to update the address before the order is shipped, but we cannot guarantee changes can be made once the order is in processing.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=Correct+Address" alt="A house icon with a green checkmark, emphasizing the importance of a correct shipping address." /></div>

                        <h2>8. Contact Us</h2>
                        <SectionDivider/>
                         <p>
                            If you have any questions or concerns about our Shipping & Delivery Policy, please do not hesitate to contact us at:
                        </p>
                         <address className="not-prose not-italic space-y-1 text-lg">
                            <p><strong>Email:</strong> info.vkamber@gmail.com</p>
                            <p><strong>Address:</strong> 919/1 Jewelry Trade Center Bldg, BB038, Silom Rd., Silom, Bangrak, Bangkok 10500 THAILAND</p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingPolicyPage;
