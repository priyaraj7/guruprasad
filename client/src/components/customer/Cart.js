import {
  Box,
  Icon,
  Stack,
  Text,
  Select,
  Heading,
  Flex,
  Button,
  Divider,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Cart({ cartItems, addToCart }) {
  let totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <>
      {cartItems.length ? (
        <Box
          maxW={{ base: "3xl", lg: "7xl" }}
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack align={{ lg: "flex-start" }} spacing={{ base: "3", md: "6" }}>
            {cartItems.map((item, index) => (
              <Stack direction="row" spacing="1" width="full" key={index}>
                <Stack spacing="1" align="center">
                  <Heading size="sm">{item.itemName}</Heading>

                  <Stack direction="row" spacing={4} align="center">
                    <Select
                      value={`${item.quantity}`}
                      maxW="64px"
                      aria-label="Select quantity"
                      onChange={(ev) => {
                        addToCart({ ...item, quantity: ev.target.value });
                      }}
                    >
                      {new Array(10).fill(0).map((_, index) => (
                        <option key={index} value={index}>
                          {index}
                        </option>
                      ))}
                    </Select>
                    <Flex ml="10">
                      <Icon as={BiRupee} w={5} h={5} />
                      <Text fontSize="medium">{item.price}</Text>
                    </Flex>

                    <Button
                      colorScheme="red"
                      variant="ghost"
                      _hover={{ bg: "red.500", color: " white" }}
                      onClick={() => {
                        addToCart({ ...item, quantity: 0 });
                      }}
                    >
                      <Text fontSize="xl">
                        <MdDelete />
                      </Text>
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            ))}
            <Box pt="6">
              <Heading size="md">Order Summary</Heading>

              <Stack spacing="6">
                <Flex justify="space-between" fontSize="sm"></Flex>

                <Flex justify="space-between">
                  <Text fontSize="lg" fontWeight="semibold">
                    Total
                  </Text>
                  <Text fontSize="xl" fontWeight="extrabold">
                    <Icon as={BiRupee} /> {totalPrice}
                  </Text>
                </Flex>
              </Stack>
              <Button
                rightIcon={<MdCall />}
                colorScheme="blue"
                variant="outline"
              >
                Call us make an order
              </Button>
            </Box>{" "}
          </Stack>
          <Divider />
        </Box>
      ) : (
        <div>Shopping cart is empty</div>
      )}{" "}
    </>
  );
}

export default Cart;
