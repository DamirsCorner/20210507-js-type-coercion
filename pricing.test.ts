import { getCurrentPrice, PriceInfo } from "./pricing";

const regular: PriceInfo = {
  basePrice: 10,
};

test("regular price", () => {
  const price = getCurrentPrice(regular);

  expect(price).toEqual(10);
});

const discount: PriceInfo = {
  basePrice: 10,
  discountedPrice: {
    price: 9,
    discountPercentage: 10,
  },
};

test("discounted price", () => {
  const price = getCurrentPrice(discount);

  expect(price).toEqual(9);
});

const free: PriceInfo = {
  basePrice: 10,
  discountedPrice: {
    price: 0,
    discountPercentage: 100,
  },
};

test("free price", () => {
  const price = getCurrentPrice(free);

  expect(price).toEqual(0);
});

test("conditional operator", () => {
  const condition = free.discountedPrice && free.discountedPrice.price;

  expect(condition).toBeTruthy();
});

test("discounted price value", () => {
  const condition = free.discountedPrice.price;

  expect(condition).toBeTruthy();
});

test("0 is falsy", () => {
  expect(0).toBeFalsy();
});
