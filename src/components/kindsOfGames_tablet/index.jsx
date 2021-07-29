import s from "./index.module.scss";
import cx from "classnames";
import image from "./src/image.png";
import Slider from "react-slick";
import prevArrow from "./src/arrow_prev.svg";
import nextArrow from "./src/arrow_next.svg";
import dot from "./src/dot_active.svg";
import "./slider.scss";
import { useMediaQuery } from "react-responsive";
import { Fragment, useState } from "react";

/* Slider Params */

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={cx(className, s._arrow, s._arrow_prev)}
      onClick={onClick}
      style={{
        ...style,
        background: `url(${prevArrow}) 100% 100% / contain no-repeat`,
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
        background: `url(${nextArrow}) 100% 100% / contain no-repeat`,
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

/* Components */

const GameItem = () => {
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
    <div className={s._game}>
      <Slider {...sliderParams}>
        <img src={image} className={s._imageSlide} key={0} alt="Изображение" />
        <img src={image} className={s._imageSlide} key={1} alt="Изображение" />
        <img src={image} className={s._imageSlide} key={2} alt="Изображение" />
      </Slider>
      <div className={s._priceBlock}>
        <div className={s._priceWrapper}>
          {isTablet && <div className={s._priceTitle}>Цена:</div>}
          <div className={s._price}>от 18 000 ₽</div>
        </div>
        {isTablet && <button className={s._addToCart}></button>}
        {isMobile && (
          <button className={s._addToCart}>Добавить в корзину</button>
        )}
      </div>
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
    </div>
  );
};

const KindsOfGames_tablet = (props) => {
  return (
    <section className={s.kindsOfGames}>
      <div className={s._title}>Разновидности рулеток</div>
      <ul className={s._list}>
        <li className={cx(s._listItem, s._listItem_active)}>
          <div className={s._listItemTitle}>Классическая</div>
          <GameItem />
        </li>
        <li className={s._listItem}>
          <div className={s._listItemTitle}>Французская</div>
        </li>
        <li className={s._listItem}>
          <div className={s._listItemTitle}>Гэмбл</div>
        </li>
        <li className={s._listItem}>
          <div className={s._listItemTitle}>Любительская</div>
        </li>
        <li className={s._listItem}>
          <div className={s._listItemTitle}>Скандинавская</div>
        </li>
        <li className={s._listItem}>
          <div className={s._listItemTitle}>VIP-рулетка</div>
        </li>
      </ul>
    </section>
  );
};

export default KindsOfGames_tablet;
