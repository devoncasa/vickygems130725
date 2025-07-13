import { BeadSize, Product } from '../types';

const BASELINE_SIZE = 10;
const INCREMENT_STEP = 0.25;
const PRICE_CHANGE_PER_INCREMENT = 0.05; // 5%

/**
 * Calculates a final price for a target bead size based on a theoretical 10mm base price.
 * For every 0.25mm change from the 10mm baseline, the price is adjusted by 5%.
 *
 * @param basePriceFor10mm The price of the item if it had 10mm beads.
 * @param targetSize The desired bead size for the final price calculation.
 * @returns The calculated final price for the new size.
 */
export const calculatePriceFrom10mmBase = (basePriceFor10mm: number, targetSize: BeadSize): number => {
  const targetSizeDifference = targetSize - BASELINE_SIZE;
  const targetIncrements = targetSizeDifference / INCREMENT_STEP;
  const targetPriceModifier = targetIncrements * PRICE_CHANGE_PER_INCREMENT;
  
  const finalPrice = basePriceFor10mm * (1 + targetPriceModifier);

  // Ensure the price doesn't go below zero, just in case
  return Math.max(0, finalPrice);
};

/**
 * Calculates the final price of a product for a new target bead size, based on its
 * existing price and size.
 * 
 * The rule is: price is based on a theoretical 10mm bead price. For every 0.25mm 
 * change from the 10mm baseline, the price is adjusted by 5%.
 *
 * This function first reverse-calculates the product's theoretical 10mm base price
 * and then calculates the final price for the target size.
 *
 * @param product The reference product object, which has a known price at a known size.
 * @param targetSize The desired bead size for the final price calculation.
 * @returns The calculated final price for the new size.
 */
export const calculateFinalPrice = (product: Product, targetSize: BeadSize): number => {
  const productSize = product.specifications.beadSize_mm;
  const productPrice = product.price;

  if (typeof productSize === 'undefined') {
    return productPrice;
  }

  const sizeDifferenceFromBaseline = productSize - BASELINE_SIZE;
  const incrementsFromBaseline = sizeDifferenceFromBaseline / INCREMENT_STEP;
  const priceModifierForProduct = incrementsFromBaseline * PRICE_CHANGE_PER_INCREMENT;
  
  const divisor = 1 + priceModifierForProduct;
  if (!isFinite(divisor) || divisor === 0) {
    return productPrice; // Avoid division by zero or NaN
  }

  const basePriceFor10mm = productPrice / divisor;

  return calculatePriceFrom10mmBase(basePriceFor10mm, targetSize);
};
