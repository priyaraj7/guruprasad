import { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Checkbox,
  Container,
  Button,
} from "@chakra-ui/react";

function MenuForm({ handleItem, values, buttonText }) {
  // const defaultValue = { name: "", price: "", categoryId: "" };
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

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl onSubmit={handleSubmit} isRequired>
          <FormLabel htmlFor="item-name">Item name</FormLabel>
          <Input
            id="item-name"
            name="itemname"
            value={inputValues.itemname}
            onChange={handleChange}
          />

          <FormLabel htmlFor="price">Price</FormLabel>
          <Input
            id="price"
            name="price"
            value={inputValues.price}
            onChange={handleChange}
          />
          <FormLabel htmlFor="price">Select Category</FormLabel>
          <Select
            placeholder="Select option"
            name="categoryId"
            onChange={handleChange}
          >
            {options.map((option) => (
              <option
                key={option.value}
                selected={inputValues.categoryId === option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </Select>
          {/* <FormLabel htmlFor="status">Check the status</FormLabel>
        <Checkbox
          colorScheme="green"
          value="status"
          name="status"
          // isChecked={inputValues.status}
          // onChange={handleChange}
        >
          Active
        </Checkbox> */}
          <br />
          <Button
            colorScheme="blue"
            type="submit"
            // onClick={() => {
            //   onSave(inputValues);
            // }}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default MenuForm;
