import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import CustomerPage from "./component/customer/CustomerPage.js";

function App() {
  return (
    <ChakraProvider>
      <CustomerPage />
    </ChakraProvider>
  );
}

export default App;
