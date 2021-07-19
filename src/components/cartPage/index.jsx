import s from "./index.module.scss";
import Breadcrumbs from "../breadcrumbs";
import Cart from "../cart";
import Recomendations from "../recomendations";

const CartPage = (props) => {
  console.log(props);

  return (
    <main className={s.cartPage}>
      <Breadcrumbs />
      <Cart />
      <Recomendations />
    </main>
  );
};

export default CartPage;
