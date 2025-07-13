
import React from 'react';
import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';


const PrivacyPolicyPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[29]}')` }}
        >
            <SEO 
                titleKey="seo_privacy_policy_title"
                descriptionKey="seo_privacy_policy_desc"
                keywordsKey="seo_privacy_policy_keywords"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">Vicky Amber & Gems | Privacy Policy</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">Last Updated: October 12, 2023</p>
                    </div>

                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <h2>1. Introduction</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                Welcome to Vicky Amber & Gems. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or make a purchase.
                            </p>
                        </div>

                        <h2>2. Information We Collect</h2>
                        <SectionDivider/>
                        <h3>2.1 Information You Provide to Us</h3>
                        <div className="space-y-4">
                            <p>We collect personal information that you voluntarily provide to us when you:</p>
                            <ul>
                                <li>Create an account or make a purchase.</li>
                                <li>Contact us with inquiries or for customer support.</li>
                                <li>Subscribe to our newsletters or marketing communications.</li>
                                <li>Participate in surveys or promotions.</li>
                            </ul>
                            <p>This information may include your name, email address, shipping address, billing address, phone number, and payment information.</p>
                        </div>
                        
                        <h3>2.2 Information We Collect Automatically</h3>
                        <div className="space-y-4">
                            <p>When you visit our website, we may automatically collect certain information about your device and browsing activity, including:</p>
                            <ul>
                                <li>IP address, browser type, and operating system.</li>
                                <li>Pages you viewed and links you clicked.</li>
                                <li>Date and time of your visit.</li>
                                <li>Information collected through cookies and similar technologies.</li>
                            </ul>
                        </div>
                        
                        <h2>3. How We Use Your Information</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>We use the information we collect for various purposes, including to:</p>
                            <ul>
                                <li>Process and fulfill your orders.</li>
                                <li>Communicate with you about your account or orders.</li>
                                <li>Provide customer support and respond to your inquiries.</li>
                                <li>Improve our website, products, and services.</li>
                                <li>Send you marketing communications, if you have opted in.</li>
                                <li>Prevent fraudulent transactions and enhance the security of our website.</li>
                                <li>Comply with legal obligations.</li>
                            </ul>
                        </div>

                        <h2>4. How We Share Your Information</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
                            <ul>
                                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, shipping, and marketing.</li>
                                <li><strong>Legal Compliance:</strong> We may disclose your information if required by law, such as to comply with a subpoena or other legal process.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.</li>
                            </ul>
                        </div>

                        <h2>5. Data Security</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
                            </p>
                        </div>
                        
                        <h2>6. Your Rights and Choices</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>You have certain rights regarding your personal information, including the right to:</p>
                            <ul>
                                <li>Access, correct, or delete your personal information.</li>
                                <li>Opt-out of receiving marketing communications from us.</li>
                                <li>Object to or restrict the processing of your personal information.</li>
                            </ul>
                            <p>
                                To exercise these rights, please contact us using the information provided below.
                            </p>
                        </div>

                        <h2>7. Third-Party Links</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </div>

                        <h2>8. Children's Privacy</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete it.
                            </p>
                        </div>

                        <h2>9. Changes to This Privacy Policy</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                            </p>
                        </div>

                        <h2>10. Contact Us</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                            </p>
                            <address className="not-prose not-italic space-y-1 text-lg">
                                <p><strong>Email:</strong> info.vkamber@gmail.com</p>
                                <p><strong>Address:</strong> 919/1 Jewelry Trade Center Bldg, BB038, Silom Rd., Silom, Bangrak, Bangkok 10500 THAILAND</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
