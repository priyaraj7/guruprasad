import image from "../../images/hero-image.jpg";

import {
  Heading,
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
function HeroComponent() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={`url(${image})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Heading
        // textAlign={"center"}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        GURUPRASAD
      </Heading>
    </Flex>
  );
}

export default HeroComponent;
