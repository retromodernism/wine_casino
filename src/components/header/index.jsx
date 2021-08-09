import s from "./index.module.scss";
import cx from "classnames";
import { ReactComponent as Logo } from "./src/logo.svg";
import { ReactComponent as LogoTablet } from "./src/logo_tab.svg";
import { ReactComponent as LogoMobile } from "./src/logo_mob.svg";
import logo from "./src/logo.svg";
import logoTablet from "./src/logo_tab.svg";
import logoMobile from "./src/logo_mob.svg";
import { ReactComponent as WhatsApp } from "./src/whatsapp.svg";
import { ReactComponent as Telegram } from "./src/tg.svg";
import { ReactComponent as Viber } from "./src/viber.svg";
import { ReactComponent as Phone } from "./src/phone.svg";
import { ReactComponent as Search } from "./src/search.svg";
import { ReactComponent as Cart } from "./src/cart.svg";
import { ReactComponent as Burger } from "./src/burger.svg";
import { ReactComponent as PhoneMob } from "./src/phone_mob.svg";
import { ReactComponent as SearchMob } from "./src/search_mob.svg";
import { ReactComponent as CartMob } from "./src/cart_mob.svg";
import { ReactComponent as BurgerMob } from "./src/burger_mob.svg";
import GoToCartButton from "../goToCartButton";
import HeaderSearchBar from "../headerSearchBar";
import { connect } from "react-redux";
import { setSocialsHover } from "../../redux/modules/headerSocialsHover";
import {
  openFoodCasinos,
  closeFoodCasinos,
  openClassicCasinos,
  closeClassicCasinos,
} from "../../redux/modules/catalogHover";
import { openSearchBar } from "../../redux/modules/tabletSearchBar";
import { openBurger } from "../../redux/modules/burger";
import CatalogHoverPanel from "../catalogHoverPanel";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";
import { useState } from "react";

const phone = {
  tel: "74950857604",
  title: "+7 (495) 085-76-04",
};

const Header = ({
  searchBarIsOpen,
  socialsIsHovered,
  foodCasinosIsOpen,
  classicCasinosIsOpen,
  cartPositionsCount,
  setSocialsHover,
  openFoodCasinos,
  closeFoodCasinos,
  openClassicCasinos,
  closeClassicCasinos,
  headerColor,
  openBurger,
  openSearchBar,
  data,
  ...props
}) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* Header Color Theme */

  const isDark = headerColor === "dark";
  const isLight = headerColor === "light";

  return (
    <div
      className={cx(s.header, {
        [s.header_dark]: isDark,
        [s.header_light]: isLight,
      })}
      name="header"
    >
      {!searchBarIsOpen && (
        <Link to="/" className={s._logoWrapper}>
          {data ? (
            <>
              {isDesktop && (
                <Logo
                  className={s._logo}
                  style={{ fill: data.logo.desktop.color }}
                />
              )}
              {isTablet && (
                <LogoTablet
                  className={s._logo}
                  style={{ fill: data.logo.tablet.color }}
                />
              )}
              {isMobile && (
                <LogoMobile
                  className={s._logo}
                  style={{ fill: data.logo.mobile.color, height: "33px" }}
                />
              )}
            </>
          ) : (
            <>
              {isDesktop && <Logo className={s._logo} />}
              {isTablet && (
                <LogoTablet className={s._logo} style={{ fill: "#323232" }} />
              )}
              {isMobile && (
                <LogoMobile
                  className={s._logo}
                  style={{ fill: "#323232", height: "33px" }}
                />
              )}
            </>
          )}
        </Link>
      )}
      {searchBarIsOpen && <HeaderSearchBar />}
      {isDesktop && (
        <Fragment>
          <nav className={s._nav}>
            <ul className={s._navList}>
              <li
                className={cx(s._navListItem, s._navListItem_arrow, {
                  [s._navListArrow_hover]: foodCasinosIsOpen,
                })}
                onMouseEnter={openFoodCasinos}
                onMouseLeave={closeFoodCasinos}
              >
                <div className={s._catalog}>Кулинарное казино</div>
                <div className={s._catalogArrow}></div>
                {foodCasinosIsOpen && <CatalogHoverPanel casinosType="foodCasino" />}
              </li>
              <li
                className={cx(s._navListItem, s._navListItem_arrow, {
                  [s._navListArrow_hover]: classicCasinosIsOpen,
                })}
                onMouseEnter={openClassicCasinos}
                onMouseLeave={closeClassicCasinos}
              >
                <div className={s._catalog}>Классическое казино</div>
                <div className={s._catalogArrow}></div>
                {classicCasinosIsOpen && <CatalogHoverPanel casinosType="classicCasino" />}
              </li>
              {/* <li className={s._navListItem}>
                <a href="/" className={s._catalog}>
                  Наши программы
                </a>
              </li> */}
              <li className={s._navListItem}>
                <Link to="/contacts" className={s._catalog}>
                  Контакты
                </Link>
              </li>
            </ul>
            <HeaderSearchBar className={s._navSearchBar} />
          </nav>
          <div className={s._phoneWrapper}>
            <a href={`tel:+${phone.tel}`} className={s._phone}>
              {phone.title}
            </a>
            <div
              className={
                socialsIsHovered
                  ? cx(s._phoneArrow, s._phoneArrow_hover)
                  : cx(s._phoneArrow)
              }
              onMouseEnter={setSocialsHover.bind(null, true)}
              onMouseLeave={setSocialsHover.bind(null, false)}
            >
              {socialsIsHovered && (
                <div
                  className={s._phoneSocials}
                  onMouseEnter={setSocialsHover.bind(null, true)}
                  onMouseLeave={setSocialsHover.bind(null, false)}
                >
                  <a
                    className={s._phoneSocialsItem}
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsApp />
                  </a>
                  <a
                    className={s._phoneSocialsItem}
                    href="https://telegram.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Telegram />
                  </a>
                  <a
                    className={s._phoneSocialsItem}
                    href="https://www.viber.com/ru/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Viber />
                  </a>
                </div>
              )}
            </div>
            <a href="tel:+74950857604" className={s._phoneSubtitle}>
              заказать звонок
            </a>
          </div>
          <GoToCartButton />
        </Fragment>
      )}
      {(isTablet || isMobile) && (
        <nav className={s._nav}>
          {!searchBarIsOpen && (
            <Fragment>
              <a href={`tel:+${phone.tel}`} className={s._navItem}>
                {isTablet && <Phone />}
                {isMobile && <PhoneMob />}
              </a>
              <button
                className={cx(s._navItem, s._search)}
                onClick={openSearchBar}
              >
                {isTablet && <Search />}
                {isMobile && <SearchMob />}
              </button>
            </Fragment>
          )}
          <Link to="/cart" className={cx(s._navItem, s._navItem_cart)}>
            {isTablet && <Cart />}
            {isMobile && <CartMob />}
            {cartPositionsCount > 0 && (
              <div className={s._cartCount}>{cartPositionsCount}</div>
            )}
          </Link>
          <button className={cx(s._navItem, s._search)} onClick={openBurger}>
            {isTablet && <Burger />}
            {isMobile && <BurgerMob />}
          </button>
        </nav>
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    socialsIsHovered: state.headerSocialsHover.isHovered,
    foodCasinosIsOpen: state.catalogHover.foodCasinosIsOpen,
    classicCasinosIsOpen: state.catalogHover.classicCasinosIsOpen,
    // catalogIsHovered: state.catalogHover.isHovered,
    searchBarIsOpen: state.tabletSearchBar.searchBarIsOpen,
    headerColor: state.headerColor.color,
    cartPositionsCount: state.cart.positionsIds.length,
  }),
  {
    setSocialsHover,
    openFoodCasinos,
    closeFoodCasinos,
    openClassicCasinos,
    closeClassicCasinos,
    openBurger,
    openSearchBar,
  }
)(Header);
