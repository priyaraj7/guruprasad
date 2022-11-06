import { useState, useEffect } from "react";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
} from "@chakra-ui/react";
import { MdPhone, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson, BsPhone } from "react-icons/bs";

/*
props:
      AddMessageOnSubmit  => Admin/Messages.js component
*/

function ContactForm({ values, AddMessageOnSubmit }) {
  const [inputValues, setInputValues] = useState(values);

  useEffect(() => {
    setInputValues(values);
  }, [values]);

  function onChangeHandler(event) {
    const value = event.target.value;
    console.log("new value", event.target.value);
    setInputValues({
      ...inputValues,
      [event.target.name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    AddMessageOnSubmit(inputValues);
  }
  return (
    <Box bg="white" borderRadius="lg">
      <Box m={8} color="#0B0E3F">
        <VStack spacing={5}>
          <FormControl id="name" isRequired>
            <FormLabel>Your Name</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement
                pointerEvents="none"
                children={<BsPerson color="gray.800" />}
              />
              <Input type="text" size="md" onChange={onChangeHandler} />
            </InputGroup>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Mail</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineEmail color="gray.800" />}
              />
              <Input type="email" size="md" onChange={onChangeHandler} />
            </InputGroup>
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone Number</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement
                pointerEvents="none"
                children={<BsPhone color="gray.800" />}
                onChange={onChangeHandler}
              />
              <Input type="text" size="md" onChange={onChangeHandler} />
            </InputGroup>
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              borderColor="gray.300"
              _hover={{
                borderRadius: "gray.300",
              }}
              placeholder="message"
              onChange={onChangeHandler}
            />
          </FormControl>
          <FormControl id="name" float="right">
            <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
              Send Message
            </Button>
          </FormControl>
        </VStack>
      </Box>
    </Box>
  );
}

export default ContactForm;
