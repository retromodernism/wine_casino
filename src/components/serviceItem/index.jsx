import s from "./index.module.scss";
import { connect } from "react-redux";
import { addPosition } from "../../redux/modules/cart";
import { useMediaQuery } from "react-responsive";

const ServiceItem = ({
  image,
  title,
  description,
  price,
  id,
  color,
  addPosition,
}) => {
  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* Redux State */

  const addToCart = addPosition.bind(null, id);

  return (
    <div
      className={s.serviceItem}
      style={{ boxShadow: `inset 0 0 0 ${isDesktop ? 2 : 4}px ${color}` }}
    >
      <div
        className={s._image}
        style={{
          background: isMobile
            ? `url(${image.normal}) 100% 100% / contain no-repeat`
            : `url(${image.normal}) 100% 100% no-repeat`,
        }}
      ></div>
      <div className={s._info} style={{ background: color }}>
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
