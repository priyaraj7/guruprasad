import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Customer from "./component/customerPage/Customer.js";

function App() {
  return (
    <ChakraProvider>
      <Customer />
    </ChakraProvider>
  );
}

export default App;
