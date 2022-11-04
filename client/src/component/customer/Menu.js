import { useState, useEffect } from "react";
import { getAllItem } from "../../api/menuListApi";

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

  const getMenuList = async () => {
    setMenuList(await getAllItem(1));
  };

  useEffect(() => {
    getMenuList();
  }, []);

  console.log(menuList);

  return menuList ? (
    <>
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
                {category.item.map((item) => {
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

                          <Button colorScheme="teal">Order Now</Button>
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

//   const getCategory = async (id) => setItem(await getAllItem(id));
//   useEffect(() => {
//     category.forEach(getCategory);
//   }, [category]);

//   useEffect(() => {
//     let controller = new AbortController();
//     debugger;
//     (async (id) => {
//       try {
//         const url = new URL("/api/getByCategories", document.location);
//         [1, 2, 3, 4].forEach((id) => url.searchParams.append("categoryId", id));
//         const response = await fetch(url.toString(), {
//           signal: controller.signal,
//         });
//         setItem(await response.json());
//         controller = null;
//       } catch (e) {
//         // Handle fetch error
//         console.log(e);
//       }
//     })();
//     return () => controller?.abort;
//   }, []);

//console.log(item);
