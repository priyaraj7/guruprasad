const requestHeader = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};
export const getAllItem = async () => {
  try {
    const response = await fetch(`/api/menu`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Post Message API
export const postUserMessage = async (message) => {
  const requestOptions = {
    ...requestHeader,
    method: "POST",
    body: JSON.stringify(message),
  };

  try {
    const response = await fetch(`/api/message`, requestOptions);
    return await response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};
