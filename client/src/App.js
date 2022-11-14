import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

// COMPONENTS

import Header, { ADMIN_LINKS, CUSTOMER_LINKS } from "./component/Header";
import AdminPage from "./component/admin/AdminPage";
import AdminHome from "./component/admin/AdminHome";
import MenuListContainer from "./component/admin/MenuListContainer";
import MessagesPage from "./component/admin/MessagesPage";
import Menu from "./component/customer/Menu";
import ContactPage from "./component/customer/ContactPage";
import ReviewPage from "./component/customer/ReviewPage";

import Footer from "./component/Footer";

import Cart from "./component/customer/Cart";


function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  return (
    <ChakraProvider>
      <CSSReset />

      <Header
        links={isAdmin ? ADMIN_LINKS : CUSTOMER_LINKS}
        isAdminPage={isAdmin}
      />
      <Routes>
        <Route index element={<Menu />} />
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
