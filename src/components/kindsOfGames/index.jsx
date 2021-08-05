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
import { connect } from "react-redux";
import { addPosition } from "../../redux/modules/cart";

const defaultData = {
  title: "Разновидности Покера",
  gameType: "poker",
};

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

const AddToCartButton = ({ onClick }) => {
  const [isHover, setHover] = useState(false);

  return (
    <button
      className={cx(s._itemAddToCart, { [s._itemAddToCart_hover]: isHover })}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
      onClick={onClick}
    >
      Добавить в корзину
    </button>
  );
};

const KindItem = connect(
  (state) => ({
    positions: state.positions.positions,
  }),
  { addPosition }
)(({ positions, addPosition, gameType }) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({
    query: "screen and (min-width: 1300px)",
  });
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

  const gamesPositions = positions.filter(({ casinoType }) => casinoType === gameType);

  const [activePositionId, setActivePositionId] = useState(
    gamesPositions[0].id
  );

  const [activeGame] = gamesPositions.filter(
    ({ id }) => id === activePositionId
  );

  return (
    <div className={s._kindItem}>
      <div className={s._sidebar}>
        {gamesPositions.map(({ title, id }, index) => (
          <button
            className={cx(s._sidebarItem, {
              [s._sidebarItem_active]: id === activePositionId,
            })}
            onClick={setActivePositionId.bind(null, id)}
            key={index}
          >
            {title}
          </button>
        ))}
      </div>
      <div className={s._item}>
        <div className={s._itemLeft}>
          <div className={s._imageWrapper}>
            <Slider {...sliderParams}>
              {activeGame.images.map((image, index) => (
                <img
                  src={image}
                  className={s._imageSlide}
                  key={index}
                  alt="Изображение"
                />
              ))}
            </Slider>
          </div>
          <div className={s._bottomInfo}>
            <div className={s._price}>
              {activeGame.price.toLocaleString()} ₽
            </div>
            <div className={s._time}>на {activeGame.time} часов</div>
            <div className={s._peopleCount}>
              на {activeGame.peopleCount} человек
            </div>
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
                <div className={s._infoTitle}>
                  {activeGame.characteristics.title}
                </div>
                <ul className={s._infoList}>
                  {activeGame.characteristics.items.map((title, index) => (
                    <li className={s._infoListItem} key={index}>
                      {title}
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}
            {descriptionIsActive && (
              <Fragment>
                <div className={s._infoTitle}>
                  {activeGame.description.title}
                </div>
                <ul className={s._infoList}>
                  {activeGame.description.items.map((title, index) => (
                    <li className={s._infoListItem} key={index}>
                      {title}
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}
          </div>
          <AddToCartButton onClick={addPosition.bind(null, activePositionId)} />
        </div>
      </div>
    </div>
  );
});

const KindsOfGames = (props) => {
  const { title, gameType } = props.data || defaultData;

  return (
    <section className={s.kindsOfGames}>
      <div className={s._content}>
        <div className={s._title}>{title}</div>
        <KindItem gameType={gameType} />
      </div>
    </section>
  );
};

export default KindsOfGames;
