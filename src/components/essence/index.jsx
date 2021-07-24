import s from "./index.module.scss";
import cx from "classnames";
import image1_desk from "./src/image1.png";
import image2_desk from "./src/image2.png";
import image3_desk from "./src/image3.png";
import image4_desk from "./src/image4.png";
import image1_tab from "./src/image1_tab.png";
import image2_tab from "./src/image2_tab.png";
import image3_tab from "./src/image3_tab.png";
import image4_tab from "./src/image4_tab.png";
import { useMediaQuery } from "react-responsive";

const Essence = (props) => {
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  let image1, image2, image3, image4;
  if (isDesktop) {
    image1 = image1_desk;
    image2 = image2_desk;
    image3 = image3_desk;
    image4 = image4_desk;
  }
  if (isTablet) {
    image1 = image1_tab;
    image2 = image2_tab;
    image3 = image3_tab;
    image4 = image4_tab;
  }
  if (isMobile) {
    image1 = image1_tab;
    image2 = image2_tab;
    image3 = image3_tab;
    image4 = image4_tab;
  }

  return (
    <section className={s.essence}>
      <div className={s._bg1}></div>
      <div className={s._bg2}></div>
      <div className={s._content}>
        <div className={s._title}>В чем суть?</div>
        <div className={s._items}>
          <div className={s._item}>
            <div
              className={s._itemImage}
              style={{
                background: `url(${image1}) 100% 100% no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className={s._itemImageBefore} style={{ padding: isMobile ? "" : "0 17px" }}>
                1
              </div>
            </div>
            <div className={s._itemTitle}>Дегустация</div>
            <div className={s._itemText}>
              В начале игры сомелье рассказывает правила, раздаёт фишки и
              предлагает игрокам продегустировать определенный вид вина. Гости
              получают пробник, и пытаются и понять вкусовые и иные
              характеристики.
            </div>
          </div>
          <div className={cx(s._item, { [s._item_odd]: isTablet })}>
            <div
              className={cx(s._itemImage, { [s._itemImage_odd]: isTablet })}
              style={{
                background: `url(${image2}) 100% 100% no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className={s._itemImageBefore}>2</div>
            </div>
            <div className={s._itemTitle}>Ставки</div>
            <div className={s._itemText}>
              После того, как участники распробовали вкус, они начинают делать
              ставки на разные поля игрового стола. Как и в классическом казино,
              можно расположить несколько фишек на разные сектора.
            </div>
          </div>
          <div className={s._item}>
            <div
              className={s._itemImage}
              style={{
                background: `url(${image3}) 100% 100% no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className={s._itemImageBefore}>3</div>
            </div>
            <div className={s._itemTitle}>Вскрытие</div>
            <div className={s._itemText}>
              Когда ставки сделаны, ведущий подробно описывает
              продегустированный продукт и чьи догадки оказались верными, а чьи
              нет. Распределяется выигрыш между участниками.
            </div>
          </div>
          <div className={cx(s._item, { [s._item_odd]: isTablet })}>
            <div
              className={cx(s._itemImage, { [s._itemImage_odd]: isTablet })}
              style={{
                background: `url(${image4}) 100% 100% no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className={s._itemImageBefore}>4</div>
            </div>
            <div className={s._itemTitle}>Приз</div>
            <div className={s._itemText}>
              После завершения всех раундов, определяется победитель с
              наибольшим числом заработанных очков. Ему выдается сувенир,
              который согласуется с заказчиком (например, один из продуктов
              игры).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essence;
