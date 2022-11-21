export const getReviews = async () => {
  const response = await fetch(`/place/reviews`);
  const result = await response.json();

  return result;
};

export const getMealImagesAPI = async () => {
  try {
    const response = await fetch(`place/mealImages`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};
