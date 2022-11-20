import {
  Box,
  Icon,
  Stack,
  Text,
  Select,
  Heading,
  Flex,
  Button,
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
                <Box>
                  <Stack spacing="1">
                    <Text fontWeight="semibold" gap={2}>
                      {item.itemName}
                    </Text>

                    <Flex justify="space-between">
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
                        onClick={() => {
                          addToCart({ ...item, quantity: 0 });
                        }}
                      >
                        <MdDelete />
                      </Button>
                    </Flex>
                  </Stack>
                </Box>
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
                    {totalPrice}
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
        </Box>
      ) : (
        <div>Shopping cart is empty</div>
      )}{" "}
    </>
  );
}

export default Cart;
