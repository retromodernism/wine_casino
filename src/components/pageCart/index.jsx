import s from "./index.module.scss";
import Breadcrumbs from "../breadcrumbs";
import Cart from "../cart";
import Recomendations from "../recomendations";
import { connect } from "react-redux";
import {
  makeHeaderDark,
  makeHeaderLight,
} from "../../redux/modules/headerColor";
import CartSuccessPopup from "../cartSuccessPopup";
import CartOrder from "../cartOrder";
import Header from "../header";
import Footer from "../footer";
import { useMemo } from "react";

const CartPage = ({
  cartIsEmpty,
  cartPopupIsOpen,
  makeHeaderDark,
  ...props
}) => {
  makeHeaderDark();

  const { isDesktop, isTablet, isMobile } = useMemo(() => props, []);
  const mediaQueries = useMemo(() => ({ isDesktop, isTablet, isMobile }), []);

  return (
    <>
      <Header {...mediaQueries} />
      <main className={s.main}>
        {isDesktop && (
          <Breadcrumbs tree={[{ title: "Главная", to: "/" }]} title="Корзина" {...mediaQueries} />
        )}
        <Cart {...mediaQueries} />
        {!cartIsEmpty && (
          <>
            {isMobile && <CartOrder {...mediaQueries} />}
            <Recomendations {...mediaQueries} />
            {isTablet && <CartOrder {...mediaQueries} />}
          </>
        )}
      </main>
      <Footer {...mediaQueries} />
      {cartPopupIsOpen && <CartSuccessPopup {...mediaQueries} />}
    </>
  );
};

export default connect(
  (state) => ({
    cartPopupIsOpen: state.popup.cartPopupIsOpen,
    cartIsEmpty: state.cart.positionsIds.length === 0,
  }),
  { makeHeaderDark, makeHeaderLight }
)(CartPage);
