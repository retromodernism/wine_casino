import s from "./index.module.scss";
import cx from "classnames";
import { addPosition, removePosition } from "../../redux/modules/cart";
import { changePositionCount } from "../../redux/modules/positions";
import { connect } from "react-redux";
import { Fragment } from "react";
import { useState } from "react";

import InputMask from "react-input-mask";
import { useMemo } from "react";
import { useCallback } from "react";

const Variant = ({
  image,
  title,
  description,
  isPopular = false,
  options = [],
  price,
  count,
  id,
  color,
  addPosition,
  removePosition,
  cartPositionsIds,
  changePositionCount,
  ...props
}) => {
  const { isDesktop, isTablet, isMobile } = useMemo(() => props, [props]);

  const [isExpanded, setExpanded] = useState(false);
  const toggleVariant = useCallback(
    () => setExpanded(!isExpanded),
    [isExpanded]
  );

  const addToCart = useCallback(addPosition.bind(null, id), []);

  const incrementCount = useCallback(
    changePositionCount.bind(null, count.value + 1, id),
    [count.value]
  );

  const decrementCount = useCallback(
    changePositionCount.bind(null, count.value - 1, id),
    [count.value]
  );

  const positionIsInCart = useMemo(
    () => cartPositionsIds.includes(id),
    [cartPositionsIds]
  );

  const handleMinusClick = useCallback(() => {
    if (count.value === 1) removePosition(id);
    decrementCount();
  }, [count.value, decrementCount]);

  const handlePlusClick = useCallback(() => {
    if (!positionIsInCart) addToCart();
    else incrementCount();
  }, [incrementCount, positionIsInCart]);

  const handleInputChange = useCallback((e) => {
    addToCart();
    changePositionCount(+e.target.value, id);
  }, []);

  const handleVariantClick = useCallback(() => {
    // Если не раскрыт и разрешение "таблет" или "мобайл"
    // Раскрыть при нажатии на элемент
    if (!isExpanded && (isTablet || isMobile)) toggleVariant();
  }, [isExpanded, isTablet, isMobile]);

  return (
    <div
      className={cx(s._variant, {
        [s._variant_popular]: isPopular,
        [s._variant_expanded]: isExpanded,
      })}
      onClick={handleVariantClick}
      style={{
        color: isPopular ? "#ffffff" : color.item,
        boxShadow: `inset 0 0 0 4px ${color.item}`,
        background: isPopular ? color.item : null,
      }}
    >
      <div
        className={s._image}
        style={{
          background: `url(${image.normal}) 100% 100% no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      {isPopular && !isExpanded && (
        <div className={s._popularLabel} style={{ background: color.popular }}>
          Популярный выбор
        </div>
      )}
      {(isTablet || isMobile) && (
        <button
          className={s._expandButton}
          onClick={toggleVariant}
          style={{ background: isPopular ? "#ffffff" : color.item }}
        />
      )}
      <div
        className={s._title}
        style={{ color: isPopular ? "#ffffff" : color.item }}
      >
        {title}
      </div>
      <div
        className={s._description}
        style={{ color: isPopular ? "#ffffff" : color.item }}
      >
        {description}
      </div>
      <ul className={s._options}>
        {options.map((text, index) => (
          <li
            className={s._option}
            key={index}
            style={{ color: isPopular ? "#ffffff" : color.item }}
          >
            <div
              className={s._optionAfter}
              style={{ background: isPopular ? "#ffffff" : color.item }}
            />
            <span>{text}</span>
          </li>
        ))}
      </ul>
      <div className={s._footer}>
        <div
          className={s._footerTitle}
          style={{ color: isPopular ? "#ffffff" : color.item }}
        >
          Цена:
        </div>
        <div
          className={s._price}
          style={{ color: isPopular ? "#ffffff" : color.item }}
        >
          от {price.toLocaleString()}
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
        {isDesktop && (
          <>
            {positionIsInCart && (
              <>
                <div className={s._minusIconWrapper} onClick={handleMinusClick}>
                  <div
                    className={s._minusIcon}
                    style={{ background: isPopular ? "#ffffff" : color.item }}
                  />
                </div>
                <InputMask
                  mask="999"
                  maskChar=""
                  className={s._count}
                  value={count.value}
                  onChange={handleInputChange}
                  style={{ color: isPopular ? "#ffffff" : color.item }}
                />
              </>
            )}
            <div
              className={s._plusIconWrapper}
              // onClick={handlePlusClick}
              onClick={handlePlusClick}
              style={{gridColumn: positionIsInCart ? "unset": 4}}
            >
              <div
                className={s._plusIcon}
                style={{ background: isPopular ? "#ffffff" : color.item }}
              />
            </div>
          </>
        )}
        {(isTablet || isMobile) && (
          <div className={s._plusIcon}>
            <button
              className={s._plusIcon}
              onClick={addToCart}
              style={{ background: isPopular ? "#ffffff" : color.item }}
            ></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    cartPositionsIds: state.cart.positionsIds,
  }),
  {
    addPosition,
    changePositionCount,
    removePosition,
  }
)(Variant);
