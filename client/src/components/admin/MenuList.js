import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Switch,
  Input,
  Button,
  Box,
  useColorModeValue,
  Center,
  Flex,
  Text,
  VStack,
  Icon,
  Td,
} from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa";

import { EditIcon, AddIcon } from "@chakra-ui/icons";

function MenuList({
  itemData,
  toggleStatus,
  handleChange,
  handleOnClickEditItem,
  handleOnAddClick,
}) {
  const tableHeader = [
    "Item",
    "Price",
    "Category Name",
    "Description",
    "Actions",
  ];

  return (
    <>
      <Box
        p={4}
        mx="20"
        bg={useColorModeValue("white", "gray.800")}
        rounded={"md"}
      >
        <Flex>
          <Center flex="1">
            <Input
              variant="outline"
              width={500}
              rounded={"full"}
              border={0}
              bg={useColorModeValue("gray.200", "gray.800")}
              type="text"
              placeholder="Search by Item Name or Category..."
              onChange={handleChange}
            />
          </Center>
          <Button
            onClick={handleOnAddClick}
            size="md"
            variant={"link"}
            rounded={"full"}
          >
            <VStack>
              <AddIcon color="blue.500" />
              <Text color="blue.500">Add Item</Text>
            </VStack>
          </Button>
        </Flex>
        <TableContainer overflow-x="auto" overflow-y="hidden">
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead fontweights="900">
              <Tr>
                {tableHeader.map((header, index) => (
                  <Th
                    textAlign={
                      index === tableHeader.length - 1 ? "right" : "left"
                    }
                    key={header}
                  >
                    {header}{" "}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {itemData.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.itemname}</Td>
                  <Td>
                    <Icon as={FaRupeeSign} />
                    {Number(item.price).toFixed(2)}
                  </Td>
                  <Td>{item.categoryname}</Td>
                  <Td>{item.description}</Td>
                  <Td textAlign="right" maxW="10%">
                    <Switch
                      isChecked={item.active}
                      colorScheme="blue"
                      size="lg"
                      onChange={() => toggleStatus(item.id)}
                    />

                    <Button
                      onClick={() => handleOnClickEditItem(item)}
                      variant="link"
                    >
                      <EditIcon color="blue.500" />
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default MenuList;
