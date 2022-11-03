import Header from "./Header.js";
import Menu from "./Menu.js";
import ReviewPage from "./ReviewPage.js";

function customer() {
  return (
    <>
      <Header />
      <Menu
      //  category={[1, 2, 3, 4]}
      />
      <ReviewPage />
    </>
  );
}

export default customer;
