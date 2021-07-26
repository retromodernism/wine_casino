import s from "./index.module.scss";
import cx from "classnames";
import InputMask from "react-input-mask";
import chair from "./src/chair.png";
import leatherChair from "./src/leatherChair.png";
import wineCasinoImage from "./src/wineCasinoImage.png";
import whiskeyCasinoImage from "./src/whiskeyCasinoImage.png";
import chips from "./src/chips.png";
import { ReactComponent as XIcon } from "./src/xIcon.svg";
import { ReactComponent as Minus } from "./src/minus.svg";
import { ReactComponent as Plus } from "./src/plus.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openCartSuccessPopup } from "../../redux/modules/popup";
import { removePosition, resetCart } from "../../redux/modules/cart";
import { changePositionCount } from "../../redux/modules/positions";
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import CartOrder from "../cartOrder";

const Cart = ({
  positions,
  cartPositionsIds,
  openCartSuccessPopup,
  removePosition,
  resetCart,
  changePositionCount,
  ...props
}) => {
  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  // "picking positions" / "confirmation form processing"
  const [cartStatus, setCartStatus] = useState("picking positions");

  // Input state
  const [wrongNameInput, setWrongNameInput] = useState(false);
  const [wrongPhoneInput, setWrongPhoneInput] = useState(false);

  // Input state
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");

  const validateName = () => formName.length > 3;
  const reg =
    /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
  const validatePhone = () => reg.test(formPhone);

  const handleNameInputChange = (e) => {
    setFormName(e.target.value);
  };

  const handlePhoneInputChange = (e) => {
    setFormPhone(e.target.value);
  };

  const handleFormSubmit = () => {
    const nameInputIsCorrect = validateName();
    const phoneInputIsCorrect = validatePhone();

    const validationPassed = nameInputIsCorrect && phoneInputIsCorrect;

    if (!nameInputIsCorrect) {
      setWrongNameInput(true);
    } else {
      setWrongNameInput(false);
    }

    if (!phoneInputIsCorrect) {
      setWrongPhoneInput(true);
    } else {
      setWrongPhoneInput(false);
    }

    if (validationPassed) {
      // console.log(formName, formPhone);
      openCartSuccessPopup();
    }
  };

  // Working with state

  const cartPositions = positions.filter(({ id }) =>
    cartPositionsIds.includes(id)
  );

  let finalPrice = 0;
  cartPositions.forEach(
    ({ price, count }) => (finalPrice += price * count.value)
  );

  const getPositionById = (positionId) => {
    return positions.filter(({ id }) => positionId === id)[0];
  };

  const cartPositionsCategories = {};

  cartPositionsIds.forEach((positionId) => {
    const position = getPositionById(positionId);
    const category = position.type;

    if (cartPositionsCategories.hasOwnProperty(category)) {
      cartPositionsCategories[category].push(position);
    } else {
      cartPositionsCategories[category] = [position];
    }
  });

  const cartPositionsCategoriesArray = [];
  const categorySinonyms = {
    casino: "Вид казино",
    equipment: "Оборудование",
    service: "Услуги",
  };

  for (const category in cartPositionsCategories) {
    cartPositionsCategoriesArray.push({
      category: categorySinonyms[category],
      positions: cartPositionsCategories[category],
    });
  }

  return (
    <section className={s.cart}>
      <div className={s._content}>
        <div className={s._title}>Корзина</div>
        <div className={s._items}>
          {(isTablet || isMobile) && (
            <button className={s._clearCart} onClick={resetCart}></button>
          )}
          {cartPositionsCategoriesArray.map(
            ({ category, positions }, index) => (
              <Fragment key={index}>
                <div className={s._itemsTitle}>{category}</div>
                {positions.map(
                  (
                    { image, cartTitle, cartItemDescription, price, id, count },
                    index
                  ) => (
                    <div className={s._item} key={index}>
                      <div className={s._itemImgWrapper}>
                        <img className={s._itemImg} src={image.cart} alt="" />
                      </div>
                      <div className={s._itemInfo}>
                        <button
                          className={s._deleteItemFromCart}
                          onClick={removePosition.bind(null, id)}
                        >
                          <XIcon />
                        </button>
                        <div className={s._itemHeader}>
                          <div className={s._itemTitle}>{cartTitle}</div>
                          <div className={s._itemOption}>
                            {cartItemDescription}
                          </div>
                        </div>
                        <div className={s._itemFooter}>
                          <div className={s._itemPrice}>
                            {(price * count.value).toLocaleString()} ₽
                          </div>
                          <div className={s._itemCountWrapper}>
                            <button
                              className={s._itemCountIconWrapper}
                              onClick={changePositionCount.bind(
                                null,
                                count.value - 1,
                                id
                              )}
                            >
                              <Minus
                                className={cx(
                                  s._itemCountIcon,
                                  s._itemCountIcon_minus
                                )}
                              />
                            </button>
                            <InputMask
                              mask="999"
                              maskChar=""
                              className={s._itemCount}
                              value={count.value}
                              type="text"
                              onChange={(e) => {
                                changePositionCount(+e.target.value, id);
                                // console.log(e.target.value)
                              }}
                            />
                            {/* <div className={s._itemCount}>{count.value}</div> */}
                            <button
                              className={s._itemCountIconWrapper}
                              onClick={changePositionCount.bind(
                                null,
                                count.value + 1,
                                id
                              )}
                            >
                              <Plus
                                className={cx(
                                  s._itemCountIcon,
                                  s._itemCountIcon_plus
                                )}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </Fragment>
            )
          )}
        </div>

        {isDesktop && <CartOrder />}
      </div>
    </section>
  );
};

export default connect(
  (state) => ({
    positions: state.positions.positions,
    cartPositionsIds: state.cart.positionsIds,
  }),
  { openCartSuccessPopup, removePosition, resetCart, changePositionCount }
)(Cart);
