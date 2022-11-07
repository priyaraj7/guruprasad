import "./App.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header, { ADMIN_LINKS, CUSTOMER_LINKS } from "./component/Header";
import CustomerPage from "./component/customer/CustomerPage.js";
import MessageComponent from "./component/admin/Messages";

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  return (
    <ChakraProvider>
      <CSSReset />
      {/* <CustomerPage /> */}
      <Header links={isAdmin ? ADMIN_LINKS : CUSTOMER_LINKS} />
      {/* <HeroComponent /> */}
      <Routes>
        <Route path="/admin/*" element={<MessageComponent />} />
        <Route index element={<CustomerPage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;

// https://blog.webdevsimplified.com/2022-07/react-router/
