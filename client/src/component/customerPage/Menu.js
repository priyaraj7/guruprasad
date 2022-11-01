import { useState, useEffect } from "react";
import { getAllItem } from "../../api/catergoryApi";

// function Menu() {
//   const [item, setItem] = useState([]);

//   useEffect(() => {
//     (async () => setItem(await getAllItem(1)))();
//   }, [1]);
//   console.log(item);
//   return null;
// }

// export default Menu;

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
} from "@chakra-ui/react";

import { FaRupeeSign } from "react-icons/fa";

const ItemBox = ({ children }) => {
  return <Box>{children}</Box>;
};

const ItemContent = ({ children }) => {
  return (
    <Stack
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

export default function Menu({ category }) {
  const [item, setItem] = useState([]);
  const [earlyBreakfast, setEarlyBreakfast] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [supper, setSupper] = useState([]);
  const [beverages, setBeverages] = useState([]);

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

  const getEarlyBreakfast = async () => {
    setEarlyBreakfast(await getAllItem(1));
  };

  useEffect(() => {
    getEarlyBreakfast();
  }, []);

  const getBreakfast = async () => {
    setBreakfast(await getAllItem(2));
  };

  useEffect(() => {
    getBreakfast();
  }, []);

  const getSupper = async () => {
    setSupper(await getAllItem(3));
  };

  useEffect(() => {
    getSupper();
  }, []);

  const getBeverages = async () => {
    setBeverages(await getAllItem(4));
  };

  useEffect(() => {
    getBeverages();
  }, []);

  console.log(earlyBreakfast);
  let arr = [earlyBreakfast, breakfast, supper, beverages];
  // console.log(arr);

  return (
    <>
      {arr.map((category, index) => {
        return <p>{category[index].item_name}</p>;
      })}
      <Box bg={useColorModeValue("gray.100", "gray.700")}>
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Heading>Early Breakfast</Heading>
            <Text>6.30am to 12.00pm</Text>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <ItemBox>
              <ItemContent>
                <Heading size="md">Idli</Heading>
                <Flex minWidth="max-content" alignItems="center" gap="2">
                  <Box p="2">
                    <Text size="md">
                      <Icon as={FaRupeeSign} />
                      100
                    </Text>
                  </Box>
                  <Spacer />

                  <Button colorScheme="teal">Order Now</Button>
                </Flex>
              </ItemContent>
            </ItemBox>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
