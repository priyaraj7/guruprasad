import Header from "./Header.js";
import Menu from "./Menu.js";

function customer() {
  return (
    <>
      <Header />
      <Menu category={[1, 2, 3, 4]} />
    </>
  );
}

export default customer;
