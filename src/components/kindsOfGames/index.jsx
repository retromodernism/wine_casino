import s from "./index.module.scss";
import cx from "classnames";
import image from "./src/image.png";
import { useMediaQuery } from "react-responsive";
import { Fragment, useState } from "react";
import Slider from "react-slick";
import prevArrow from "./src/arrow_prev.svg";
import nextArrow from "./src/arrow_next.svg";
import dot from "./src/dot_active.svg";
import "./slider.scss";

/* Slider Params */

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={cx(className, s._arrow, s._arrow_prev)}
      onClick={onClick}
      style={{
        ...style,
        background: `url(${prevArrow}) 100% 100% no-repeat`,
        outline: "unset",
        color: "unset",
      }}
    />
  );
};

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={cx(className, s._arrow, s._arrow_next)}
      onClick={onClick}
      style={{
        ...style,
        background: `url(${nextArrow}) 100% 100% no-repeat`,
        outline: "unset",
        color: "unset",
      }}
    />
  );
};

const sliderParams = {
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  className: s._slider,
  customPaging: (i) => (
    <a>
      <img src={`${dot}`} className={s._paginationDot} />
    </a>
  ),
  dots: true,
};

const AddToCartButton = () => {
  const [isHover, setHover] = useState(false);

  return (
    <button
      className={cx(s._itemAddToCart, { [s._itemAddToCart_hover]: isHover })}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    >
      Добавить в корзину
    </button>
  );
};

const KindItem = () => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* State */

  const [activeInfo, setActiveInfo] = useState("characteristics");

  const characteristicsIsActive = activeInfo === "characteristics";
  const descriptionIsActive = activeInfo === "description";

  const activateCharacteristics = setActiveInfo.bind(null, "characteristics");
  const activateDescription = setActiveInfo.bind(null, "description");

  return (
    <div className={s._kindItem}>
      <div className={s._sidebar}>
        <button className={cx(s._sidebarItem, s._sidebarItem_active)}>
          Классическая
        </button>
        <button className={s._sidebarItem}>Французская</button>
        <button className={s._sidebarItem}>Гэмбл</button>
        <button className={s._sidebarItem}>Любительская</button>
        <button className={s._sidebarItem}>Скандинавская</button>
        <button className={s._sidebarItem}>VIP-рулетка</button>
      </div>
      <div className={s._item}>
        <div className={s._itemLeft}>
          <div className={s._imageWrapper}>
            <Slider {...sliderParams}>
              <img
                src={image}
                className={s._imageSlide}
                key={0}
                alt="Изображение"
              />
              <img
                src={image}
                className={s._imageSlide}
                key={1}
                alt="Изображение"
              />
              <img
                src={image}
                className={s._imageSlide}
                key={2}
                alt="Изображение"
              />
            </Slider>
          </div>
          <div className={s._bottomInfo}>
            {isTablet && <div className={s._priceTitle}>Цена:</div>}
            <div className={s._price}>18 000 ₽</div>
            <div className={s._time}>на 6 часов</div>
            <div className={s._peopleCount}>на 6 человек</div>
          </div>
        </div>
        <div className={s._itemRight}>
          <div className={s._info}>
            <div className={s._buttons}>
              <button
                className={cx(s._infoButton, {
                  [s._infoButton_active]: characteristicsIsActive,
                })}
                onClick={activateCharacteristics}
              >
                Тех. характеристики
              </button>
              <button
                className={cx(s._infoButton, {
                  [s._infoButton_active]: descriptionIsActive,
                })}
                onClick={activateDescription}
              >
                Описание
              </button>
            </div>
            {characteristicsIsActive && (
              <Fragment>
                <div className={s._infoTitle}>Общие требования</div>
                <ul className={s._infoList}>
                  <li className={s._infoListItem}>В стоимость включено:</li>
                  <li className={s._infoListItem}>Игровой стол - 1</li>
                  <li className={s._infoListItem}>Колесо - 1 комплект</li>
                  <li className={s._infoListItem}>Фишки - 1 комплект</li>
                  <li className={s._infoListItem}>Крупье - 1 чел.</li>
                </ul>
              </Fragment>
            )}
            {descriptionIsActive && (
              <Fragment>
                <div className={s._infoTitle}>Описание</div>
                <ul className={s._infoList}>
                  <li className={s._infoListItem}>Lorem ipsum</li>
                  <li className={s._infoListItem}>Lorem ipsum</li>
                  <li className={s._infoListItem}>Lorem ipsum</li>
                  <li className={s._infoListItem}>Lorem ipsum</li>
                  <li className={s._infoListItem}>Lorem ipsum</li>
                </ul>
              </Fragment>
            )}
          </div>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

const KindsOfGames = (props) => {
  return (
    <section className={s.kindsOfGames}>
      <div className={s._content}>
        <div className={s._title}>Разновидности покера</div>
        <KindItem />
      </div>
    </section>
  );
};

export default KindsOfGames;
