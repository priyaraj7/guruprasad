import { Container, Heading, Text } from "@chakra-ui/react";

function PageNotFound() {
  return (
    <Container>
      <Heading>404 Error</Heading>
      <Text fontSize="30px" color="tomato">
        Page Not Found
      </Text>
    </Container>
  );
}

export default PageNotFound;
