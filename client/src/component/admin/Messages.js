import { useState, useEffect } from "react";

import { postUserMessage } from "../../api/menuListApi";

function MessageComponent() {
  const [userMessages, setUserMessages] = useState([]);

  function AddMessageOnSubmit(newMessage) {
    const response = postUserMessage(newMessage);

    setUserMessages([...userMessages, response]);
  }
}

export default MessageComponent;
