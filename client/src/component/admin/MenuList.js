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
} from "@chakra-ui/react";

function MenuList({ itemData, toggleStatus, handleChange, onClickEditItem }) {
  const tableHeader = [
    ["Item Name", "itemname"],
    ["Price", "price"],
    ["Status", "active"],
    ["Category Name", "categoryname"],
    ["Description", "description"],
    ["Edit", "edit"],
  ];
  return (
    <>
      <Box
        border="2px"
        p={4}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
      >
        <Center>
          <Button size="md" height="48px" width="200px" rounded={"full"}>
            Add item
          </Button>
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
        <TableContainer overflow-x="auto" overflow-y="hidden">
          <Table variant="striped" colorScheme="blue" size="md">
            <Thead>
              <Tr>
                {tableHeader.map((header) => (
                  <Th key={header[1]}>{header[0]} </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {itemData.map((item) => (
                <Tr key={item.id}>
                  <Th>{item.itemname}</Th>
                  <Th>{item.price}</Th>
                  <Th>
                    <Switch
                      isChecked={item.active}
                      colorScheme="teal"
                      size="lg"
                      onChange={() => toggleStatus(item.id)}
                    />
                  </Th>
                  <Th>{item.categoryname}</Th>
                  <Th>{item.description}</Th>
                  <Th>
                    <Button onClick={() => onClickEditItem(item)}>Edit</Button>
                  </Th>
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
