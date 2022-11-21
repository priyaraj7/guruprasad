import { Box, Text, Heading, Container, Stack } from "@chakra-ui/react";
function AdminHome() {
  return (
    <Container>
      <Heading textAlign="center">Welcome to Admin Page</Heading>
      <Text textAlign="center" p={3}>
        Please Sign In to proceed
      </Text>
    </Container>
  );
}

export default AdminHome;
