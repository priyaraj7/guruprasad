// const requestHeader = {
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     authorization: `Bearer ${token}`,
//   },
// };

// Menu related API
export const getItemList = async (token) => {
  try {
    const response = await fetch(`/admin/menu.json`, {
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

export const addItem = async (newItem, token) => {
  const requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify(newItem),
  };

  try {
    const response = await fetch(`/admin/menu.json`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateStatus = async (id, token) => {
  const requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    method: "PUT",
  };

  try {
    const response = await fetch(`/admin/menu/${id}/status`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateItemApi = async (id, content, token) => {
  const requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(content),
    method: "PUT",
  };

  try {
    const response = await fetch(`/admin/menu/${id}`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Message related API

// Get Message API
export const getMessages = async (token) => {
  try {
    const response = await fetch(`/admin/message`, {
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

// Delete Message API

export const deleteMessages = async (id, token) => {
  try {
    const response = await fetch(`/admin/message/${id}`, {
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
