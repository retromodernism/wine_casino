import s from "./index.module.scss";
import cx from "classnames";
import { ReactComponent as Logo } from "./src/logo.svg";
import { ReactComponent as LogoMobile } from "./src/logo_mobile.svg";
import { ReactComponent as WhatsApp } from "./src/whatsapp.svg";
import { ReactComponent as Telegram } from "./src/tg.svg";
import { ReactComponent as Viber } from "./src/viber.svg";
import { ReactComponent as Phone } from "./src/phone.svg";
import { ReactComponent as Search } from "./src/search.svg";
import { ReactComponent as Cart } from "./src/cart.svg";
import { ReactComponent as Burger } from "./src/burger.svg";
import GoToCartButton from "../goToCartButton";
import HeaderSearchBar from "../headerSearchBar";
import { connect } from "react-redux";
import { setSocialsHover } from "../../redux/modules/headerSocialsHover";
import { setCatalogHover } from "../../redux/modules/catalogHover";
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
  catalogIsHovered,
  setSocialsHover,
  setCatalogHover,
  openBurger,
  openSearchBar,
}) => {
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <div className={s.header} name="header">
      {!searchBarIsOpen && (
        <Link to="/" className={s._logoWrapper}>
          {isDesktop && <Logo className={s._logo} />}
          {isTablet && <LogoMobile className={s._logo} />}
        </Link>
      )}
      {searchBarIsOpen && <HeaderSearchBar />}
      {isDesktop && (
        <Fragment>
          <nav className={s._nav}>
            <ul className={s._navList}>
              <li
                className={cx(s._navListItem, s._navListItem_arrow, {
                  [s._navListArrow_hover]: catalogIsHovered,
                })}
                onMouseEnter={setCatalogHover.bind(null, true)}
                onMouseLeave={setCatalogHover.bind(null, false)}
              >
                <div className={s._catalog}>Каталог казино</div>
                <div className={s._catalogArrow}></div>
                {catalogIsHovered && <CatalogHoverPanel />}
              </li>
              <li className={s._navListItem}>
                <a href="/" className={s._catalog}>
                  Наши программы
                </a>
              </li>
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
      {isTablet && (
        <nav className={s._nav}>
          {!searchBarIsOpen && (
            <Fragment>
              <a href={`tel:+${phone.tel}`} className={s._navItem}>
                <Phone />
              </a>
              <button
                className={cx(s._navItem, s._search)}
                onClick={openSearchBar}
              >
                <Search />
              </button>
            </Fragment>
          )}
          <Link to="/cart" className={s._navItem}>
            <Cart />
          </Link>
          <button className={cx(s._navItem, s._search)} onClick={openBurger}>
            <Burger />
          </button>
        </nav>
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    socialsIsHovered: state.headerSocialsHover.isHovered,
    catalogIsHovered: state.catalogHover.isHovered,
    searchBarIsOpen: state.tabletSearchBar.searchBarIsOpen,
  }),
  { setSocialsHover, setCatalogHover, openBurger, openSearchBar }
)(Header);
