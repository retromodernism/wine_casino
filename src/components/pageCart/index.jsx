import s from "./index.module.scss";
import Breadcrumbs from "../breadcrumbs";
import Cart from "../cart";
import Recomendations from "../recomendations";
import { connect } from "react-redux";
import {
  makeHeaderDark,
  makeHeaderLight,
} from "../../redux/modules/headerColor";
import { Fragment } from "react";
import CartSuccessPopup from "../cartSuccessPopup";
import { useMediaQuery } from "react-responsive";
import CartOrder from "../cartOrder";
import Header from "../header";
import Footer from "../footer";
import { getPositions } from "../../redux/modules/positions";

const CartPage = ({
  cartIsEmpty,
  getPositions,
  cartPopupIsOpen,
  makeHeaderDark,
  ...props
}) => {
  makeHeaderDark();

  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <>
      <Header />
      <main className={s.main}>
        {isDesktop && (
          <Breadcrumbs tree={[{ title: "Главная", to: "/" }]} title="Корзина" />
        )}
        <Cart />
        {!cartIsEmpty && (
          <>
            {isMobile && <CartOrder />}
            <Recomendations />
            {isTablet && <CartOrder />}
          </>
        )}
      </main>
      <Footer />
      {cartPopupIsOpen && <CartSuccessPopup />}
    </>
  );
};

export default connect(
  (state) => ({
    cartPopupIsOpen: state.popup.cartPopupIsOpen,
    cartIsEmpty: state.cart.positionsIds.length === 0,
  }),
  { makeHeaderDark, makeHeaderLight, getPositions }
)(CartPage);
