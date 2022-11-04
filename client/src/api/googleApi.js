export const getReviews = async () => {
  const response = await fetch(`/place/reviews`);
  const result = await response.json();

  return result;
};
