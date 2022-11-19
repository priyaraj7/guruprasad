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
  useColorModeValue,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

import { FaRupeeSign } from "react-icons/fa";

import { getAllItem } from "../../api/menuListApi";

import Cart from "./Cart";
import Carousel from "./Carousel";

const ItemContent = ({ children }) => {
  return (
    <Stack
      columns={{ sm: 2, md: 4 }}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        // borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        // bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

export default function Menu() {
  const [menuList, setMenuList] = useState(null);
  // Cart
  const [cart, setCart] = useState([]);
  console.log(cart);

  const handleAddTOCart = (item) => {
    // Button on click
    // Update cart item quantity if already in cart
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                amount: cartItem.amount + 1,
              }
            : cartItem
        )
      );
      return;
    }

    // Add to cart
    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 }, // <-- initial amount 1
    ]);
  };

  // const handleAddTOCart = (item) => {
  //   setCart([...cart, item]);
  // };

  ////
  const getMenuList = async () => {
    setMenuList(await getAllItem());
  };

  useEffect(() => {
    getMenuList();
  }, []);

  console.log(menuList);

  return menuList ? (
    <>
      <Carousel />
      {menuList.map((category) => {
        return (
          <Box bg="gray.50" spacing="8" key={category.id}>
            <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
              <Stack spacing={0} align={"center"}>
                <Heading>{category.categoryname}</Heading>
                <Text>{category.description}</Text>
              </Stack>
              <SimpleGrid
                // direction={{ base: "column", md: "row" }}
                columns={[1, null, 4]}
                spacing={{ base: 10, md: 4, lg: 10 }}
              >
                {category.items.map((item) => {
                  return (
                    <Box key={item.id}>
                      <ItemContent>
                        <Heading size="md">{item.itemName}</Heading>
                        <Flex
                          minWidth="max-content"
                          alignItems="center"
                          gap="2"
                        >
                          <Box p="2">
                            <Text size="md">
                              <Icon as={FaRupeeSign} />
                              {item.price}
                            </Text>
                          </Box>
                          <Spacer />

                          <Button
                            colorScheme="red"
                            variant="solid"
                            onClick={() => handleAddTOCart(item)}
                          >
                            Add To cart
                          </Button>
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
      <Cart cart={cart} />
    </>
  ) : (
    <h1>Loading....</h1>
  );
}
