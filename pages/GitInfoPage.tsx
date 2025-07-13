
import React from 'react';
import SectionDivider from '../components/SectionDivider';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';

const ImageWithAlt: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = 'aspect-video' }) => (
    <div className={`w-full bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center my-6 overflow-hidden ${className}`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover"/>
    </div>
);


const GitInfoPage: React.FC = () => {
    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[24]}')` }}
        >
            <SEO 
                titleKey="seo_git_info_title"
                descriptionKey="seo_git_info_desc"
                keywordsKey="seo_git_info_keywords"
                imageUrl="https://i.postimg.cc/ZY9zKXzb/Vicky-Amber-Gems-background-0034.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold tracking-tight">Get to Know GIT</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">The Gem and Jewelry Institute of Thailand</p>
                    </div>
                    
                    <div className="mt-12 prose prose-lg lg:prose-xl max-w-none text-[var(--c-text-primary)]/90 mx-auto">
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/900x300/F0EBE6/534B42?text=GIT+Logo" alt="The official logo of the Gem and Jewelry Institute of Thailand (GIT)." className="aspect-[3/1] max-w-md mx-auto" /></div>
                        
                        <p className="lead text-center">
                            Gem and Jewelry Institute of Thailand (Public Organization) or GIT is a public organization under the supervision of the Ministry of Commerce. It was founded on the government’s cabinet resolution on September 1, 1998, to be the main national institute for gem and jewelry research and development as well as for quality testing to assure consumer confidence.
                        </p>
                        
                        <h2>Vision</h2>
                        <SectionDivider/>
                        <p>To be the World’s Leading Gem and Jewelry Institute.</p>

                        <h2>Mission</h2>
                        <SectionDivider/>
                        <ol>
                            <li>To develop Thai gem and jewelry industry to be able to compete in the world market.</li>
                            <li>To create and support entrepreneurs to have a better competitive edge.</li>
                            <li>To promote Thailand to be the world’s gem and jewelry trading hub.</li>
                        </ol>

                        <h2>Services</h2>
                        <SectionDivider/>
                        <ul>
                            <li>Gem Testing Laboratory</li>
                            <li>Precious Metal Assay Laboratory</li>
                            <li>Jewelry Design and Production Development</li>
                            <li>Gem and Jewelry Information Center</li>
                            <li>Training Center</li>
                            <li>Precious Metal Hallmarking</li>
                            <li>Consulting Service</li>
                        </ul>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/800x450/F0EBE6/534B42?text=GIT+Laboratory" alt="A state-of-the-art gemology laboratory at GIT with scientists using microscopes." /></div>
                        
                        <h2>Buy with Confidence (BWC) Program</h2>
                        <SectionDivider/>
                        <div className="space-y-4">
                            <p>
                                The “Buy with Confidence” (BWC) Program is a part of the project of the Gem and Jewelry Institute of Thailand (Public Organization) or GIT, in cooperation with the Tourism Authority of Thailand (TAT), to build up confidence for Thai and foreign tourists when buying gem and jewelry in Thailand.
                            </p>
                            <p>
                                The stores that can participate in this project must pass the institute’s criteria and regulations. When passing the criteria, the stores will receive the BWC sticker to guarantee that their products have been tested and have received the GIT’s certificate. The program is, therefore, an effective tool to gain the trust of tourists, which will help to stimulate the purchase of gem and jewelry products from Thailand.
                            </p>
                        </div>
                        <div className="not-prose"><ImageWithAlt src="https://placehold.co/500x250/F0EBE6/534B42?text=BWC+Logo" alt="The official 'Buy With Confidence' (BWC) program logo from GIT." className="aspect-[2/1] max-w-xs mx-auto" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitInfoPage;
