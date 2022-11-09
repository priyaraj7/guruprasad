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

// Get Message API
export const getMessages = async (token) => {
  try {
    const response = await fetch(`/api/message`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
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

// Delete Message API

export const deleteMessages = async (id, token) => {
  try {
    const response = await fetch(`/api/message/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};
