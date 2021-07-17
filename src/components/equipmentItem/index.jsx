import s from "./index.module.scss";

const EquipmentItem = ({ image, title, price, count = "за шт" }) => {
  return (
    <div className={s.equipmentItem}>
      <div
        className={s._image}
        style={{
          background: `url(${image}) 100% 100% no-repeat`,
        }}
      ></div>
      <div className={s._footer}>
        <div className={s._title}>{title}</div>
        <p className={s._titlePrice}>Цена:</p>
        <p className={s._price}>{price.toLocaleString()} ₽</p>
        <p className={s._count}>{count}</p>
        <div className={s._plus}></div>
      </div>
    </div>
  );
};

export default EquipmentItem;
