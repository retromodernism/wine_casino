import s from "./index.module.scss";
import classnames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const GoToCartButton = ({ cartPositions }) => {
  const positionsInCart = cartPositions.length;

  const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  const suffix = declOfNum(positionsInCart, ["позиция", "позиции", "позиций"]);

  const [isHover, setHover] = useState(false);

  return (
    <Link
      className={classnames(s.goToCartButton, {
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
}))(GoToCartButton);
