import { Routes, Route } from "react-router-dom";
import Menu from "./Menu.js";
import ReviewPage from "./ReviewPage.js";
import ContactPage from "./ContactPage";
import HeroComponent from "./HeroComponent";

function CustomerPage() {
  return (
    <>
      {/* <HeroComponent /> */}
      <Routes>
        <Route index element={<Menu />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
    </>
  );
}

export default CustomerPage;
