import s from "./index.module.scss";
import Breadcrumbs from "../breadcrumbs";
import Cart from "../cart";

const CartPage = (props) => {
  console.log(props);

  return (
    <main className={s.cartPage}>
      <Breadcrumbs />
      <Cart />
    </main>
  );
};

export default CartPage;
