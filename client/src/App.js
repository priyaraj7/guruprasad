import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

// components

import Header, { ADMIN_LINKS, CUSTOMER_LINKS } from "./components/Header";
import AdminPage from "./components/admin/AdminPage";
import AdminHome from "./components/admin/AdminHome";
import MenuListContainer from "./components/admin/MenuListContainer";
import MessagesPage from "./components/admin/MessagesPage";
import Home from "./components/customer/Home";
import ContactPage from "./components/customer/ContactPage";
import ReviewPage from "./components/customer/ReviewPage";

import Footer from "./components/Footer";

import Cart from "./components/customer/Cart";
import { useState } from "react";

function App() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  const isAdmin = location.pathname.startsWith("/admin");
  const addToCart = (item) => {
    const existingItem = cartItems.find((iterator) => iterator.id === item.id);
    let updateCartItems;
    if (existingItem) {
      existingItem.quantity = item.quantity;
      updateCartItems = [...cartItems];
    } else {
      updateCartItems = [...cartItems, item];
    }
    setCartItems(
      updateCartItems.filter((iterator) => Number(iterator.quantity) !== 0)
    );
  };

  return (
    <ChakraProvider>
      <CSSReset />

      <Header
        links={isAdmin ? ADMIN_LINKS : CUSTOMER_LINKS}
        isAdminPage={isAdmin}
        cartItems={cartItems}
        addToCart={addToCart}
      />

      <Routes>
        <Route
          index
          element={<Home addToCart={addToCart} cartItems={cartItems} />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="admin" element={<AdminPage />}>
          <Route index element={<AdminHome />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="menu" element={<MenuListContainer />} />
        </Route>
      </Routes>

      <Footer />
    </ChakraProvider>
  );
}

export default App;

// https://blog.webdevsimplified.com/2022-07/react-router/
