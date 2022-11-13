import { useState, useEffect, useContext } from "react";

import { withAuthenticationRequired } from "@auth0/auth0-react";
// API
import {
  addItem,
  getItemList,
  updateStatus,
  updateItemApi,
} from "../../api/adminSideApi";
// Components
import MenuList from "./MenuList";
import MenuForm from "./MenuForm";
import { AdminContext } from "./AdminPage";

import { useToast } from "@chakra-ui/react";

function MenuListContainer() {
  const [itemData, setItemData] = useState([]);
  const [filteredItemData, setFilteredItemData] = useState(itemData);
  const [searchValue, setSearchValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  // to know which item we are editing
  const initialFormState = { itemname: "", price: "", categoryId: "" };
  const [currentItem, setCurrentItem] = useState(initialFormState);
  const token = useContext(AdminContext);

  const toast = useToast();

  // Fetching Data
  useEffect(() => {
    const items = async () => {
      if (token) setItemData(await getItemList(token));
    };

    items();
  }, [token]);
  // console.log(itemData);

  const addNewItem = async (newItem) => {
    const content = await addItem(newItem, token);
    setItemData([...itemData, content]);
  };

  const onClickEditItem = (item) => {
    // debugger;
    setIsEditing(true);
    setCurrentItem({ ...item });
  };
  console.log(currentItem);
  const updateItem = (id, item) =>
    setItemData(itemData.map((data) => (data.id === id ? item : data)));

  // console.log(updateItem, "item");
  const handleEditSubmit = async (updatedItem) => {
    debugger;
    console.log(updatedItem, "update");
    updateItem(currentItem.id, updatedItem);
    console.log(updateItem(currentItem.id, updatedItem), "fn");
    // calling API

    const result = await updateItemApi(currentItem.id, updatedItem, token);
    console.log(result);
    // setCurrentItem(initialFormState);
    setCurrentItem(result);
    setIsEditing(false);
  };

  const toggleStatus = async (id) => {
    // debugger;
    const itemIndex = itemData.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      try {
        const item = itemData[itemIndex];
        // calling API
        const result = await updateStatus(id, token);
        // shallow copy of a state
        const updatedItems = [...itemData];
        // updating the item
        updatedItems[itemIndex] = { ...item, ...result };
        // update state
        setItemData(updatedItems);
      } catch (error) {
        toast({
          title: "failed to toggle availability.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  // Filtering Data
  let correctIndex;
  useEffect(() => {
    if (searchValue !== "") {
      const result = itemData.filter((item, index) => {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
        // if (item.itemname.toLocaleLowerCase().startsWith(searchValue)) {
        //   correctIndex = searchValue.length;
        //   return item.itemname.toLowerCase().startsWith(searchValue);
        // } else {
        //   return item.itemname
        //     .toLowerCase()
        //     .startsWith(searchValue.substring(0, correctIndex));
        // }
        return (
          item.itemname.toLocaleLowerCase().startsWith(searchValue) ||
          item.categoryname.toLowerCase().startsWith(searchValue)
        );
      });
      setFilteredItemData(result);
    } else {
      setFilteredItemData(itemData);
    }
  }, [searchValue, correctIndex, itemData]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <MenuList
        itemData={filteredItemData}
        toggleStatus={toggleStatus}
        handleChange={handleChange}
        onClickEditItem={onClickEditItem}
      />
      {isEditing ? (
        <MenuForm
          handleItem={handleEditSubmit}
          values={currentItem}
          buttonText="Update"
        />
      ) : (
        <MenuForm
          handleItem={addNewItem}
          values={initialFormState}
          buttonText="Add"
        />
      )}
    </>
  );
}

export default withAuthenticationRequired(MenuListContainer);
