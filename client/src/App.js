import "./App.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header, { ADMIN_LINKS, CUSTOMER_LINKS } from "./component/Header";
// import CustomerPage from "./component/customer/CustomerPage.js";
import AdminPage from "./component/admin/AdminPage";
import MessagesPage from "./component/admin/MessagesPage";
import Menu from "./component/customer/Menu";
import ContactPage from "./component/customer/ContactPage";
import ReviewPage from "./component/customer/ReviewPage";

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  return (
    <ChakraProvider>
      <CSSReset />
      {/* <CustomerPage /> */}
      <Header links={isAdmin ? ADMIN_LINKS : CUSTOMER_LINKS} />
      <Routes>
        <Route index element={<Menu />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="admin" element={<AdminPage />}>
          <Route path="messages" element={<MessagesPage />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;

// https://blog.webdevsimplified.com/2022-07/react-router/
