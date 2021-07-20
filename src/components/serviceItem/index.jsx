import s from "./index.module.scss";
import { connect } from "react-redux";
import { addPosition } from "../../redux/modules/cart";

const ServiceItem = ({ image, title, description, price, id, addPosition }) => {
  const addToCart = addPosition.bind(null, id);

  return (
    <div className={s.serviceItem}>
      <div
        className={s._image}
        style={{ background: `url(${image.normal}) 100% 100% no-repeat` }}
      ></div>
      <div className={s._info}>
        <div className={s._title}>{title}</div>
        <div className={s._description}>{description}</div>
        <div className={s._priceWrapper}>
          <div className={s._priceTitle}>Цена:</div>
          <div className={s._price}>{price.toLocaleString()} ₽</div>
        </div>
        <div className={s._plus} onClick={addToCart}></div>
      </div>
    </div>
  );
};

export default connect(null, { addPosition })(ServiceItem);
