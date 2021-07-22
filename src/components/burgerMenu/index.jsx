import { connect } from "react-redux";
import Popup from "../popup";
import s from "./index.module.scss";
import cx from "classnames";
import { ReactComponent as XIcon } from "./src/xIcon.svg";
import { closeBurger } from "../../redux/modules/burger";
import { useState } from "react";

const BurgerMenu = ({ closeBurger, ...props }) => {
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
            className={cx(s._item, s._item_expanded)}
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
                <a href="/" className={s._casino}>
                  Безалкогольное
                </a>
                <a href="/" className={s._casino}>
                  Винное
                </a>
                <a href="/" className={s._casino}>
                  Шампанское
                </a>
                <a href="/" className={s._casino}>
                  Виски
                </a>
                <a href="/" className={s._casino}>
                  Настойки
                </a>
                <a href="/" className={s._casino}>
                  Чайное
                </a>
                <a href="/" className={s._casino}>
                  Кофейное
                </a>
                <a href="/" className={s._casino}>
                  Молекулярное
                </a>
                <a href="/" className={s._casino}>
                  Мясное
                </a>
                <a href="/" className={s._casino}>
                  Сырное
                </a>
                <a href="/" className={s._casino}>
                  Сало
                </a>
                <a href="/" className={s._casino}>
                  Хлебное
                </a>
                <a href="/" className={s._casino}>
                  Чили
                </a>
                <a href="/" className={s._casino}>
                  Шоколадное
                </a>
                <a href="/" className={s._casino}>
                  Медовое
                </a>
                <a href="/" className={s._casino}>
                  Пивное
                </a>
              </div>
            )}
          </li>
          <li
            className={cx(s._item, s._item_expanded)}
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
                <a href="/" className={s._casino}>
                  Рулетка
                </a>
                <a href="/" className={s._casino}>
                  Покер
                </a>
                <a href="/" className={s._casino}>
                  Блэк Джэк
                </a>
                <a href="/" className={s._casino}>
                  Аттракционы
                </a>
                <a href="/" className={s._casino}>
                  Колесо фортуны
                </a>
                <a href="/" className={s._casino}>
                  Бильярд
                </a>
                <a href="/" className={s._casino}>
                  Онлайн казино
                </a>
                <a href="/" className={s._casino}>
                  Игровые автоматы
                </a>
                <a href="/" className={s._casino}>
                  Крэпс
                </a>
              </div>
            )}
          </li>
          <li className={s._item}>
            <p>Наши программы</p>
          </li>
          <li className={s._item}>
            <p>Контакты</p>
          </li>
        </ul>
      </div>
    </Popup>
  );
};

export default connect(null, { closeBurger })(BurgerMenu);
