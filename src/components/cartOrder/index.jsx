import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { openCartSuccessPopup } from "../../redux/modules/popup";
import { resetCart } from "../../redux/modules/cart";
import { useMediaQuery } from "react-responsive";
import InputMask from "react-input-mask";
import s from "./index.module.scss";
import cx from "classnames";

const CartOrder = ({
  positions,
  cartPositionsIds,
  openCartSuccessPopup,
  resetCart,
}) => {
  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  // "picking positions" / "confirmation form processing" / "success"
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
      if (isDesktop) {
        openCartSuccessPopup();
      } else if (isTablet) {
        setCartStatus("success");
      } else if (isMobile) {
        openCartSuccessPopup();
      }
    }
  };

  /* State */

  const cartPositions = positions.filter(({ id }) =>
    cartPositionsIds.includes(id)
  );

  let finalPrice = 0;
  cartPositions.forEach(
    ({ price, count }) => (finalPrice += price * count.value)
  );

  switch (cartStatus) {
    case "picking positions":
      return (
        <div className={s._order}>
          {isDesktop && (
            <div className={s._orderTop}>
              <p className={s._orderTitle}>Ваш заказ</p>
              <button className={s._clearCart} onClick={resetCart}>
                <span className={s._clearCartText}>Очистить корзину</span>
              </button>
            </div>
          )}
          {!isMobile && (
            <div className={s._orderContent}>
              <div className={s._orderItems}>
                {cartPositions.map(
                  ({ cartTitle, count, cartItemDescription }, index) => (
                    <div className={s._orderItem} key={index}>
                      <div className={s._orderItemTitle}>{cartTitle}</div>
                      <div className={s._orderItemDescription}>
                        {cartItemDescription
                          ? cartItemDescription
                          : `${count.value} шт`}
                      </div>
                    </div>
                  )
                )}
                <div className={s._orderPriceWrapper}>
                  <div className={s._orderPriceTitle}>Цена:</div>
                  <div className={s._orderPrice}>
                    {finalPrice.toLocaleString()}
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
                <div className={s._orderCheckoutButtonWrapper}>
                  <button
                    className={s._orderCheckoutButton}
                    onClick={setCartStatus.bind(
                      null,
                      "confirmation form processing"
                    )}
                  >
                    Оформить
                  </button>
                </div>
              </div>
            </div>
          )}
          {isMobile && (
            <Fragment>
              <div className={s._orderTop}>
                <p className={s._orderTitle}>Ваш заказ</p>
              </div>
              <div className={s._orderPriceWrapper}>
                <div className={s._orderPriceTitle}>Итого:</div>
                <div className={s._orderPrice}>
                  {finalPrice.toLocaleString()}
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
              <div className={s._orderCheckoutButtonWrapper}>
                <button
                  className={s._orderCheckoutButton}
                  onClick={setCartStatus.bind(
                    null,
                    "confirmation form processing"
                  )}
                >
                  Оформить
                </button>
              </div>
            </Fragment>
          )}
        </div>
      );
    case "confirmation form processing":
      return (
        <div className={s._confimationForm}>
          {isDesktop && (
            <div className={s._confirmationFormTop}>
              <button
                className={s._clearCart}
                onClick={(e) => {
                  e.preventDefault();
                  alert("Очистить корзину");
                }}
              >
                <span className={s._clearCartText}>Очистить корзину</span>
              </button>
            </div>
          )}
          {isMobile && (
            <div className={s._orderTop}>
              <p className={s._orderTitle}>Ваш заказ</p>
            </div>
          )}

          <div className={s._confimationFormContent}>
            <button
              className={s._confimationFormReturnBack}
              onClick={setCartStatus.bind(null, "picking positions")}
            >
              <span className={s._confimationFormReturnBackText}>
                Вернуться к заказу
              </span>
            </button>
            <div className={s._confirmationFormDescription}>
              Наш менеджер свяжется с вами для уточнения более подробной
              информации по заказу.
            </div>
            <input
              type="text"
              placeholder="Ваше имя*"
              className={cx(s._confirmationFormInput, {
                [s._confirmationFormInput_error]: wrongNameInput,
              })}
              onChange={handleNameInputChange}
            />
            <InputMask
              mask="+7 999 999 99 99"
              maskChar=" "
              className={cx(s._confirmationFormInput, {
                [s._confirmationFormInput_error]: wrongPhoneInput,
              })}
              placeholder="Ваш телефон*"
              onChange={handlePhoneInputChange}
            />
            <div className={s._confirmationFormSubmitWrapper}>
              <button
                className={s._confirmationFormSubmit}
                onClick={handleFormSubmit}
              >
                Оставить заявку
              </button>
              <div className={s._confirmationFormConfid}>
                Нажимая на кнопку, вы даете согласие на{" "}
                <Link to="/confid">
                  <span className={s._confirmationFormConfidAccent}>
                    обработку персональных данных
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    case "success":
      return (
        <div className={s._success}>
          <div className={s._successContent}>
            <div className={s._successTitle}>Заявка отправлена</div>
            <div className={s._successDescription}>
              Среднее время рассмотрения заявки составляет до 5 минут
            </div>
            <div className={s._successIconWrapper}>
              <div className={s._successIcon}></div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default connect(
  (state) => ({
    positions: state.positions.positions,
    cartPositionsIds: state.cart.positionsIds,
  }),
  { openCartSuccessPopup, resetCart }
)(CartOrder);
