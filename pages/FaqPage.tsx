
import React from 'react';
import { ChevronDownIcon } from '../components/IconComponents';
import { BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { useLanguage } from '../i18n/LanguageContext';

const FAQ_DATA_KEYS = [
    'faq_q1', 'faq_q2', 'faq_q3', 'faq_q4', 'faq_q5', 'faq_q6', 'faq_q7', 'faq_q8', 'faq_q9', 'faq_q10', 'faq_q11', 'faq_q12'
];

interface FAQItem {
    q: string;
    a: string;
}

const AccordionItem: React.FC<{ title: string; children: React.ReactNode, id: string }> = ({ title, children, id }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-[var(--c-border)]">
            <h3 className="text-lg font-semibold w-full">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls={id}
                    className="w-full flex justify-between items-center py-4 text-start text-[var(--c-heading)] hover:bg-[var(--c-accent-primary)]/10 px-2"
                >
                    <span className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[var(--c-accent-secondary)]/30 me-4 flex-shrink-0 flex items-center justify-center text-xs text-[var(--c-text-secondary)]">?</div>
                        {title}
                    </span>
                    <ChevronDownIcon className={`w-5 h-5 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h3>
            <div id={id} hidden={!isOpen} role="region" className="ps-14 pe-2 pb-4 text-[var(--c-text-primary)]/90">
                 <div className="space-y-4" dangerouslySetInnerHTML={{ __html: children as string }}></div>
            </div>
        </div>
    );
};


const FaqPage: React.FC = () => {
    const { t } = useLanguage();

    const faqData: FAQItem[] = FAQ_DATA_KEYS.map(key => ({
        q: t((`${key}_q`) as any),
        a: t((`${key}_a`) as any),
    })).filter(item => item.q && item.a && !item.q.startsWith('faq_'));

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a.replace(/<[^>]*>?/gm, '') // Strip HTML for schema
            }
        }))
    };

    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[23]}')` }}
        >
            <SEO 
                titleKey="seo_faq_title"
                descriptionKey="seo_faq_desc"
                keywordsKey="seo_faq_keywords"
                imageUrl="https://i.postimg.cc/Bn7C6703/Vicky-Amber-Gems-background-002.jpg"
            />
            {faqData.length > 0 && <JsonLd data={faqSchema} />}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-[var(--c-heading)]">{t('nav_FAQs')}</h1>
                        <p className="mt-4 text-xl text-[var(--c-text-secondary)]">Find answers to our most common questions below.</p>
                    </div>

                    <div className="bg-[var(--c-surface)] rounded-lg shadow-lg border border-[var(--c-border)] p-2">
                        {faqData.length > 0 ? faqData.map((item, index) => (
                            <AccordionItem key={index} title={item.q} id={`faq-${index}`}>
                                {item.a}
                            </AccordionItem>
                        )) : (
                           <p className="p-4 text-center text-[var(--c-text-secondary)]">FAQ content is not available at the moment.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;
