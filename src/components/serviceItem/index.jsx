import s from "./index.module.scss";

const ServiceItem = ({ image, title, description, price }) => {
  return (
    <div className={s.serviceItem}>
      <div
        className={s._image}
        style={{ background: `url(${image}) 100% 100% no-repeat` }}
      ></div>
      <div className={s._info}>
        <div className={s._title}>{title}</div>
        <div className={s._description}>{description}</div>
        <div className={s._priceWrapper}>
          <div className={s._priceTitle}>Цена:</div>
          <div className={s._price}>{price.toLocaleString()} ₽</div>
        </div>
        <div className={s._plus}></div>
      </div>
    </div>
  );
};

export default ServiceItem;
