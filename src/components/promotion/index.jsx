import s from "./index.module.scss";
import camera from "./src/camera.svg";
import photograph from "./src/photograph.svg";
import sertificate from "./src/sertificate.svg";

const Promotion = ({ background = true }) => {
  return (
    <section className={s.promotion}>
      {background && <div className={s._bg}></div>}
      <div className={s._content}>
        <div className={s._item}>
          <div className={s._itemTitle}>Фотобудка в подарок</div>
          <div className={s._itemDescription}>
            при заказе
            <br />
            maxi пакета
          </div>
          <div
            className={s._itemIcon}
            style={{
              background: `url(${camera}) 100% 100% no-repeat`,
              height: "105px",
              width: "139px",
              top: "133px",
              right: "33px",
            }}
          ></div>
        </div>
        <div className={s._item}>
          <div className={s._itemTitle}>Фотограф бесплатно</div>
          <div className={s._itemDescription}>
            при заказе
            <br />
            от 5-ти столов
          </div>
          <div
            className={s._itemIcon}
            style={{
              background: `url(${photograph}) 100% 100% no-repeat`,
              height: "127px",
              width: "123px",
              top: "101px",
              right: "26px",
            }}
          ></div>
        </div>
        <div className={s._item}>
          <div className={s._itemTitle}>Сертификат 10 000 ₽</div>
          <div className={s._itemDescription}>при заказе maxi пакета</div>
          <div
            className={s._itemIcon}
            style={{
              background: `url(${sertificate}) 100% 100% no-repeat`,
              height: "79px",
              width: "123px",
              top: "164px",
              right: "25px",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
