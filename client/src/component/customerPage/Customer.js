import Header from "./Header.js";
import Menu from "./Menu.js";
import ReviewPage from "./ReviewPage.js";
import ContactPage from "./ContactPage";

function customer() {
  return (
    <>
      <Header />
      <Menu />
      <ContactPage />
      <ReviewPage />
    </>
  );
}

export default customer;
