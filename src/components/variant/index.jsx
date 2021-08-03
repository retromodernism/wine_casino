import s from "./index.module.scss";
import cx from "classnames";
import { ReactComponent as Minus } from "./src/minus.svg";
import { ReactComponent as Plus } from "./src/plus.svg";
import { ReactComponent as MinusPopular } from "./src/minus_popular.svg";
import { ReactComponent as PlusPopular } from "./src/plus_popular.svg";
import { addPosition } from "../../redux/modules/cart";
import { changePositionCount } from "../../redux/modules/positions";
import { connect } from "react-redux";
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import InputMask from "react-input-mask";

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
  changePositionCount,
}) => {
  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  const [isExpanded, setExpanded] = useState(false);
  const toggleVariant = () => setExpanded(!isExpanded);

  const addToCart = addPosition.bind(null, id);
  const incrementCount = changePositionCount.bind(null, count.value + 1, id);
  const decrementCount = changePositionCount.bind(null, count.value - 1, id);

  return (
    <div
      className={cx(s._variant, {
        [s._variant_popular]: isPopular,
        [s._variant_expanded]: isExpanded,
      })}
      onClick={() => {
        // Если не раскрыт и разрешение "таблет" или "мобайл"
        // Раскрыть при нажатии на элемент
        if (!isExpanded && (isTablet || isMobile)) toggleVariant();
      }}
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
          от {price.toLocaleString()} ₽
        </div>
        {isDesktop && (
          <Fragment>
            <div
              className={s._minusIconWrapper}
              onClick={() => {
                decrementCount();
              }}
            >
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
              onChange={(e) => {
                addToCart();
                changePositionCount(+e.target.value, id);
              }}
              style={{ color: isPopular ? "#ffffff" : color.item }}
            />
            <div
              className={s._plusIconWrapper}
              onClick={() => {
                addToCart();
                incrementCount();
              }}
            >
              <div
                className={s._plusIcon}
                style={{ background: isPopular ? "#ffffff" : color.item }}
              />
            </div>
          </Fragment>
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

export default connect(null, { addPosition, changePositionCount })(Variant);
