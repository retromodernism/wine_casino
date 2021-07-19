import s from "./index.module.scss";
import cheese from "./src/cheese.png";
import fence from "./src/fence.png";
import cash from "./src/cash.png";
import { ReactComponent as Plus } from "./src/plus.svg";

const Recomendations = (props) => {
  return (
    <section className={s.recomendations}>
      <div className={s._content}>
        <div className={s._title}>Рекомендуем вам</div>
        <div className={s._item}>
          <div className={s._itemImageWrapper}>
            <img src={cheese} alt="" className={s._itemImage} />
          </div>
          <div className={s._itemInfo}>
            <div className={s._itemInfoTop}>
              <div className={s._itemInfoTitle}>Сырное казино</div>
              <div className={s._itemInfoDescription}>Medium пакет</div>
            </div>
            <div className={s._itemInfoBottom}>
              <div className={s._itemInfoPriceTitle}>Цена:</div>
              <div className={s._itemInfoPriceCount}></div>
              <div className={s._itemInfoPriceCount}>65 500 ₽</div>
              <button className={s._itemInfoPlus}>
                <Plus />
              </button>
            </div>
          </div>
        </div>

        <div className={s._item}>
          <div className={s._itemImageWrapper}>
            <img src={fence} alt="" className={s._itemImage} />
          </div>
          <div className={s._itemInfo}>
            <div className={s._itemInfoTop}>
              <div className={s._itemInfoTitle}>Столбики ограждения</div>
              <div className={s._itemInfoDescription}></div>
            </div>
            <div className={s._itemInfoBottom}>
              <div className={s._itemInfoPriceTitle}>Цена:</div>
              <div className={s._itemInfoPriceCount}></div>
              <div className={s._itemInfoPriceCount}>1 000 ₽</div>
              <button className={s._itemInfoPlus}>
                <Plus />
              </button>
            </div>
          </div>
        </div>

        <div className={s._item}>
          <div className={s._itemImageWrapper}>
            <img src={cash} alt="" className={s._itemImage} />
          </div>
          <div className={s._itemInfo}>
            <div className={s._itemInfoTop}>
              <div className={s._itemInfoTitle}>Брендирование фан-мани</div>
              <div className={s._itemInfoDescription}>Курирует работу крупье</div>
            </div>
            <div className={s._itemInfoBottom}>
              <div className={s._itemInfoPriceTitle}>Цена:</div>
              <div className={s._itemInfoCount}>100 купюр</div>
              <div className={s._itemInfoPriceCount}>500 ₽</div>
              <button className={s._itemInfoPlus}>
                <Plus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recomendations;
