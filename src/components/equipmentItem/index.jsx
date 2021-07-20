import s from "./index.module.scss";
import { connect } from "react-redux";
import { addPosition } from "../../redux/modules/cart";

const EquipmentItem = ({
  image,
  title,
  price,
  count = "за шт",
  id,
  addPosition,
}) => {
  const addToCart = addPosition.bind(null, id);

  return (
    <div className={s.equipmentItem}>
      <div
        className={s._image}
        style={{
          background: `url(${image.normal}) 100% 100% no-repeat`,
        }}
      ></div>
      <div className={s._footer}>
        <div className={s._title}>{title}</div>
        <p className={s._titlePrice}>Цена:</p>
        <p className={s._price}>{price.toLocaleString()} ₽</p>
        <p className={s._count}>{count.title}</p>
        <div className={s._plus} onClick={addToCart}></div>
      </div>
    </div>
  );
};

export default connect(null, { addPosition })(EquipmentItem);
