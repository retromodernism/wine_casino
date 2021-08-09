import s from "./index.module.scss";
import { connect } from "react-redux";
import { addPosition } from "../../redux/modules/cart";
import { useMediaQuery } from "react-responsive";
import { changePositionCount } from "../../redux/modules/positions";
import InputMask from "react-input-mask";

const ServiceItem = ({
  cartPositionsIds,
  image,
  title,
  description,
  price,
  id,
  count,
  color,
  addPosition,
  changePositionCount,
}) => {
  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* Redux State */

  const addToCart = addPosition.bind(null, id);

  const positionIsInCart = cartPositionsIds.includes(id);

  const incrementCount = changePositionCount.bind(null, count.value + 1, id);
  const decrementCount = changePositionCount.bind(null, count.value - 1, id);

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
          <div className={s._price}>
            {price.toLocaleString()}
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 700,
              }}
            >
              {" "}
              ₽
            </span>
          </div>
        </div>
        {/* <div className={s._plus} onClick={addToCart}></div> */}
        {positionIsInCart ? (
          <div className={s._countSettings}>
            <div
              className={s._minusIconWrapper}
              onClick={() => {
                decrementCount();
              }}
            >
              <div className={s._minusIcon} style={{ background: "#ffffff" }} />
            </div>
            <InputMask
              mask="999"
              maskChar=""
              className={s._countSetting}
              value={count.value}
              onChange={(e) => {
                addToCart();
                changePositionCount(+e.target.value, id);
              }}
              style={{ color: "#ffffff" }}
            />
            <div
              className={s._plusIconWrapper}
              onClick={() => {
                incrementCount();
              }}
            >
              <div className={s._plusIcon} style={{ background: "#ffffff" }} />
            </div>
          </div>
        ) : (
          <div className={s._plus} onClick={addToCart}></div>
        )}
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    cartPositionsIds: state.cart.positionsIds,
  }),
  { addPosition, changePositionCount }
)(ServiceItem);
