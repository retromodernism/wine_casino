import { connect } from "react-redux";
import Popup from "../popup";
import s from "./index.module.scss";
import cx from "classnames";
import { ReactComponent as XIcon } from "./src/xIcon.svg";
import { closeBurger } from "../../redux/modules/burger";
import { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = ({ casinos, closeBurger, ...props }) => {
  const foodCasinos = casinos
    .filter(({ type }) => type === "foodCasino")
    .map(({ title, url }) => ({ title, url }));

  const classicCasinos = casinos
    .filter(({ type }) => type === "classicCasino")
    .map(({ title, url }) => ({ title, url }));

  const [foodCasinosIsExpanded, setFoodCasinosIsExpanded] = useState(true);
  const [classicCasinosIsExpanded, setClassicCasinosIsExpanded] =
    useState(false);

  return (
    <Popup>
      <div className={s.burgerPopup}>
        <button className={s._closeButton} onClick={closeBurger}>
          <XIcon />
        </button>
        <ul className={s._content}>
          <li
            className={cx(s._item, s._item_expanded, {
              [s._item_collapsed]: foodCasinosIsExpanded,
            })}
            onClick={() => {
              if (classicCasinosIsExpanded) {
                setClassicCasinosIsExpanded(false);
                setFoodCasinosIsExpanded(true);
              } else {
                setFoodCasinosIsExpanded(!foodCasinosIsExpanded);
              }
            }}
          >
            <p>Кулинарное казино</p>
            {foodCasinosIsExpanded && (
              <div className={s._itemCasinos}>
                {foodCasinos.map(({ title, url }, index) => (
                  <Link
                    to={url}
                    className={s._casino}
                    onClick={closeBurger}
                    key={index}
                  >
                    {title.split(" ")[0]}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li
            className={cx(s._item, s._item_expanded, {
              [s._item_collapsed]: classicCasinosIsExpanded,
            })}
            onClick={() => {
              if (foodCasinosIsExpanded) {
                setFoodCasinosIsExpanded(false);
                setClassicCasinosIsExpanded(true);
              } else {
                setClassicCasinosIsExpanded(!classicCasinosIsExpanded);
              }
            }}
          >
            <p>Классическое казино</p>
            {classicCasinosIsExpanded && (
              <div className={s._itemCasinos}>
                {classicCasinos.map(({ title, url }, index) => (
                  <Link
                    to={url}
                    className={s._casino}
                    onClick={closeBurger}
                    key={index}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            )}
          </li>
          {/* <li className={s._item}>
            <p>Наши программы</p>
          </li> */}
          <li className={s._item}>
            <Link to="/contacts" onClick={closeBurger}>
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </Popup>
  );
};

export default connect(
  (state) => ({
    casinos: state.casinos.casinos,
  }),
  { closeBurger }
)(BurgerMenu);
