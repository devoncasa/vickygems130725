
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { PRODUCTS, BLESSING_PRICE, BEAD_SPECS, SHOP_CATEGORIES, BACKGROUND_IMAGES } from '../constants';
import JsonLd from '../components/JsonLd';
import SectionDivider from '../components/SectionDivider';
import { calculateFinalPrice } from '../utils/priceLogic';
import { BeadSize, Product } from '../types';
import SEO from '../components/SEO';
import { useLanguage } from '../i18n/LanguageContext';

interface OutletContextType {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const ProductDetailPage: React.FC = () => {
    const { setCartCount } = useOutletContext<OutletContextType>();
    const { productId } = useParams<{ productId: string }>();
    const { lang, t } = useLanguage();
    const product = PRODUCTS.find(p => p.id === productId);

    const [selectedBeadSize, setSelectedBeadSize] = useState<BeadSize | null>(product?.specifications.beadSize_mm || null);
    const [wantsBlessing, setWantsBlessing] = useState(false);
    const [mainImage, setMainImage] = useState(product?.media.mainImageUrl);
    const [weightUnit, setWeightUnit] = useState<'g' | 'ct'>('g');
    const [addedToCart, setAddedToCart] = useState(false);
    
    useEffect(() => {
        if (product) {
            setSelectedBeadSize(product.specifications.beadSize_mm || null);
            setMainImage(product.media.mainImageUrl);
        }
    }, [product]);

    useEffect(() => {
        if (product && product.media.mainImageUrl) {
            setMainImage(product.media.mainImageUrl);
        }
    }, [productId, product]);

    const productCategory = useMemo(() => {
        if (!product) return '';
        
        for (const cat of SHOP_CATEGORIES) {
            if (cat.slug === product.category) return t(cat.name as any);
            if (cat.subCategories) {
                const subCat = cat.subCategories.find(sub => sub.slug === product.category);
                if (subCat) return t(cat.name as any); 
            }
        }
        return product.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }, [product, t]);

    const finalPrice = useMemo(() => {
        if (!product || !selectedBeadSize) return 0;
        
        const sizePrice = product.price; // Start with base price for the default size
        const blessingPrice = wantsBlessing ? BLESSING_PRICE : 0;
        
        if(product.specifications.beadSize_mm) {
             const dynamicPrice = calculateFinalPrice(product, selectedBeadSize);
             return dynamicPrice + blessingPrice;
        }

        return sizePrice + blessingPrice;
    }, [product, selectedBeadSize, wantsBlessing]);
    
    const selectedBeadSpec = useMemo(() => {
        if (!selectedBeadSize) return null;
        return BEAD_SPECS.find(spec => spec.size === selectedBeadSize);
    }, [selectedBeadSize]);

    const totalWeightInGrams = useMemo(() => {
        if (!product || !selectedBeadSpec || !product.specifications.beadCount) {
            return product?.specifications.totalWeight_grams || 0;
        }
        return selectedBeadSpec.weight * product.specifications.beadCount;
    }, [product, selectedBeadSpec]);

    const displayWeight = useMemo(() => {
        if (weightUnit === 'ct') {
            return `${(totalWeightInGrams * 5).toFixed(2)} ct`;
        }
        return `${totalWeightInGrams.toFixed(2)} g`;
    }, [totalWeightInGrams, weightUnit]);


    if (!product) {
        return (
            <div className="text-center py-20">
                <SEO 
                    titleKey="seo_product_not_found_title" 
                    descriptionKey="seo_product_not_found_desc"
                    keywordsKey="seo_product_not_found_keywords"
                />
                <h2 className="text-3xl font-semibold">{t('product_not_found_title')}</h2>
                <Link to={`/${lang}/collection`} className="mt-4 inline-block text-[var(--c-accent-primary)] hover:text-[var(--c-heading)]">{t('product_not_found_cta')}</Link>
            </div>
        );
    }
    
    const seoTitle = `${product.name} (${selectedBeadSize}mm) - Vicky Amber & Gems`;
    const seoDesc = t('seo_product_detail_desc', { 
        productName: product.name, 
        beadSize: `${selectedBeadSize}mm`,
        material: product.material,
        story: product.story.substring(0, 80) + '...'
    });
    const seoKeywords = t('seo_product_detail_keywords', {
        productName: product.name,
        material: product.material,
        beadSize: `${selectedBeadSize}mm`,
        category: productCategory
    });

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": seoTitle,
        "image": mainImage,
        "description": product.story,
        "sku": `${product.sku}-${selectedBeadSize}MM`,
        "mpn": `${product.sku}-${selectedBeadSize}MM`,
        "brand": {
            "@type": "Brand",
            "name": "Vicky Amber & Gems"
        },
        "inLanguage": lang,
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Person",
                "name": "Vicky S."
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "89"
        },
        "offers": {
            "@type": "Offer",
            "url": window.location.href,
            "priceCurrency": "THB",
            "price": finalPrice.toFixed(0),
            "availability": product.inventory.isAvailable ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "itemCondition": "https://schema.org/NewCondition"
        },
        "additionalProperty": [
            { "@type": "PropertyValue", "name": "Material", "value": product.material },
            { "@type": "PropertyValue", "name": "Origin", "value": product.specifications.origin },
            { "@type": "PropertyValue", "name": "Bead Size", "value": `${selectedBeadSize}mm` }
        ]
    };

    const handleAddToCart = () => {
        setCartCount(prev => prev + 1);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };
    
    const galleryImages = [
        product.media.mainImageUrl,
        ...product.media.gallery,
    ].filter(Boolean).slice(0, 5);
    
    while (galleryImages.length < 5) {
        galleryImages.push(`https://placehold.co/100x100/F0EBE6/7E746A?text=View`);
    }

    return (
        <div 
            className="page-container-with-bg"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[30]}')` }}
        >
            <SEO
                title={seoTitle}
                description={seoDesc}
                keywords={seoKeywords}
                imageUrl={mainImage}
                type="product"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <JsonLd data={productSchema} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image Gallery */}
                    <div>
                        <div className="aspect-square bg-[var(--c-surface-alt)] rounded-lg shadow-lg overflow-hidden mb-4 border border-[var(--c-border)] flex items-center justify-center">
                            <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                            {galleryImages.map((img, idx) => (
                                <div 
                                    key={idx} 
                                    className={`aspect-square bg-[var(--c-surface-alt)] rounded-md overflow-hidden cursor-pointer border-2 transition-all ${mainImage === img ? 'border-[var(--c-accent-primary)] scale-105' : 'border-transparent hover:border-[var(--c-accent-primary-hover)]/50'}`}
                                    onClick={() => setMainImage(img)}
                                >
                                    <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info & Controls */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--c-accent-primary-hover)]">{productCategory}</p>
                            <h1 className="text-4xl lg:text-5xl font-bold">{product.name}</h1>
                        </div>
                        
                        <p className="text-lg text-[var(--c-text-primary)] opacity-90">{product.story}</p>
                        
                        {product.specifications.beadSize_mm && (
                            <div className="pt-4 border-t border-[var(--c-border)]">
                                <label htmlFor="bead-size-select" className="font-semibold block mb-3 text-[var(--c-heading)]">{t('product_select_bead_size')}</label>
                                <select
                                    id="bead-size-select"
                                    value={selectedBeadSize || ''}
                                    onChange={(e) => setSelectedBeadSize(Number(e.target.value))}
                                    className="w-full p-3 border border-[var(--c-border)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--c-accent-primary)] focus:border-[var(--c-accent-primary)] bg-[var(--c-surface)] appearance-none"
                                >
                                    {BEAD_SPECS.map(opt => (
                                        <option key={opt.size} value={opt.size}>
                                            {opt.size.toFixed(2)}mm
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div className="flex gap-4 items-start bg-[var(--c-surface-alt)] p-4 rounded-lg border border-[var(--c-border)]">
                            <div className="flex-grow space-y-2">
                                <h3 className="text-xl font-semibold text-[var(--c-heading)] mb-2">{t('product_specifications')}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                    <p><span className="font-semibold text-[var(--c-text-primary)]">{t('product_material')}</span> {product.material}</p>
                                    <p><span className="font-semibold text-[var(--c-text-primary)]">{t('product_origin')}</span> {product.specifications.origin}</p>
                                    {selectedBeadSize && <p><span className="font-semibold text-[var(--c-text-primary)]">{t('product_bead_size')}</span> {selectedBeadSize.toFixed(2)}mm</p>}
                                    {product.specifications.beadCount && <p><span className="font-semibold text-[var(--c-text-primary)]">{t('product_bead_count')}</span> {product.specifications.beadCount}</p>}
                                    {product.specifications.clarityLevel && <p><span className="font-semibold text-[var(--c-text-primary)]">{t('product_clarity')}</span> {product.specifications.clarityLevel}</p>}
                                    {product.specifications.finish && <p><span className="font-semibold text-[var(--c-text-primary)]">{t('product_finish')}</span> {product.specifications.finish}</p>}
                                    <p className="sm:col-span-2"><span className="font-semibold text-[var(--c-text-primary)]">{t('product_est_weight')}</span> {displayWeight}</p>
                                </div>
                                <div className="text-start mt-1">
                                    <button
                                        onClick={() => setWeightUnit(prev => prev === 'g' ? 'ct' : 'g')}
                                        className="text-xs text-[var(--c-accent-primary)] hover:underline"
                                    >
                                        {t(weightUnit === 'g' ? 'product_switch_to_carats' : 'product_switch_to_grams')}
                                    </button>
                                </div>
                                {product.certification.isCertified && (
                                    <p className="text-sm pt-2 border-t mt-2 border-[var(--c-border)]"><span className="font-semibold text-[var(--c-text-primary)]">{t('product_certification')}</span> {product.certification.authority} {t('product_certified')}</p>
                                )}
                            </div>
                        </div>
                        
                        {product.amberDetails && (
                            <div>
                                <SectionDivider/>
                                <h3 className="text-xl font-semibold text-[var(--c-heading)] mb-2">{t('product_details_title', {colorTier: product.amberDetails.colorTier})}</h3>
                                <p className="text-[var(--c-text-primary)] opacity-90">{product.amberDetails.description}</p>
                                <p className="text-[var(--c-text-primary)] opacity-90 mt-2"><span className="font-semibold">{t('product_rarity')}</span> {product.amberDetails.rarity}</p>
                                <p className="text-[var(--c-text-primary)] opacity-90 mt-1"><span className="font-semibold">{t('product_note')}</span> {product.amberDetails.specialNote}</p>
                            </div>
                        )}

                        <div className="pt-4 border-t border-[var(--c-border)]">
                            <label className="font-semibold block mb-2 text-[var(--c-heading)]">{t('product_blessing_options')}</label>
                            <div className="space-y-2">
                                <label className="flex items-center p-3 border rounded-md cursor-pointer has-[:checked]:bg-[var(--c-accent-secondary)]/20 has-[:checked]:border-[var(--c-accent-secondary-hover)]/50 transition-all">
                                    <input type="radio" name="blessing" checked={!wantsBlessing} onChange={() => setWantsBlessing(false)} className="h-4 w-4 text-[var(--c-text-secondary)] focus:ring-stone-500" />
                                    <span className="ms-3 text-sm font-semibold">{t('product_blessing_standard')}</span>
                                </label>
                                <label className="flex items-center p-3 border rounded-md cursor-pointer has-[:checked]:bg-[var(--c-accent-secondary)]/20 has-[:checked]:border-[var(--c-accent-secondary-hover)]/50 transition-all">
                                    <input type="radio" name="blessing" checked={wantsBlessing} onChange={() => setWantsBlessing(true)} className="h-4 w-4 text-[var(--c-accent-secondary-hover)] focus:ring-[var(--c-accent-secondary)]"/>
                                    <span className="ms-3 text-sm font-semibold">{t('product_blessing_add_monk', { price: BLESSING_PRICE.toLocaleString('en-US')})}</span>
                                </label>
                            </div>
                        </div>
                        
                        <div className="pt-6 border-t border-[var(--c-border)] space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-lg text-[var(--c-text-primary)] opacity-90">{t('product_total_price')}</span>
                                <span className="text-4xl font-bold text-[var(--c-heading)]">฿{finalPrice.toLocaleString('en-US')}</span>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <button 
                                    onClick={handleAddToCart} 
                                    disabled={!product.inventory.isAvailable || addedToCart} 
                                    className={`w-full text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300 disabled:bg-stone-400 disabled:cursor-not-allowed ${addedToCart ? 'bg-[var(--c-accent-secondary-hover)]' : 'btn-primary'}`}
                                >
                                    {product.inventory.isAvailable 
                                        ? (addedToCart ? t('Added to Cart') : t('Add to Cart')) 
                                        : t('product_out_of_stock')}
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-24 h-24 bg-[var(--c-surface-alt)] rounded flex items-center justify-center text-xs text-stone-400 p-1 text-center">
                                <img src="https://placehold.co/100/C38D6F/3D352E?text=Energy" alt="Energy symbol" className="w-full h-full object-cover rounded"/>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{t('product_energy_properties')}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.energyProperties.map(prop => (
                                        <span key={prop} className="bg-[var(--c-accent-secondary)]/30 text-[var(--c-accent-secondary-hover)] text-sm font-medium px-3 py-1 rounded-full">{prop}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
