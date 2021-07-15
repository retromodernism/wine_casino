import s from "./index.module.scss";
import image1 from "./src/image1.png";
import image2 from "./src/image2.png";
import image3 from "./src/image3.png";
import image4 from "./src/image4.png";

const Essence = (props) => {
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
              }}
            >
              <div className={s._itemImageBefore}>1</div>
            </div>
            <div className={s._itemTitle}>Дегустация</div>
            <div className={s._itemText}>
              В начале игры сомелье рассказывает правила, раздаёт фишки и
              предлагает игрокам продегустировать определенный вид вина. Гости
              получают пробник, и пытаются и понять вкусовые и иные
              характеристики.
            </div>
          </div>
          <div className={s._item}>
            <div
              className={s._itemImage}
              style={{
                background: `url(${image2}) 100% 100% no-repeat`,
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
          <div className={s._item}>
            <div
              className={s._itemImage}
              style={{
                background: `url(${image4}) 100% 100% no-repeat`,
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
