import s from "./index.module.scss";
import { connect } from "react-redux";
import { addPosition, removePosition } from "../../redux/modules/cart";
import { changePositionCount } from "../../redux/modules/positions";
import InputMask from "react-input-mask";
import { useMemo } from "react";
import { useCallback } from "react";
import plus from "./src/plus.svg";

const EquipmentItem = ({
  cartPositionsIds,
  image,
  title,
  price,
  count,
  id,
  addPosition,
  removePosition,
  changePositionCount,
  color,
  ...props
}) => {
  const { isDesktop, isTablet, isMobile } = useMemo(() => props, [props]);

  /* State */

  const addToCart = useCallback(addPosition.bind(null, id), [id]);

  const positionIsInCart = useMemo(
    () => cartPositionsIds.includes(id),
    [cartPositionsIds, id]
  );

  const incrementCount = useCallback(
    changePositionCount.bind(null, count.value + 1, id),
    [id, count]
  );
  const decrementCount = useCallback(
    changePositionCount.bind(null, count.value - 1, id),
    [id, count]
  );

  const handlePlusClick = useCallback(() => {
    if (positionIsInCart) incrementCount();
    else addToCart();
  }, [positionIsInCart, incrementCount]);

  const handleMinusClick = useCallback(() => {
    if (count.value === 1) removePosition(id);
    decrementCount();
  }, [count.value, decrementCount]);

  return (
    <div
      className={s.equipmentItem}
      style={{ boxShadow: `0 0 0 2px ${color}` }}
    >
      <div
        className={s._image}
        style={{
          background: `url(${image.normal}) 100% 100% no-repeat`,
          backgroundSize: isMobile ? "contain" : "",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className={s._footer} style={{ background: color }}>
        <div className={s._title}>{title}</div>
        <p className={s._titlePrice}>Цена:</p>
        <p className={s._price}>
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
        </p>
        <p className={s._count}>{count.title}</p>

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
            <div
              className={s._plusIcon}
              style={{
                background: "#ffffff",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    cartPositionsIds: state.cart.positionsIds,
  }),
  { addPosition, changePositionCount, removePosition }
)(EquipmentItem);
