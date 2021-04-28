export interface PriceInfo {
  basePrice: number;
  discountedPrice?: {
    price: number;
    discountPercentage: number;
  };
}

export function getCurrentPrice(price: PriceInfo): number {
  return price.discountedPrice && price.discountedPrice.price !== undefined
    ? price.discountedPrice.price
    : price.basePrice;
}
