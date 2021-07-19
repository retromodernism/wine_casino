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

const Cart = ({ openCartSuccessPopup, ...props }) => {
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

  return (
    <section className={s.cart}>
      <div className={s._content}>
        <div className={s._title}>Корзина</div>
        <div className={s._items}>
          <div className={s._itemsTitle}>Оборудование </div>

          <div className={s._item}>
            <div className={s._itemImgWrapper}>
              <img className={s._itemImg} src={chair} alt="" />
            </div>
            <div className={s._itemInfo}>
              <button className={s._deleteItemFromCart}>
                <XIcon />
              </button>
              <div className={s._itemHeader}>
                <div className={s._itemTitle}>Стул-классика</div>
                <div className={s._itemOption}></div>
              </div>
              <div className={s._itemFooter}>
                <div className={s._itemPrice}>52 500 ₽</div>
                <div className={s._itemCountWrapper}>
                  <Minus className={s._itemCountIcon} />
                  <div className={s._itemCount}>1</div>
                  <Plus className={s._itemCountIcon} />
                </div>
              </div>
            </div>
          </div>

          <div className={s._item}>
            <div className={s._itemImgWrapper}>
              <img className={s._itemImg} src={leatherChair} alt="" />
            </div>
            <div className={s._itemInfo}>
              <button className={s._deleteItemFromCart}>
                <XIcon />
              </button>
              <div className={s._itemHeader}>
                <div className={s._itemTitle}>Кожаный стул</div>
                <div className={s._itemOption}></div>
              </div>
              <div className={s._itemFooter}>
                <div className={s._itemPrice}>150 000 ₽</div>
                <div className={s._itemCountWrapper}>
                  <Minus className={s._itemCountIcon} />
                  <div className={s._itemCount}>60</div>
                  <Plus className={s._itemCountIcon} />
                </div>
              </div>
            </div>
          </div>

          <div className={s._itemsTitle}>Вид казино </div>

          <div className={s._item}>
            <div className={s._itemImgWrapper}>
              <img className={s._itemImg} src={wineCasinoImage} alt="" />
            </div>
            <div className={s._itemInfo}>
              <button className={s._deleteItemFromCart}>
                <XIcon />
              </button>
              <div className={s._itemHeader}>
                <div className={s._itemTitle}>Винное казино</div>
                <div className={s._itemOption}>Maxi пакет</div>
              </div>
              <div className={s._itemFooter}>
                <div className={s._itemPrice}>69 000 ₽</div>
                <div className={s._itemCountWrapper}>
                  <Minus className={s._itemCountIcon} />
                  <div className={s._itemCount}>1</div>
                  <Plus className={s._itemCountIcon} />
                </div>
              </div>
            </div>
          </div>

          <div className={s._item}>
            <div className={s._itemImgWrapper}>
              <img className={s._itemImg} src={whiskeyCasinoImage} alt="" />
            </div>
            <div className={s._itemInfo}>
              <button className={s._deleteItemFromCart}>
                <XIcon />
              </button>
              <div className={s._itemHeader}>
                <div className={s._itemTitle}>Виски казино</div>
                <div className={s._itemOption}>Mini пакет</div>
              </div>
              <div className={s._itemFooter}>
                <div className={s._itemPrice}>39 000 ₽</div>
                <div className={s._itemCountWrapper}>
                  <Minus className={s._itemCountIcon} />
                  <div className={s._itemCount}>1</div>
                  <Plus className={s._itemCountIcon} />
                </div>
              </div>
            </div>
          </div>

          <div className={s._itemsTitle}>Услуги</div>

          <div className={s._item}>
            <div className={s._itemImgWrapper}>
              <img className={s._itemImg} src={chips} alt="" />
            </div>
            <div className={s._itemInfo}>
              <button className={s._deleteItemFromCart}>
                <XIcon />
              </button>
              <div className={s._itemHeader}>
                <div className={s._itemTitle}>Брендирование фишек</div>
                <div className={s._itemOption}></div>
              </div>
              <div className={s._itemFooter}>
                <div className={s._itemPrice}>10 000 ₽</div>
                <div className={s._itemCountWrapper}>
                  <Minus className={s._itemCountIcon} />
                  <div className={s._itemCount}>200</div>
                  <Plus className={s._itemCountIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {cartStatus === "picking positions" && (
          <div className={s._order}>
            <div className={s._orderTop}>
              <p className={s._orderTitle}>Ваш заказ</p>
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
            <div className={s._orderContent}>
              <div className={s._orderItems}>
                <div className={s._orderItem}>
                  <div className={s._orderItemTitle}>
                    Стул-классика, с белой накидкой
                  </div>
                  <div className={s._orderItemDescription}>35 шт</div>
                </div>
                <div className={s._orderItem}>
                  <div className={s._orderItemTitle}>Кожаный стул</div>
                  <div className={s._orderItemDescription}>60 шт</div>
                </div>
                <div className={s._orderItem}>
                  <div className={s._orderItemTitle}>Винное казино</div>
                  <div className={s._orderItemDescription}>Maxi пакет</div>
                </div>
                <div className={s._orderItem}>
                  <div className={s._orderItemTitle}>Виски казино</div>
                  <div className={s._orderItemDescription}>Mini пакет</div>
                </div>
                <div className={s._orderItem}>
                  <div className={s._orderItemTitle}>Брендирование фишек</div>
                  <div className={s._orderItemDescription}>20 шт</div>
                </div>
                <div className={s._orderPriceWrapper}>
                  <div className={s._orderPriceTitle}>Цена:</div>
                  <div className={s._orderPrice}>100 000 ₽</div>
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
          </div>
        )}

        {cartStatus === "confirmation form processing" && (
          <div className={s._confimationForm}>
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
        )}
      </div>
    </section>
  );
};

export default connect(null, { openCartSuccessPopup })(Cart);
