import { useState, useEffect } from "react";
import { Box, Text, Button, Stack, Checkbox, Spacer } from "@chakra-ui/react";

import {
  getMessages,
  postUserMessage,
  deleteMessages,
} from "../../api/menuListApi";

function MessageComponent() {
  const [userMessages, setUserMessages] = useState([]);

  //   function AddMessageOnSubmit(newMessage) {
  //     const response = postUserMessage(newMessage);

  //     setUserMessages([...userMessages, response]);
  //   }

  const getMessageList = async () => {
    setUserMessages(await getMessages());
  };
  useEffect(() => {
    getMessageList();
  }, []);

  const deleteMessage = (id) => {
    const removeMsg = userMessages.filter((msg) => msg.id === id);
    deleteMessages(id);

    //const index = userMessages.findIndex((message) => message.id === id);

    //  const removeMsg = userMessages.splice(index, 1);

    setUserMessages(removeMsg);
  };

  console.log("mesg", userMessages);
  return (
    <>
      {userMessages.map((message) => {
        return (
          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={message.time}
          >
            {" "}
            <Stack spacing={8} direction="row">
              {" "}
              <Checkbox> </Checkbox>
              <Box>
                {" "}
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {message.name}
                </Box>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                >
                  {message.messaged_at}
                </Box>
                <Text>{message.message}</Text>
              </Box>
              <Spacer />
              <Button onClick={() => deleteMessage(message.id)}>delete</Button>
            </Stack>
          </Box>
        );
      })}
    </>
  );
}

export default MessageComponent;
