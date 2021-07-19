import s from "./index.module.scss";
import classnames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

const GoToCartButton = () => {
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
      <span>Перейти в корзину</span>
      <div className={s._icon}></div>
    </Link>
  );
};

export default GoToCartButton;
