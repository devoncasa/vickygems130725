
import React, { useState, useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Product, ShopCategory } from '../types';
import { PRODUCTS, SHOP_CATEGORIES, BACKGROUND_IMAGES } from '../constants';
import ProductCard from '../components/ProductCard';
import { ChevronDownIcon } from '../components/IconComponents';
import SEO from '../components/SEO';
import { useLanguage } from '../i18n/LanguageContext';

// --- Category Sidebar Component ---
const CategorySidebar: React.FC<{
  selectedCategory: string | null;
  setSelectedCategory: (slug: string | null) => void;
}> = ({ selectedCategory, setSelectedCategory }) => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const { t } = useLanguage();

  const toggleCategory = (slug: string) => {
    setOpenCategories(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const renderCategory = (category: ShopCategory, isSub: boolean = false) => {
    const isActive = selectedCategory === category.slug;
    const isParentActive = selectedCategory && selectedCategory.startsWith(category.slug + '-');
    const isSubOpen = openCategories.includes(category.slug);

    const linkClasses = `w-full text-start flex justify-between items-center py-2 px-3 rounded-md transition-colors duration-150 ${
        isSub ? 'text-sm' : 'font-semibold'
      } ${
        isActive
          ? 'bg-[var(--c-accent-primary)] text-white'
          : isParentActive 
          ? 'text-[var(--c-accent-primary-hover)]'
          : 'text-[var(--c-text-primary)]/90 hover:bg-[var(--c-accent-primary)]/10 hover:text-[var(--c-accent-primary-hover)]'
      }`;
      
    return (
        <div key={category.slug}>
            <div className="flex items-center">
                <button
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`flex-grow ${linkClasses}`}
                >
                    {t(category.name as any)}
                </button>
                {category.subCategories && (
                    <button 
                        onClick={() => toggleCategory(category.slug)} 
                        className="p-1 -ms-1"
                        aria-expanded={isSubOpen}
                        aria-controls={`submenu-${category.slug}`}
                        aria-label={`Toggle ${t(category.name as any)} subcategories`}
                    >
                        <ChevronDownIcon className={`w-5 h-5 text-[var(--c-text-secondary)] transition-transform ${isSubOpen ? 'rotate-180' : ''}`} />
                    </button>
                )}
            </div>
            {category.subCategories && isSubOpen && (
                <div id={`submenu-${category.slug}`} className="ps-4 mt-1 border-s-2 border-[var(--c-border)] space-y-1">
                    {category.subCategories.map(sub => renderCategory(sub, true))}
                </div>
            )}
        </div>
    );
  };

  return (
    <aside className="w-full lg:w-1/4 lg:pe-8 flex-shrink-0">
      <div className="bg-[var(--c-surface)]/80 backdrop-blur-sm rounded-lg shadow-sm border border-[var(--c-border)] sticky top-28">
        <div className="p-4 border-b border-[var(--c-border)]">
          <h3 className="text-2xl font-semibold text-[var(--c-heading)]">{t('shop_categories_title')}</h3>
        </div>
        <div className="p-4 space-y-2">
            <button onClick={() => setSelectedCategory(null)} className={`w-full text-start font-semibold py-2 px-3 rounded-md transition-colors duration-150 ${!selectedCategory ? 'bg-[var(--c-accent-primary)] text-white' : 'text-[var(--c-text-primary)]/90 hover:bg-[var(--c-accent-primary)]/10 hover:text-[var(--c-accent-primary-hover)]'}`}>
                {t('shop_all_products')}
            </button>
            {SHOP_CATEGORIES.map(cat => renderCategory(cat))}
        </div>
      </div>
    </aside>
  );
};


// --- Main Page Component ---
interface OutletContextType {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const CollectionPage: React.FC = () => {
    const { setCartCount } = useOutletContext<OutletContextType>();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const { t } = useLanguage();

    const filteredProducts = useMemo(() => {
        if (!selectedCategory) {
            return PRODUCTS;
        }
        return PRODUCTS.filter(product => 
            product.category === selectedCategory || product.category.startsWith(selectedCategory + '-')
        );
    }, [selectedCategory]);
    
    const handleAddToCart = (product: Product) => {
        setCartCount(prev => prev + 1);
    };
    
    const activeCategory = useMemo(() => {
        if (!selectedCategory) return null;
        for (const cat of SHOP_CATEGORIES) {
            if (cat.slug === selectedCategory) return cat;
            if (cat.subCategories) {
                const subCat = cat.subCategories.find(sub => sub.slug === selectedCategory);
                if (subCat) return subCat;
            }
        }
        return null;
    }, [selectedCategory]);

    return (
        <div
            className="page-container-with-bg"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[34]}')` }}
        >
            <SEO 
                titleKey="shop_meta_title"
                descriptionKey="shop_meta_description"
                keywordsKey="shop_meta_keywords"
                imageUrl="https://i.postimg.cc/XvvD1yVj/Vicky-Amber-Gems-background-0020.jpg"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-8">
                    <div className="w-full h-48 bg-[var(--c-surface-alt)] rounded-lg flex items-center justify-center mb-6 bg-cover bg-center" style={{backgroundImage: "url('https://i.postimg.cc/L5JC4dJr/Vicky-Amber-Gems-background-0043.jpg')"}}>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight">{t('shop_header_title')}</h1>
                    <p className="mt-2 text-lg text-[var(--c-text-secondary)]">{t('shop_header_subtitle')}</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <CategorySidebar 
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                    <main className="w-full lg:w-3/4">
                        <div className="mb-4 flex justify-between items-center">
                            <h2 className="text-2xl font-semibold text-[var(--c-heading)]">
                                {activeCategory ? t(activeCategory.name as any) : t('shop_all_products')}
                            </h2>
                            <span className="text-sm text-[var(--c-text-secondary)]">
                                {t('shop_showing_items', { count: filteredProducts.length })}
                            </span>
                        </div>
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-[var(--c-surface)] rounded-lg shadow-sm border border-[var(--c-border)]">
                                <h3 className="text-3xl font-semibold">{t('shop_no_products_title')}</h3>
                                <p className="mt-2 text-[var(--c-text-secondary)]">{t('shop_no_products_subtitle')}</p>
                                <button onClick={() => setSelectedCategory(null)} className="mt-6 btn-primary text-white font-bold py-2 px-6 rounded-lg">
                                    {t('shop_view_all_products')}
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;
