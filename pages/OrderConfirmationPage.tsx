
import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PriceBreakdown, CustomPreOrderDetails, CustomBraceletFromBuilderDetails, AmberColorDetail } from '../types';
import { BEAD_SPECS, AMBER_COLOR_DETAILS, BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';
import { useLanguage } from '../i18n/LanguageContext';

const formatCurrency = (amount: number) => {
    return `฿${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

const OrderConfirmationPage: React.FC = () => {
    const location = useLocation();
    const { t } = useLanguage();
    const [notification, setNotification] = useState<string | null>(null);
    const { details, breakdown } = (location.state || {}) as { details?: CustomPreOrderDetails | CustomBraceletFromBuilderDetails, breakdown?: PriceBreakdown };

    // Type guard to differentiate between the two order types
    const isBraceletBuilderOrder = (details: any): details is CustomBraceletFromBuilderDetails => {
        return details && typeof details.designCode === 'string' && Array.isArray(details.beads);
    };

    const isMalaBuilderOrder = (details: any): details is CustomPreOrderDetails => {
        return details && typeof details.grade === 'string' && !isBraceletBuilderOrder(details);
    };

    const getClipboardMessage = () => {
        if (isBraceletBuilderOrder(details)) {
             const beadSummary = details.beads
                .reduce((acc, bead) => {
                    const colorName = AMBER_COLOR_DETAILS.find(c => c.id === bead.colorId)?.name || 'Unknown Color';
                    const key = `${colorName} (${bead.size.toFixed(2)}mm)`;
                    acc.set(key, (acc.get(key) || 0) + 1);
                    return acc;
                }, new Map<string, number>())
            
            let summaryString = '';
            for (const [beadDesc, count] of beadSummary.entries()) {
                summaryString += `- ${count}x ${beadDesc}\n`;
            }
            
            const uniqueSizes = [...new Set(details.beads.map(b => b.size))];
            const displayBeadSize = uniqueSizes.length === 1 ? `${uniqueSizes[0].toFixed(2)} mm` : 'Mixed Sizes';

            return `New Bracelet Pre-Order Inquiry
---------------------------------
Design Code: ${details.designCode}
Design Details:
- Est. Wrist Size: ${details.estimatedWristSize_cm.toFixed(1)} cm
- Bead Size: ${displayBeadSize}
- Color Pattern:
${summaryString}
---------------------------------
- Total Beads: ${details.beads.length}
- Est. Total Weight: ${details.totalWeight_g.toFixed(2)} g
- Est. Total Price: ${formatCurrency(details.totalPrice)}
`.trim().replace(/^\s+/gm, '');
        }

        if (isMalaBuilderOrder(details) && breakdown) {
             const estimatedTotalWeightInGrams = BEAD_SPECS.find(s => s.size === details.beadSize)?.weight ?? 0 * details.beadQuantity;
             return `New Mala Pre-Order Inquiry
---------------------------------
Amber Color: ${details.amberColor.name}
Quality Grade: ${details.grade}
Bead Size: ${details.beadSize.toFixed(2)}mm
Bead Quantity: ${details.beadQuantity} beads
Est. Weight: ${estimatedTotalWeightInGrams.toFixed(2)}g
Amulet: ${details.amulet?.name || 'None'}
Metal Caps: ${details.metal}
Monk's Blessing: ${details.blessing ? 'Yes' : 'No'}
---------------------------------
Price Breakdown:
- Beads: ${formatCurrency(breakdown.beadsPrice)}
- Metal: ${formatCurrency(breakdown.metalPrice)}
- Amulet: ${formatCurrency(breakdown.amuletPrice)}
- Blessing: ${formatCurrency(breakdown.blessingPrice)}
---------------------------------
Est. Total Price: ${formatCurrency(breakdown.totalPrice)}
`.trim().replace(/^\s+/gm, '');
        }
        return 'Invalid order details.';
    };
    
    const handleSubmitOrder = () => {
        const message = getClipboardMessage();
        if (message === 'Invalid order details.') {
            setNotification(t('order_confirmation_notification_error_details'));
            return;
        }

        navigator.clipboard.writeText(message).then(() => {
            setNotification(t('order_confirmation_notification_success'));
            window.open('https://www.facebook.com/messages/t/VKMMAmber', '_blank', 'noopener,noreferrer');
            setTimeout(() => setNotification(null), 7000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            setNotification(t('order_confirmation_notification_error_clipboard'));
            window.open('https://www.facebook.com/messages/t/VKMMAmber', '_blank', 'noopener,noreferrer');
            setTimeout(() => setNotification(null), 7000);
        });
    };
    
    const renderMalaSummary = (details: CustomPreOrderDetails, breakdown: PriceBreakdown) => {
        const estimatedTotalWeightInGrams = (BEAD_SPECS.find(s => s.size === details.beadSize)?.weight || 0) * details.beadQuantity;
        return (
            <>
                <h3 className="text-lg font-semibold text-[var(--c-heading)]">{t('order_confirmation_mala_title')}</h3>
                <div className="mt-4 space-y-3">
                     <React.Fragment key="beads">
                        <div className="flex justify-between">
                            <p className="text-[var(--c-text-primary)] opacity-90">Amber Beads ({details.amberColor.name}, {details.grade}, {details.beadSize}mm)</p>
                            <p className="font-semibold">{formatCurrency(breakdown.beadsPrice)}</p>
                        </div>
                        <p className="text-xs text-[var(--c-text-secondary)] pl-4 -mt-2">
                            {t('order_confirmation_beads_summary_line', { count: details.beadQuantity, weight: estimatedTotalWeightInGrams.toFixed(2) })}
                        </p>
                    </React.Fragment>

                    {breakdown.metalPrice > 0 && (
                        <div className="flex justify-between">
                            <p className="text-[var(--c-text-primary)] opacity-90">Metal Caps ({details.metal})</p>
                            <p className="font-semibold text-[var(--c-accent-secondary-hover)]">+ {formatCurrency(breakdown.metalPrice)}</p>
                        </div>
                    )}
                    {breakdown.amuletPrice > 0 && details.amulet && (
                         <div className="flex justify-between">
                            <p className="text-[var(--c-text-primary)] opacity-90">Amulet ({details.amulet.name})</p>
                            <p className="font-semibold text-[var(--c-accent-secondary-hover)]">+ {formatCurrency(breakdown.amuletPrice)}</p>
                        </div>
                    )}
                    {breakdown.blessingPrice > 0 && (
                         <div className="flex justify-between">
                            <p className="text-[var(--c-text-primary)] opacity-90">Monk's Blessing ✨</p>
                            <p className="font-semibold text-[var(--c-accent-secondary-hover)]">+ {formatCurrency(breakdown.blessingPrice)}</p>
                        </div>
                    )}
                </div>
                <div className="mt-6 pt-6 border-t-2 border-dashed border-[var(--c-heading)]/10">
                    <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-[var(--c-heading)]">{t('order_confirmation_total_title')}</p>
                    <p className="text-3xl font-bold text-[var(--c-heading)]">{formatCurrency(breakdown.totalPrice)}</p>
                    </div>
                </div>
            </>
        );
    }
    
    const renderBraceletSummary = (details: CustomBraceletFromBuilderDetails) => {
        const beadSummary = details.beads
            .reduce((acc, bead) => {
                const colorName = AMBER_COLOR_DETAILS.find(c => c.id === bead.colorId)?.name || 'Unknown Color';
                const key = `${colorName} (${bead.size.toFixed(2)}mm)`;
                acc.set(key, (acc.get(key) || 0) + 1);
                return acc;
            }, new Map<string, number>());

        const uniqueSizes = [...new Set(details.beads.map(b => b.size))];
        const displayBeadSize = uniqueSizes.length === 1 ? `${uniqueSizes[0].toFixed(2)} mm` : 'Mixed Sizes';

        return (
            <>
                <h3 className="text-lg font-semibold text-[var(--c-heading)]">{t('order_confirmation_bracelet_title')}</h3>
                <div className="mt-4 space-y-2 text-sm">
                     <div className="flex justify-between"><span className="text-[var(--c-text-secondary)]">{t('order_confirmation_bracelet_code')}</span> <strong>{details.designCode}</strong></div>
                     <div className="flex justify-between"><span className="text-[var(--c-text-secondary)]">{t('order_confirmation_bracelet_wrist')}</span> <strong>{details.estimatedWristSize_cm.toFixed(1)} cm</strong></div>
                     <div className="flex justify-between"><span className="text-[var(--c-text-secondary)]">{t('order_confirmation_bracelet_bead_size')}</span> <strong>{displayBeadSize}</strong></div>
                     <div className="pt-2 mt-2 border-t border-dashed">
                        <p className="font-semibold text-[var(--c-text-primary)] opacity-90 mb-1">{t('order_confirmation_bracelet_pattern')}</p>
                        {Array.from(beadSummary.entries()).map(([beadDesc, count]) => (
                            <div key={beadDesc} className="flex justify-between pl-2">
                                <span className="text-[var(--c-text-secondary)]">{beadDesc}</span>
                                <strong>x {count}</strong>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between pt-2 border-t mt-2"><span className="text-[var(--c-text-secondary)]">{t('order_confirmation_bracelet_total_beads')}</span> <strong>{details.beads.length} beads</strong></div>
                    <div className="flex justify-between"><span className="text-[var(--c-text-secondary)]">{t('order_confirmation_bracelet_est_weight')}</span> <strong>{details.totalWeight_g.toFixed(2)} g</strong></div>
                </div>
                <div className="mt-6 pt-6 border-t-2 border-dashed border-[var(--c-heading)]/10">
                    <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-[var(--c-heading)]">{t('order_confirmation_est_total_title')}</p>
                    <p className="text-3xl font-bold text-[var(--c-heading)]">{formatCurrency(details.totalPrice)}</p>
                    </div>
                </div>
            </>
        );
    };

    if (!details) {
        return (
            <div className="text-center py-20">
                <SEO 
                    titleKey="seo_order_confirmation_title" 
                    descriptionKey="seo_order_confirmation_desc"
                    keywords={t('seo_robots_noindex')}
                />
                <h2 className="text-3xl font-semibold">{t('order_confirmation_no_details_title')}</h2>
                <p className="mt-2 text-[var(--c-text-secondary)]">{t('order_confirmation_no_details_subtitle')}</p>
                <Link to="/build-your-set" className="mt-6 inline-block btn-primary text-white font-bold py-2 px-6 rounded-lg">
                    {t('order_confirmation_no_details_cta')}
                </Link>
            </div>
        );
    }
    
    return (
        <div 
            className="page-container-with-bg py-16"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[27]}')` }}
        >
             <meta name="robots" content="noindex, nofollow" />
             <SEO 
                titleKey="seo_order_confirmation_title" 
                descriptionKey="seo_order_confirmation_desc"
                keywords={t('seo_robots_noindex')}
             />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-[var(--c-heading)]">{t('order_confirmation_title')}</h1>
                    <p className="mt-2 text-lg text-[var(--c-text-secondary)]">{t('order_confirmation_subtitle')}</p>
                </div>

                <div className="max-w-2xl mx-auto mt-10">
                    <div className="p-8 bg-[var(--c-surface)] border border-[var(--c-border)] shadow-xl rounded-lg">
                         <div className="flex justify-between items-start border-b-2 border-dashed border-[var(--c-heading)]/10 pb-4">
                            <div>
                                <h2 className="text-xl font-serif font-bold text-[var(--c-heading)]">{t('order_confirmation_header_title')}</h2>
                                <p className="text-xs text-[var(--c-text-secondary)]">{t('order_confirmation_header_tax')}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">{t('order_confirmation_summary_title')}</p>
                                <p className="text-xs text-[var(--c-text-secondary)]">{t('order_confirmation_inquiry_id', { id: Math.floor(100000 + Math.random() * 900000) })}</p>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            {isBraceletBuilderOrder(details) && renderBraceletSummary(details)}
                            {isMalaBuilderOrder(details) && breakdown && renderMalaSummary(details, breakdown)}
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button 
                            onClick={handleSubmitOrder}
                            className="btn-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg text-lg"
                        >
                            {t('order_confirmation_button_submit')}
                        </button>
                         {notification && (
                            <div className="mt-3 text-sm text-[var(--c-accent-secondary-hover)] bg-[var(--c-accent-secondary)]/30 p-3 rounded-md transition-all duration-300">
                                {notification}
                            </div>
                        )}
                        <p className="mt-3 text-sm text-[var(--c-text-secondary)]">{t('order_confirmation_instructions')}</p>
                         <Link to="/collection" className="mt-8 inline-block text-[var(--c-accent-primary)] hover:text-[var(--c-heading)] font-semibold transition-colors group">
                           {t('order_confirmation_continue_shopping')} <span className="transition-transform group-hover:translate-x-1 inline-block">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;
