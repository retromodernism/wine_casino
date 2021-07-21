import s from "./index.module.scss";
import classnames from "classnames";
import { ReactComponent as Logo } from "./src/logo.svg";
import { ReactComponent as WhatsApp } from "./src/whatsapp.svg";
import { ReactComponent as Telegram } from "./src/tg.svg";
import { ReactComponent as Viber } from "./src/viber.svg";
import GoToCartButton from "../goToCartButton";
import HeaderSearchBar from "../headerSearchBar";
import { connect } from "react-redux";
import { setSocialsHover } from "../../redux/modules/headerSocialsHover";
import { setCatalogHover } from "../../redux/modules/catalogHover";
import CatalogHoverPanel from "../catalogHoverPanel";
import { Link } from "react-router-dom";

const phone = {
  tel: "74950857604",
  title: "+7 (495) 085-76-04",
};

const Header = ({
  socialsIsHovered,
  catalogIsHovered,
  setSocialsHover,
  setCatalogHover,
}) => {
  return (
    <div className={s.header} name="header">
      <Link to="/" className={s._logoWrapper}>
        <Logo className={s._logo} />
      </Link>
      <nav className={s._nav}>
        <ul className={s._navList}>
          <li
            className={classnames(s._navListItem, s._navListItem_arrow, {
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
              ? classnames(s._phoneArrow, s._phoneArrow_hover)
              : classnames(s._phoneArrow)
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
    </div>
  );
};

export default connect(
  (state) => ({
    socialsIsHovered: state.headerSocialsHover.isHovered,
    catalogIsHovered: state.catalogHover.isHovered,
  }),
  { setSocialsHover, setCatalogHover }
)(Header);
