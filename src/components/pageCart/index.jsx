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
import { getPositions } from "../../redux/modules/positions";

const CartPage = ({
  cartIsEmpty,
  getPositions,
  cartPopupIsOpen,
  makeHeaderDark,
  ...props
}) => {
  makeHeaderDark();

  const { isDesktop, isTablet, isMobile } = props;
  const mediaQueries = { isDesktop, isTablet, isMobile };

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
  { makeHeaderDark, makeHeaderLight, getPositions }
)(CartPage);
