import s from "./index.module.scss";
import classnames from "classnames";
import { useState } from "react";

const GoToCartButton = () => {
  const [isHover, setHover] = useState(false);
  return (
    <button
      className={classnames(s.goToCartButton, {
        [s.hover]: isHover,
      })}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    >
      Перейти в корзину<div className={s._icon}></div>
    </button>
  );
};

export default GoToCartButton;
