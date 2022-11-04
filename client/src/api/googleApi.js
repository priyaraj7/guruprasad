const handleError = function (error) {
  console.warn(error);
  return new Response(
    JSON.stringify({
      code: 400,
      message: "Network Error",
    })
  );
};

export const getReviews = async () => {
  const response = await fetch(`/place/reviews`).catch(handleError);
  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    return Promise.reject(response);
  }
};
