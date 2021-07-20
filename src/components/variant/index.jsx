import s from "./index.module.scss";
import cx from "classnames";
import { ReactComponent as Minus } from "./src/minus.svg";
import { ReactComponent as Plus } from "./src/plus.svg";
import { ReactComponent as MinusPopular } from "./src/minus_popular.svg";
import { ReactComponent as PlusPopular } from "./src/plus_popular.svg";
import { addPosition } from "../../redux/modules/cart";
import { changePositionCount } from "../../redux/modules/positions";
import { connect } from "react-redux";

const Variant = ({
  image,
  title,
  description,
  isPopular = false,
  options = [],
  price,
  count,
  id,
  addPosition,
  changePositionCount,
}) => {
  const addToCart = addPosition.bind(null, id);
  const incrementCount = changePositionCount.bind(null, count.value + 1, id);
  const decrementCount = changePositionCount.bind(null, count.value - 1, id);

  return (
    <div className={cx(s._variant, { [s._variant_popular]: isPopular })}>
      <div
        className={s._image}
        style={{
          background: `url(${image.normal}) 100% 100% no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      {isPopular && <div className={s._popularLabel}>Популярный выбор</div>}
      <div className={s._title}>{title}</div>
      <div className={s._description}>{description}</div>
      <ul className={s._options}>
        {options.map((text, index) => (
          <li className={s._option} key={index}>
            {text}
          </li>
        ))}
      </ul>
      <div className={s._footer}>
        <div className={s._footerTitle}>Цена:</div>
        <div className={s._price}>от {price.toLocaleString()} ₽</div>
        <div className={s._minusIcon} onClick={decrementCount}>
          {isPopular ? <MinusPopular /> : <Minus />}
        </div>
        <div className={s._count}>{count.value}</div>
        <div
          className={s._plusIcon}
          onClick={() => {
            addToCart();
            incrementCount();
          }}
        >
          {isPopular ? <PlusPopular /> : <Plus />}
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addPosition, changePositionCount })(Variant);
