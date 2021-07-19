import s from "./index.module.scss";
import { useHistory } from "react-router";
import Breadcrumbs from "../breadcrumbs";

const Cart = (props) => {
  console.log(props);

  return (
    <main className={s.cart}>
      <div className={s._content}>
        <Breadcrumbs />
      </div>
    </main>
  );
};

export default Cart;
