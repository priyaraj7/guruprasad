import image from "../../images/hero-image.jpg";

import {
  Heading,
  Stack,
  Flex,
  Box,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
function HeroComponent() {
  return (
    <Flex
      p={4}
      //   w={"full"}
      //   h={"100vh"}
      backgroundImage={`url(${image})`}
      //   transform={" rotate(-90deg)"}
      //   backgroundSize={"cover"}
      //   backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            GURUPRASAD
          </Text>
          <Text>Passionate about good service and food</Text>
          <Box
            bg={"green"}
            rounded={"full"}
            p={4}
            color={"white"}
            fontWeight="bold"
          >
            Veg Meal & Tiffin
          </Box>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default HeroComponent;
