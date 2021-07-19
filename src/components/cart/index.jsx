import s from "./index.module.scss";
import chair from "./src/chair.png";
import leatherChair from "./src/leatherChair.png";
import wineCasinoImage from "./src/wineCasinoImage.png";
import whiskeyCasinoImage from "./src/whiskeyCasinoImage.png";
import chips from "./src/chips.png";
import { ReactComponent as XIcon } from "./src/xIcon.svg";
import { ReactComponent as Minus } from "./src/minus.svg";
import { ReactComponent as Plus } from "./src/plus.svg";

const Cart = (props) => {
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
                <buttom className={s._orderCheckoutButton}>Оформить</buttom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
