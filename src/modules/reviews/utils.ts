import { Review } from "./types";

// Get all reviews for a given product
export function getReviewsByProductId(
  reviews: Review[],
  productId: number
): Review[] {
  return reviews.filter((review) => review.productId === productId);
}

// Get the average rating of reviews for a given product
export function getAverageRatingForProduct(
  reviews: Review[],
  productId: number
): number {
  const productReviews = getReviewsByProductId(reviews, productId);
  const totalRatings = productReviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  return totalRatings / productReviews.length;
}

// Get the most recent reviews (limit parameter is optional)
export function getMostRecentReviews(
  reviews: Review[],
  limit?: number
): Review[] {
  const sortedReviews = [...reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return limit ? sortedReviews.slice(0, limit) : sortedReviews;
}

// Get the highest rated reviews (limit parameter is optional)
export function getHighestRatedReviews(
  reviews: Review[],
  limit?: number
): Review[] {
  const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);
  return limit ? sortedReviews.slice(0, limit) : sortedReviews;
}
