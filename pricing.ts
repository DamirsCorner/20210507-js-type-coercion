export interface PriceInfo {
  basePrice: number;
  discountedPrice?: {
    price: number;
    discountPercentage: number;
  };
}

export function getCurrentPrice(price: PriceInfo): number {
  return price.discountedPrice && price.discountedPrice.price
    ? price.discountedPrice.price
    : price.basePrice;
}
