import s from "./index.module.scss";
import cx from "classnames";
import Slider from "react-slick";
import prevArrow from "./src/arrow_prev.svg";
import nextArrow from "./src/arrow_next.svg";
import dot from "./src/dot_active.svg";
import "./slider.scss";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addPosition } from "../../redux/modules/cart";
import { useMemo } from "react";
import { useCallback } from "react";

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

const GameItem = connect(
  (state) => ({
    positions: state.positions.positions,
  }),
  { addPosition }
)(({ positions, addPosition, id, ...props }) => {
  const { isDesktop, isTablet, isMobile } = useMemo(() => props, [props]);

  /* State */

  const [activeInfo, setActiveInfo] = useState("characteristics");

  const characteristicsIsActive = useMemo(
    () => activeInfo === "characteristics",
    [activeInfo]
  );
  const descriptionIsActive = useMemo(
    () => activeInfo === "description",
    [activeInfo]
  );

  const activateCharacteristics = useCallback(
    setActiveInfo.bind(null, "characteristics"),
    []
  );
  const activateDescription = useCallback(
    setActiveInfo.bind(null, "description"),
    []
  );

  const [game] = useMemo(
    () => positions.filter((item) => item.id === id),
    [id, positions]
  );

  return (
    <div className={s._game}>
      <Slider {...sliderParams}>
        {game.images.map((image, index) => (
          <img
            src={image}
            className={s._imageSlide}
            key={index}
            alt="Изображение"
          />
        ))}
      </Slider>
      <div className={s._priceBlock}>
        <div className={s._priceWrapper}>
          {isTablet && <div className={s._priceTitle}>Цена:</div>}
          <div className={s._price}>
            от {game.price.toLocaleString()}
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 700,
              }}
            >
              {" "}
              ₽
            </span>
          </div>
        </div>
        {isTablet && (
          <button
            className={s._addToCart}
            onClick={addPosition.bind(null, id)}
          ></button>
        )}
        {isMobile && (
          <button className={s._addToCart} onClick={addPosition.bind(null, id)}>
            Добавить в корзину
          </button>
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
              {game.characteristics.items.map((title, index) => (
                <li className={s._infoListItem} key={index}>
                  {title}
                </li>
              ))}
            </ul>
          </Fragment>
        )}
        {descriptionIsActive && (
          <Fragment>
            <div className={s._infoTitle}>Описание</div>
            <ul className={s._infoList}>
              {game.description.items.map((title, index) => (
                <li className={s._infoListItem} key={index}>
                  {title}
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </div>
    </div>
  );
});

const KindsOfGames_tablet = ({ positions, ...props }) => {
  const { title, gameType } = useMemo(() => props.data || defaultData, [props.data]);

  const { isDesktop, isTablet, isMobile } = useMemo(() => props, [props]);
  const mediaQueries = useMemo(() => ({ isDesktop, isTablet, isMobile }), [props]);

  const gamesPositions = useMemo(
    () => positions.filter(({ casinoType }) => casinoType === gameType),
    []
  );

  const [activePositionId, setActivePositionId] = useState(
    gamesPositions[0].id
  );

  return (
    <section className={s.kindsOfGames}>
      <div className={s._title}>{title}</div>
      <ul className={s._list}>
        {gamesPositions.map(({ title, id }, index) => {
          const isActive = id === activePositionId;
          return (
            <li
              className={cx(s._listItem, {
                [s._listItem_active]: isActive,
              })}
              onClick={setActivePositionId.bind(null, id)}
              key={index}
            >
              <div className={s._listItemTitle}>{title}</div>
              {isActive && <GameItem id={id} {...mediaQueries} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default connect((state) => ({
  positions: state.positions.positions,
}))(KindsOfGames_tablet);
