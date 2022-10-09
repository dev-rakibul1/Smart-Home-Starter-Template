const getCartProductsData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  return products;
};

export { getCartProductsData };
