
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AmberColorDetail, Grade, BeadSize, BeadQuantity, Amulet, Metal, CustomPreOrderDetails, PriceBreakdown } from '../types';
import { AMBER_COLOR_DETAILS, METAL_PRICES, BLESSING_PRICE, AMULETS, BEAD_SPECS, BACKGROUND_IMAGES } from '../constants';
import GradeSelectionModal from '../components/GradeSelectionModal';
import SectionDivider from '../components/SectionDivider';
import BraceletBuilder from '../components/BraceletBuilder';
import SEO from '../components/SEO';
import { useLanguage } from '../i18n/LanguageContext';

const formatCurrency = (amount: number) => {
    return `฿${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

const MalaBuilder: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    // State
    const [selectedAmber, setSelectedAmber] = useState<AmberColorDetail | null>(null);
    const [selectedGrade, setSelectedGrade] = useState<Grade>('Standard');
    const [beadSize, setBeadSize] = useState<BeadSize>(10);
    const [beadQuantity, setBeadQuantity] = useState<BeadQuantity>(108);
    const [selectedAmulet, setSelectedAmulet] = useState<Amulet | null>(null);
    const [selectedMetal, setSelectedMetal] = useState<Metal>(Metal.None);
    const [wantsBlessing, setWantsBlessing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Price Calculation
    const priceBreakdown = useMemo((): PriceBreakdown => {
        if (!selectedAmber) return { beadsPrice: 0, amuletPrice: 0, metalPrice: 0, blessingPrice: 0, totalPrice: 0 };

        const gradeMultiplier: { [key in Grade]: number } = { 'Standard': 1, 'Silver': 1.5, 'High': 2.5 };
        const beadSpec = BEAD_SPECS.find(s => s.size === beadSize);
        if (!beadSpec) return { beadsPrice: 0, amuletPrice: 0, metalPrice: 0, blessingPrice: 0, totalPrice: 0 };

        const beadsPrice = selectedAmber.basePricePerGram * beadSpec.weight * beadQuantity * gradeMultiplier[selectedGrade];
        const amuletPrice = selectedAmulet?.price || 0;
        const metalPrice = METAL_PRICES[selectedMetal];
        const blessingPrice = wantsBlessing ? BLESSING_PRICE : 0;
        const totalPrice = beadsPrice + amuletPrice + metalPrice + blessingPrice;

        return { beadsPrice, amuletPrice, metalPrice, blessingPrice, totalPrice };
    }, [selectedAmber, selectedGrade, beadSize, beadQuantity, selectedAmulet, selectedMetal, wantsBlessing]);

    // Handlers
    const handleColorSelect = (color: AmberColorDetail) => {
        setSelectedAmber(color);
        setIsModalOpen(true);
    };

    const handleGradeSelect = (grade: Grade) => {
        setSelectedGrade(grade);
        setIsModalOpen(false);
    };

    const handlePlaceOrder = () => {
        if (!selectedAmber) {
            alert(t('build_alert_select_amber'));
            return;
        }
        const details: CustomPreOrderDetails = {
            amberColor: selectedAmber,
            grade: selectedGrade,
            beadSize,
            beadQuantity,
            amulet: selectedAmulet,
            metal: selectedMetal,
            blessing: wantsBlessing,
        };
        navigate('/order-confirmation', { state: { details, breakdown: priceBreakdown } });
    };
    
    const selectClass = "w-full p-3 border border-[var(--c-border)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--c-accent-primary)] bg-[var(--c-surface)]";

    return (
        <>
            <GradeSelectionModal 
                amberColor={selectedAmber} 
                onClose={() => setIsModalOpen(false)} 
                onSelectGrade={handleGradeSelect} 
            />
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Controls */}
                <div className="space-y-6">
                    {/* Amber Color */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">{t('build_select_amber_title')}</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                            {AMBER_COLOR_DETAILS.map(color => (
                                <button key={color.id} onClick={() => handleColorSelect(color)} className={`p-1.5 rounded-lg border-2 text-center transition-all duration-200 ${selectedAmber?.id === color.id ? 'border-[var(--c-accent-primary)] scale-105' : 'border-transparent hover:border-[var(--c-accent-primary-hover)]'}`}>
                                    <img src={color.imageUrl} alt={color.name} className="w-full h-16 object-cover rounded-md mb-1"/>
                                    <span className="font-semibold text-xs text-center block truncate text-[var(--c-text-secondary)]">{t(color.name as any)}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Bead Size & Quantity */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="beadSize" className="font-semibold mb-2 block">{t('build_bead_size_title')}</label>
                            <select id="beadSize" value={beadSize} onChange={e => setBeadSize(Number(e.target.value))} className={selectClass}>
                                {BEAD_SPECS.map(opt => <option key={opt.size} value={opt.size}>{opt.size.toFixed(2)}mm</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="beadQuantity" className="font-semibold mb-2 block">{t('build_bead_quantity_title')}</label>
                            <select id="beadQuantity" value={beadQuantity} onChange={e => setBeadQuantity(Number(e.target.value) as BeadQuantity)} className={selectClass}>
                                <option value={27}>{t('build_quantity_27')}</option>
                                <option value={54}>{t('build_quantity_54')}</option>
                                <option value={99}>{t('build_quantity_99')}</option>
                                <option value={108}>{t('build_quantity_108')}</option>
                            </select>
                        </div>
                    </div>
                    {/* Add-ons */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-3">{t('build_addons_title')}</h3>
                         <div>
                            <label htmlFor="amulet" className="font-semibold mb-2 block">{t('build_addon_amulet')}</label>
                            <select id="amulet" value={selectedAmulet?.id || 'none'} onChange={e => setSelectedAmulet(AMULETS.find(a => a.id === e.target.value) || null)} className={selectClass}>
                                <option value="none">None</option>
                                {AMULETS.map(a => <option key={a.id} value={a.id}>{a.name} ({formatCurrency(a.price)})</option>)}
                            </select>
                        </div>
                         <div>
                            <label htmlFor="metal" className="font-semibold mb-2 block">{t('build_addon_metal')}</label>
                            <select id="metal" value={selectedMetal} onChange={e => setSelectedMetal(e.target.value as Metal)} className={selectClass}>
                                {Object.values(Metal).map(m => <option key={m} value={m}>{m} {METAL_PRICES[m] > 0 ? `(${formatCurrency(METAL_PRICES[m])})` : ''}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-md hover:bg-[var(--c-accent-secondary)]/10">
                                <input type="checkbox" checked={wantsBlessing} onChange={e => setWantsBlessing(e.target.checked)} className="h-5 w-5 rounded text-[var(--c-accent-secondary)] focus:ring-[var(--c-accent-secondary)] border-[var(--c-border)]"/>
                                <span className="font-semibold">{t('build_addon_blessing', { price: formatCurrency(BLESSING_PRICE) })}</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Summary */}
                <div className="bg-[var(--c-surface-alt)] p-6 rounded-lg shadow-inner border border-[var(--c-border)] sticky top-28 self-start">
                    <h3 className="text-2xl font-bold text-center mb-4">{t('build_summary_title')}</h3>
                    {!selectedAmber ? (
                        <p className="text-center text-[var(--c-text-secondary)] py-10">{t('build_summary_placeholder')}</p>
                    ) : (
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[var(--c-text-secondary)]">{t('build_summary_amber_color')}</span>
                                <span className="font-semibold text-right">{t(selectedAmber.name as any)}</span>
                            </div>
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-[var(--c-text-secondary)]">{t('build_summary_quality_grade')}</span>
                                <span className="font-semibold">{selectedGrade}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[var(--c-text-secondary)]">{t('build_summary_config')}</span>
                                <span className="font-semibold">{t('build_summary_beads', { size: beadSize, quantity: beadQuantity })}</span>
                            </div>
                           
                            <div className="pt-2 mt-2 border-t border-[var(--c-border)] border-dashed">
                                <p className="font-semibold mb-2">{t('build_summary_breakdown_title')}</p>
                                 <div className="flex justify-between items-center text-sm">
                                    <span className="text-[var(--c-text-secondary)]">{t('build_summary_breakdown_beads')}</span>
                                    <span className="font-semibold">{formatCurrency(priceBreakdown.beadsPrice)}</span>
                                </div>
                                {priceBreakdown.metalPrice > 0 && <div className="flex justify-between items-center text-sm text-[var(--c-accent-secondary-hover)]"><span className="text-[var(--c-text-secondary)]">{t('build_summary_breakdown_metal')}</span><span className="font-semibold">+ {formatCurrency(priceBreakdown.metalPrice)}</span></div>}
                                {priceBreakdown.amuletPrice > 0 && <div className="flex justify-between items-center text-sm text-[var(--c-accent-secondary-hover)]"><span className="text-[var(--c-text-secondary)]">{t('build_summary_breakdown_amulet')}</span><span className="font-semibold">+ {formatCurrency(priceBreakdown.amuletPrice)}</span></div>}
                                {priceBreakdown.blessingPrice > 0 && <div className="flex justify-between items-center text-sm text-[var(--c-accent-secondary-hover)]"><span className="text-[var(--c-text-secondary)]">{t('build_summary_breakdown_blessing')}</span><span className="font-semibold">+ {formatCurrency(priceBreakdown.blessingPrice)}</span></div>}
                            </div>

                            <div className="mt-6 pt-4 border-t-2 border-dashed border-[var(--c-heading)]/20">
                                <div className="flex justify-between items-baseline">
                                     <span className="text-lg font-bold">{t('build_summary_total_title')}</span>
                                     <p className="text-3xl font-bold text-right text-[var(--c-heading)]">{formatCurrency(priceBreakdown.totalPrice)}</p>
                                </div>
                            </div>
                            <button onClick={handlePlaceOrder} className="w-full mt-4 btn-primary text-white font-bold py-3 rounded-lg text-lg">
                                {t('build_summary_cta')}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}


const BuildYourOwnPage: React.FC = () => {
    const { t } = useLanguage();
    const [activeBuilder, setActiveBuilder] = useState<'mala' | 'bracelet'>('mala');

    const tabClasses = "px-6 py-3 text-lg font-semibold rounded-t-lg transition-colors duration-200 focus:outline-none w-full sm:w-auto";
    const activeTabClasses = "bg-[var(--c-surface)] text-[var(--c-accent-primary-hover)] shadow-sm";
    const inactiveTabClasses = "bg-[var(--c-heading)]/5 text-[var(--c-text-secondary)] hover:bg-[var(--c-surface)]/80";

    return (
        <div 
            className="page-container-with-bg min-h-screen py-16 md:py-20"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[20]}')` }}
        >
            <SEO 
                titleKey="seo_build_your_own_title"
                descriptionKey="seo_build_your_own_desc"
                keywordsKey="seo_build_your_own_keywords"
                imageUrl="https://i.postimg.cc/pXtcbS21/Vicky-Amber-Gems-background-0014.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold tracking-tight">{t('build_page_title')}</h1>
                    <p className="mt-4 text-xl text-[var(--c-text-secondary)] max-w-3xl mx-auto">
                        {t('build_page_subtitle')}
                    </p>
                    <SectionDivider />
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Tabs */}
                    <div className="flex flex-col sm:flex-row border-b-2 border-[var(--c-surface)]/90">
                        <button
                            onClick={() => setActiveBuilder('mala')}
                            className={`${tabClasses} ${activeBuilder === 'mala' ? activeTabClasses : inactiveTabClasses}`}
                        >
                            {t('build_mala_tab')}
                        </button>
                        <button
                            onClick={() => setActiveBuilder('bracelet')}
                            className={`${tabClasses} ${activeBuilder === 'bracelet' ? activeTabClasses : inactiveTabClasses}`}
                        >
                            {t('build_bracelet_tab')}
                        </button>
                         <div className="flex-grow border-b-2 border-[var(--c-border)]"></div>
                    </div>

                    <div className="bg-[var(--c-surface)] p-6 md:p-10 rounded-b-lg shadow-lg">
                        {activeBuilder === 'mala' ? <MalaBuilder /> : <BraceletBuilder />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildYourOwnPage;
