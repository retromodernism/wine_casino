import s from "./index.module.scss";
import Breadcrumbs from "../breadcrumbs";
import Cart from "../cart";
import Recomendations from "../recomendations";
import { connect } from "react-redux";
import { Fragment } from "react";
import CartSuccessPopup from "../cartSuccessPopup";
import { useMediaQuery } from "react-responsive";
import CartOrder from "../cartOrder";

const CartPage = ({ cartPopupIsOpen, ...props }) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <Fragment>
      <main className={s.main}>
        {isDesktop && <Breadcrumbs />}
        <Cart />
        {isMobile && <CartOrder />}
        <Recomendations />
        {isTablet && <CartOrder />}
      </main>
      {cartPopupIsOpen && <CartSuccessPopup />}
    </Fragment>
  );
};

export default connect((state) => ({
  cartPopupIsOpen: state.popup.cartPopupIsOpen,
}))(CartPage);
