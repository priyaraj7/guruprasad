export const getAllItem = async (id) => {
  const request = await fetch(`/api/${id}`);
  const result = await request.json();

  //console.log(result);
  return result;
};
