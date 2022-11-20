import { useState, useEffect, useContext } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import {
  Box,
  Text,
  Button,
  Stack,
  Checkbox,
  Spacer,
  useToast,
} from "@chakra-ui/react";

// Components
import { AdminContext } from "./AdminPage";
// API
import { getMessages, deleteMessages } from "../../api/adminSideApi";

function MessagesPage() {
  const [userMessages, setUserMessages] = useState([]);
  const token = useContext(AdminContext);

  useEffect(() => {
    const getMessageList = async () => {
      if (token) setUserMessages(await getMessages(token));
    };
    getMessageList();
  }, [token]);
  const toast = useToast();

  const deleteMessage = async (id) => {
    const result = await deleteMessages(id, token);
    if (result && result.status === "success") {
      const removeMsg = userMessages.filter((msg) => msg.id !== id);
      setUserMessages(removeMsg);
      toast({
        title: "Message deleted successfully.",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Failed to delete message.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

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

export default withAuthenticationRequired(MessagesPage);
