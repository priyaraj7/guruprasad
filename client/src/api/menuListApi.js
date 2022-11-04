export const getAllItem = async () => {
  const response = await fetch(`/api/menu`);
  const result = await response.json();

  return result;
};
