import {
  Box,
  Container,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./Logo";

export default function SmallWithLogoLeft() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction="column"
        spacing={4}
        justify="center"
        align="center"
      >
        <Logo />

        <Text>© 2022 Hotel Guruprasad. All rights reserved</Text>
      </Container>
    </Box>
  );
}
