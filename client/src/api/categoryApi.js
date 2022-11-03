export const getAllItem = async (id) => {
  const response = await fetch(`/api/${id}`);
  const result = await response.json();

  return result;
};
