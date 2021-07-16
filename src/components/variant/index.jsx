import s from "./index.module.scss";
import cx from "classnames";
import { ReactComponent as Minus } from "./src/minus.svg";
import { ReactComponent as Plus } from "./src/plus.svg";
import { ReactComponent as MinusPopular } from "./src/minus_popular.svg";
import { ReactComponent as PlusPopular } from "./src/plus_popular.svg";

const Variant = ({
  image,
  title,
  description,
  isPopular = false,
  options = [],
}) => {
  return (
    <div className={cx(s._variant, { [s._variant_popular]: isPopular })}>
      <div
        className={s._image}
        style={{
          background: `url(${image}) 100% 100% no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      {isPopular && <div className={s._popularLabel}>Популярный выбор</div>}
      <div className={s._title}>{title}</div>
      <div className={s._description}>{description}</div>
      <ul className={s._options}>
        {options.map(({ text }, index) => (
          <li className={s._option}>{text}</li>
        ))}
      </ul>
      <div className={s._footer}>
        <div className={s._footerTitle}>Цена:</div>
        <div className={s._price}>от 34 000 ₽</div>
        <div className={s._minusIcon}>
          {isPopular ? <MinusPopular /> : <Minus />}
        </div>
        <div className={s._count}>100</div>
        <div className={s._plusIcon}>
          {isPopular ? <PlusPopular /> : <Plus />}
        </div>
      </div>
    </div>
  );
};

export default Variant;
