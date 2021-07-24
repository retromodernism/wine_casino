import s from "./index.module.scss";
import { connect } from "react-redux";
import { addPosition } from "../../redux/modules/cart";
import { useMediaQuery } from "react-responsive";

const EquipmentItem = ({
  image,
  title,
  price,
  count = "за шт",
  id,
  addPosition,
}) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* State */

  const addToCart = addPosition.bind(null, id);

  return (
    <div className={s.equipmentItem}>
      <div
        className={s._image}
        style={{
          background: `url(${image.normal}) 100% 100% no-repeat`,
          backgroundSize: isMobile ? "contain" : "",
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
