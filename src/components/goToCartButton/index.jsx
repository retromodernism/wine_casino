import s from "./index.module.scss";
import classnames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useMemo } from "react";
import { useCallback } from "react";

const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

const GoToCartButton = ({ cartPositions, headerColor }) => {
  const isDark = useMemo(() => headerColor === "dark", [headerColor]);
  const isLight = useMemo(() => headerColor === "light", [headerColor]);

  const positionsInCart = useMemo(() => cartPositions.length, [cartPositions]);

  const suffix = useCallback(
    declOfNum(positionsInCart, ["позиция", "позиции", "позиций"]),
    [positionsInCart]
  );

  const [isHover, setHover] = useState(false);

  return (
    <Link
      className={classnames(s.goToCartButton, {
        [s.goToCartButton_dark]: isDark,
        [s.goToCartButton_light]: isLight,
        [s.hover]: isHover,
      })}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
      to="/cart"
    >
      {positionsInCart > 0 ? (
        <span>
          В корзине{" "}
          <span className={s._accent}>{`${positionsInCart} ${suffix}`}</span>
        </span>
      ) : (
        <span>Перейти в корзину</span>
      )}

      <div className={s._icon}></div>
    </Link>
  );
};

export default connect((state) => ({
  cartPositions: state.cart.positionsIds,
  headerColor: state.headerColor.color,
}))(GoToCartButton);
