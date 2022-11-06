import MessageComponent from "./MessageComponent";

import { Routes, Route } from "react-router-dom";

function AdminPage() {
  return (
    <>
      <MessageComponent />
      {/* <HeroComponent /> */}
      {/* <Routes>
        <Route index element={<Menu />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes> */}
    </>
  );
}

export default AdminPage;
