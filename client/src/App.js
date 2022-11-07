// import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

// COMPONENTS

import Header, { ADMIN_LINKS, CUSTOMER_LINKS } from "./component/Header";
import AdminPage from "./component/admin/AdminPage";
import MessagesPage from "./component/admin/MessagesPage";
import Menu from "./component/customer/Menu";
import ContactPage from "./component/customer/ContactPage";
import ReviewPage from "./component/customer/ReviewPage";

// Auth0
import LoginButton from "./component/LoginButton";
import LogoutButton from "./component/LogoutButton";
import Profile from "./component/Profile";

function App() {
  const { isLoading, error } = useAuth0();

  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  return (
    <ChakraProvider>
      <CSSReset />

      <main className="column">
        <h1>Auth0 Learning</h1>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading.....</p>}
        {!error && !isLoading && (
          <>
            <LoginButton />
            <LogoutButton />
            <Profile />
          </>
        )}
      </main>

      {/* <Header links={isAdmin ? ADMIN_LINKS : CUSTOMER_LINKS} />
      <Routes>
        <Route index element={<Menu />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="admin" element={<AdminPage />}>
          <Route path="messages" element={<MessagesPage />} />
        </Route>
      </Routes> */}
    </ChakraProvider>
  );
}

export default App;

// https://blog.webdevsimplified.com/2022-07/react-router/
