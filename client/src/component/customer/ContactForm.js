import { useFormik } from "formik";

import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson, BsPhone } from "react-icons/bs";

import { postUserMessage } from "../../api/menuListApi";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};

function ContactForm() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      // console.log(values, "va");
      // alert(JSON.stringify(values, null, 2));
      // debugger;
      postUserMessage(values);
    },
  });
  console.log(formik);

  return (
    <Box bg="white" borderRadius="lg">
      <Box m={8} color="#0B0E3F">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={5}>
            <FormControl id="name" isRequired>
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsPerson color="gray.800" />}
                />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  size="md"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </InputGroup>
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Mail</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdOutlineEmail color="gray.800" />}
                />
                {/* <Input type="email" size="md" onChange={onChangeHandler} /> */}
                <Input
                  id="email"
                  name="email"
                  type="email"
                  size="md"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </InputGroup>
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone Number</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsPhone color="gray.800" />}
                />
                <Input
                  id="phone"
                  name="phoneNumber"
                  type="text"
                  size="md"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                />
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
                id="message"
                name="message"
                type="text"
                size="md"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              {formik.errors.message ? (
                <div>{formik.errors.message}</div>
              ) : null}
            </FormControl>
            <FormControl id="button" float="right">
              <Button
                variant="solid"
                bg="#0D74FF"
                color="white"
                _hover={{}}
                type="submit"
              >
                Send Message
              </Button>
            </FormControl>
          </VStack>
        </form>
      </Box>
      {/* <Box as="pre" marginY={10}>
        {JSON.stringify(values, null, 2)}
      </Box> */}
    </Box>
  );
}

export default ContactForm;
