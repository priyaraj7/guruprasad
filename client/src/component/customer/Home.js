import { useState, useEffect } from "react";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Button,
  Spacer,
  Icon,
  SimpleGrid,
  Select,
} from "@chakra-ui/react";

import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { getAllItem } from "../../api/menuListApi";

import Carousel from "./Carousel";

const ItemContent = ({ children }) => {
  return (
    <Stack
      bg="white"
      boxShadow={"lg"}
      p={6}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
    >
      {children}
    </Stack>
  );
};

export default function Home({ addToCart = () => {}, cartItems = [] }) {
  const [menuList, setMenuList] = useState(null);

  // API call
  const getMenuList = async () => {
    setMenuList(await getAllItem());
  };

  useEffect(() => {
    getMenuList();
  }, []);

  return menuList ? (
    <>
      <Carousel />
      {menuList.map((category) => {
        return (
          <Box bg="gray.50" spacing="4" key={category.id}>
            <Container maxW={"7xl"} py={5} as={Stack} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Heading>{category.categoryname}</Heading>
                <Text>{category.description}</Text>
              </Stack>
              <SimpleGrid
                columns={[1, null, 4]}
                spacing={{ base: 10, md: 4, lg: 10 }}
              >
                {category.items.map((item) => {
                  const itemInCart = cartItems.find(
                    (cartItem) => cartItem.id === item.id
                  );
                  return (
                    <Box key={item.id}>
                      <ItemContent>
                        <Heading size="md">{item.itemName}</Heading>
                        <Flex
                          minWidth="max-content"
                          alignItems="center"
                          gap="2"
                        >
                          <Flex p="1">
                            <Icon as={FaRupeeSign} />
                            <Text size="md">
                              <Text as="span"></Text>
                              {item.price}
                            </Text>
                          </Flex>
                          <Spacer />
                          {itemInCart ? (
                            <>
                              <Select
                                value={`${itemInCart.quantity}`}
                                maxW="64px"
                                aria-label="Select quantity"
                                onChange={(ev) => {
                                  addToCart({
                                    ...item,
                                    quantity: ev.target.value,
                                  });
                                }}
                              >
                                {new Array(10).fill(0).map((_, index) => (
                                  <option key={index} value={index}>
                                    {index}
                                  </option>
                                ))}
                              </Select>
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
                            </>
                          ) : (
                            <Button
                              colorScheme="red"
                              variant="outline"
                              _hover={{ bg: "red.500", color: " white" }}
                              onClick={() => {
                                addToCart({ ...item, quantity: 1 });
                              }}
                            >
                              Add To cart
                            </Button>
                          )}
                        </Flex>
                      </ItemContent>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Container>
          </Box>
        );
      })}
    </>
  ) : (
    <h1>Loading....</h1>
  );
}
