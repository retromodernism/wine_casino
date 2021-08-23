import s from "./index.module.scss";
import { connect } from "react-redux";
import { addPosition, removePosition } from "../../redux/modules/cart";
import { changePositionCount } from "../../redux/modules/positions";
import InputMask from "react-input-mask";
import { useMemo } from "react";
import { useCallback } from "react";

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
  removePosition,
  changePositionCount,
  ...props
}) => {
  const { isDesktop, isTablet, isMobile } = useMemo(() => props, [props]);

  /* Redux State */

  const addToCart = useCallback(addPosition.bind(null, id), []);

  const positionIsInCart = useMemo(
    () => cartPositionsIds.includes(id),
    [cartPositionsIds]
  );

  const incrementCount = useCallback(
    changePositionCount.bind(null, count.value + 1, id),
    [count.value]
  );
  const decrementCount = useCallback(
    changePositionCount.bind(null, count.value - 1, id),
    [count.value]
  );

  const handleMinusClick = useCallback(() => {
    if (count.value === 1) removePosition(id);
    decrementCount();
  }, [decrementCount, count.value]);

  const handlePlusClick = useCallback(() => {
    if (positionIsInCart) incrementCount();
    else addToCart();
  }, [incrementCount, positionIsInCart]);

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
        {/* {positionIsInCart ? ( */}
        <div className={s._countSettings}>
          {positionIsInCart && (
            <>
              <div className={s._minusIconWrapper} onClick={handleMinusClick}>
                <div
                  className={s._minusIcon}
                  style={{ background: "#ffffff" }}
                />
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
            </>
          )}
          <div className={s._plusIconWrapper} onClick={handlePlusClick}>
            <div className={s._plusIcon} style={{ background: "#ffffff" }} />
          </div>
        </div>
        {/* ) : (
          <div className={s._plus} onClick={addToCart}></div>
        )} */}
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    cartPositionsIds: state.cart.positionsIds,
  }),
  { addPosition, changePositionCount, removePosition }
)(ServiceItem);
