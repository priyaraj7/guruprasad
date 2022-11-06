import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  Stack,
  Checkbox,
  Spacer,
  useToast,
} from "@chakra-ui/react";

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
  const toast = useToast();

  const deleteMessage = async (id) => {
    const result = await deleteMessages(id);
    if (result && result.success) {
      const removeMsg = userMessages.filter((msg) => msg.id !== id);
      setUserMessages(removeMsg);
    } else {
      toast({
        title: "Failed to delete message.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
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
            key={message.id}
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
