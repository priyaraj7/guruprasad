import { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Container,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function MenuForm({ handleItem, values, handleClose, buttonText = "Add" }) {
  const [inputValues, setInputValues] = useState(values);

  useEffect(() => {
    setInputValues(values);
  }, [values]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    // const input = event.target;
    // console.log("name:", input.name);
    handleItem(inputValues);
  }

  const options = [
    { label: "Early Breakfast", value: "1" },
    { label: "Breakfast", value: "2" },
    { label: "Supper", value: "3" },
    { label: "Beverage", value: "4" },
  ];

  const selectedCategory = options.find(
    (op) => inputValues && op.label === inputValues.categoryname
  );

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>{buttonText} Menu Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container>
              <FormControl onSubmit={handleSubmit} isRequired>
                <FormLabel htmlFor="item-name">Item name</FormLabel>
                <Input
                  id="item-name"
                  data-testid="item-name"
                  name="itemname"
                  value={inputValues.itemname}
                  onChange={handleChange}
                />

                <FormLabel htmlFor="price">Price</FormLabel>
                <Input
                  id="price"
                  data-testid="price"
                  name="price"
                  value={inputValues.price}
                  onChange={handleChange}
                />
                <FormLabel htmlFor="price">Select Category</FormLabel>
                <Select
                  placeholder="Select option"
                  data-testid="select-category"
                  name="categoryId"
                  value={(selectedCategory || {}).value}
                  onChange={handleChange}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Container>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" type="submit">
              {buttonText}
            </Button>
            <Button variant="ghost" onClick={handleClose}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default MenuForm;
