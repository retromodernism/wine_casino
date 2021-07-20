import s from "./index.module.scss";
import Breadcrumbs from "../breadcrumbs";
import Cart from "../cart";
import Recomendations from "../recomendations";
import { connect } from "react-redux";
import { Fragment } from "react";
import CartSuccessPopup from "../cartSuccessPopup";

const CartPage = ({ cartPopupIsOpen, ...props }) => {
  return (
    <Fragment>
      <main className={s.main}>
        <Breadcrumbs />
        <Cart />
        <Recomendations />
      </main>
      {cartPopupIsOpen && <CartSuccessPopup />}
    </Fragment>
  );
};

export default connect((state) => ({
  cartPopupIsOpen: state.popup.cartPopupIsOpen,
}))(CartPage);
