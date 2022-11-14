import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  Select,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";

import { image } from "../../images/hero-image.jpg";

function Cart({ cart }) {
  return (
    <>
      {cart ? (
        <Box
          maxW={{ base: "3xl", lg: "7xl" }}
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack align={{ lg: "flex-start" }} spacing={{ base: "8", md: "16" }}>
            {cart.map((item, index) => (
              <Stack direction="row" spacing="5" width="full" key={index}>
                <Image
                  rounded="lg"
                  width="120px"
                  height="120px"
                  fit="cover"
                  src="https://via.placeholder.com/150"
                  alt={item.itemName}
                  draggable="false"
                  loading="lazy"
                />
                <Box>
                  <Stack spacing="1">
                    <Text fontWeight="bold" gap={2}>
                      {item.itemName}
                    </Text>
                    {/* <Text color={mode("gray.600", "gray.400")} fontSize="sm">
               {description}
             </Text> */}
                    <Flex justify="space-between">
                      <Select maxW="64px" aria-label="Select quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Select>
                      <Flex ml="10">
                        <Icon as={BiRupee} w={5} h={5} />
                        <Text fontSize="medium">{item.price}</Text>
                      </Flex>
                    </Flex>
                    <Button
                      colorScheme="blue"
                      size="md"
                      fontSize="md"
                      //   rightIcon={<FaArrowRight />}
                    >
                      Delete
                    </Button>
                  </Stack>
                  {/* <HStack spacing="1">
                 <Text fontWeight="medium">33</Text>
               </HStack> */}
                </Box>
              </Stack>
            ))}
            {/* ORDER SUMMERY */}
            {/* <Flex direction="column" align="center" flex="1"> */}

            {/* </Flex> */}
          </Stack>
        </Box>
      ) : (
        <div>Shopping cart is empty</div>
      )}{" "}
    </>
  );
}

export default Cart;

{
  /* <Stack
spacing="8"
borderWidth="1px"
rounded="lg"
padding="8"
width="full"
>
<Heading size="md">Order Summary</Heading>

<Stack spacing="6">
  <Flex justify="space-between" fontSize="sm">

  </Flex>

  <Flex justify="space-between">
    <Text fontSize="lg" fontWeight="semibold">
      Total
    </Text>
    <Text fontSize="xl" fontWeight="extrabold">
      555
    </Text>
  </Flex>
</Stack>
<Button
  colorScheme="blue"
  size="lg"
  fontSize="md"

>
  Checkout
</Button>
</Stack> */
}
