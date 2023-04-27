// Get a product by ID
function getProductById(products, id) {
  return products.find((product) => product.id === id);
}

// Get all products in a category
function getProductsByCategory(products, category) {
  return products.filter((product) => product.category === category);
}

// Get the average rating of products in an array
function getAverageRating(products) {
  const totalRatings = products.reduce(
    (acc, product) => acc + product.rating,
    0
  );
  return totalRatings / products.length;
}

// Sort products by price (ascending)
function sortProductsByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

// Get the most reviewed product
function getMostReviewedProduct(products) {
  return products.reduce((mostReviewed, product) => {
    return product.reviews > (mostReviewed?.reviews || 0)
      ? product
      : mostReviewed;
  }, undefined);
}

// Get the highest rated product
function getHighestRatedProduct(products) {
  return products.reduce((highestRated, product) => {
    return product.rating > (highestRated?.rating || 0)
      ? product
      : highestRated;
  }, undefined);
}

module.exports = {
  getProductById,
  getProductsByCategory,
  getAverageRating,
  sortProductsByPrice,
  getMostReviewedProduct,
  getHighestRatedProduct,
};
