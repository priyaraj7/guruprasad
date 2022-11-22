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
  Link,
} from "@chakra-ui/react";
import { MdPhone, MdLocationOn } from "react-icons/md";

import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <Container bg="gray.50" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="gray.100"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                {/* Contact Info */}
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        variant="ghost"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +91-988888888
                      </Button>

                      <Button
                        as={Link}
                        size="md"
                        variant="ghost"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        href="https://maps.google.com/?cid=5149673375893793708"
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Ujire, Karnataka 574240, India
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                {/* INPUT FORM */}
                <ContactForm />
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default ContactPage;
