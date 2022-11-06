import "./App.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import CustomerPage from "./component/customer/CustomerPage.js";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <CustomerPage />
      {/* <AdminPage /> */}
    </ChakraProvider>
  );
}

export default App;

// https://blog.webdevsimplified.com/2022-07/react-router/
