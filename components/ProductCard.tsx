
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const displaySpecs = () => {
    if (product.specifications.beadSize_mm && product.specifications.beadCount) {
        return `${product.specifications.beadSize_mm}mm, ${product.specifications.beadCount} beads`;
    }
    if (product.specifications.ringSize) {
        return `Size: ${product.specifications.ringSize}`;
    }
    if (product.specifications.pendantMetal) {
        return `${product.specifications.pendantMetal}`;
    }
    return `Weight: ${product.specifications.totalWeight_grams}g`;
  };

  return (
    <div className="group flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-[var(--c-surface)] border border-[var(--c-border)]">
      <Link to={`/collection/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-square">
          <div className="w-full h-full bg-[var(--c-surface-alt)] flex items-center justify-center">
              <img src={product.media.mainImageUrl} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
          </div>
          <div className="absolute top-0 right-0 bg-[var(--c-surface)]/80 text-[var(--c-text-primary)] text-xs font-semibold px-3 py-1 m-3 rounded-full backdrop-blur-sm">{product.material}</div>
          {product.bestseller && (
            <div className="absolute top-0 left-0 bg-[var(--c-accent-primary)] text-white text-xs font-bold px-3 py-1 m-3 rounded-full uppercase tracking-wider">Bestseller</div>
          )}
        </div>
      </Link>
      <div className="p-5 text-center flex-grow flex flex-col justify-between">
        <div>
          <Link to={`/collection/${product.id}`} className="block">
            <h3 className="text-xl font-semibold text-[var(--c-heading)] truncate group-hover:text-[var(--c-accent-primary)] transition-colors">{product.name}</h3>
          </Link>
          <p className="text-sm text-[var(--c-text-secondary)] mt-1">{displaySpecs()}</p>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-semibold text-[var(--c-heading)] mb-3">฿{product.price.toLocaleString('en-US')}</p>
          <button 
            onClick={handleAddToCartClick} 
            disabled={added}
            className={`w-full px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ease-in-out border-2 ${
              added 
                ? 'bg-[var(--c-accent-secondary)] text-white border-[var(--c-accent-secondary)]' 
                : 'bg-transparent border-[var(--c-accent-primary)] text-[var(--c-accent-primary)] hover:bg-[var(--c-accent-primary)] hover:text-white'
            }`}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
