
import { Product, Filters, ClarityTier, Material } from '../types';

/**
 * Maps a product's detailed clarity string to a simplified tier.
 * This function is designed to be robust against variations in description.
 * Tier mapping: 'high' (best), 'semi-clear' (middle), 'visible' (lowest).
 * @param {string} clarityLevel - The detailed clarity string from product data.
 * @returns {ClarityTier} The simplified clarity tier.
 */
const getProductClarityTier = (clarityLevel: string): ClarityTier => {
    const level = clarityLevel.toLowerCase();

    // Highest tier keywords
    if (level.includes('premium') || level.includes('a+') || level.includes('vs') || level.includes('high clarity')) {
        return 'high';
    }
    // Middle tier keywords
    if (level.includes('a grade') || level.includes('high grade') || level.includes('semi-clear')) {
        return 'semi-clear';
    }
    // Lowest tier keywords
    if (level.includes('b grade') || level.includes('inclusions') || level.includes('visible')) { 
        return 'visible';
    }
    
    // Default for any un-matched strings to prevent filtering errors
    return 'semi-clear';
};

/**
 * Filters an array of products based on user-selected criteria,
 * including complex business rules for different amber types.
 *
 * @param {Product[]} products - The array of all product objects.
 * @param {Filters} filters - The user's selections from the UI.
 * @returns {Product[]} A new array of products matching all active filters.
 */
export const filterAmberProducts = (products: Product[], filters: Filters): Product[] => {
  
  return products.filter(product => {
    // --- Standard Filters ---

    // 1. Filter by selected Amber Colors
    if (filters.amberColors.length > 0) {
        if (product.material !== Material.Amber || !product.amberDetails || !filters.amberColors.includes(product.amberDetails.colorSlug)) {
            return false;
        }
    }
    
    // 2. Filter by bead size
    if (product.specifications.beadSize_mm > filters.beadSizeMax) {
        return false;
    }

    // 3. Filter by certification
    if (filters.certifications.length > 0) {
        if (!product.certification.isCertified || !product.certification.authority || !filters.certifications.includes(product.certification.authority)) {
            return false;
        }
    }
    
    // 4. Filter by clarity (from the 'Clarity' radio buttons)
    if (filters.clarity !== 'all') {
        if (getProductClarityTier(product.specifications.clarityLevel) !== filters.clarity) {
            return false;
        }
    }

    // If the product passed all checks, include it
    return true;
  });
};