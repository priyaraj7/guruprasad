import Header from "./Header.js";
import Menu from "./Menu.js";
import ReviewPage from "./ReviewPage.js";
import ContactPage from "./ContactPage";
import HeroComponent from "./HeroComponent";
import MessageComponent from "../admin/Messages";

import { Routes, Route } from "react-router-dom";

function CustomerPage() {
  return (
    <>
      <Header />
      {/* <HeroComponent /> */}
      <Routes>
        <Route index element={<Menu />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>

      {/* later delete it */}
      <MessageComponent />
    </>
  );
}

export default CustomerPage;
