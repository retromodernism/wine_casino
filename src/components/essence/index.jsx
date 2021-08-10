import s from "./index.module.scss";
import cx from "classnames";
import image1_desk from "./src/image1.webp";
import image2_desk from "./src/image2.webp";
import image3_desk from "./src/image3.webp";
import image4_desk from "./src/image4.webp";

const defaultItems = [
  {
    title: "Дегустация",
    image: image1_desk,
    description:
      "В начале игры сомелье рассказывает правила, раздаёт фишки и предлагает игрокам продегустировать определенный вид вина. Гости получают пробник, и пытаются и понять вкусовые и иные характеристики.",
  },
  {
    title: "Ставки",
    image: image2_desk,
    description:
      "В начале игры сомелье рассказывает правила, раздаёт фишки и предлагает игрокам продегустировать определенный вид вина. Гости получают пробник, и пытаются и понять вкусовые и иные характеристики.",
  },
  {
    title: "Вскрытие",
    image: image3_desk,
    description:
      "Когда ставки сделаны, ведущий подробно описывает продегустированный продукт и чьи догадки оказались верными, а чьи нет. Распределяется выигрыш между участниками.",
  },
  {
    title: "Приз",
    image: image4_desk,
    description:
      "После завершения всех раундов, определяется победитель с наибольшим числом заработанных очков. Ему выдается сувенир, который согласуется с заказчиком (например, один из продуктов игры).",
  },
];

const defaultData = {
  title: "В чем суть?",
  items: defaultItems,
  itemsColor: "#2a9d76",
};

const Essence = ({ style, ...props }) => {
  const { title, items, itemsColor, bg } = props.data || defaultData;

  const { isDesktop, isTablet, isMobile } = props;

  return (
    <section className={s.essence} style={style}>
      <div className={s._bg1}></div>
      <div className={s._bg2}></div>
      {(bg && isDesktop) && (
        <div
          className={s._bg}
          style={{
            background: `url(${bg.image}) 100% 100% / contain no-repeat`,
            top: bg.top,
            right: bg.right,
            width: bg.width,
            height: bg.height,
          }}
        />
      )}
      <div className={s._content}>
        <div className={s._title}>{title}</div>
        <div className={s._items}>
          {items.map(({ title, image, description }, index) => (
            <div
              className={cx(s._item, { [s._item_odd]: isTablet })}
              key={index}
            >
              <div
                className={cx(s._itemImage, {
                  [s._itemImage_odd]: isTablet && index % 2 === 1,
                })}
                style={{
                  background: `url(${image}) 100% 100% / cover no-repeat`,
                  backgroundPosition: "center center",
                }}
              >
                <div
                  className={s._itemImageBefore}
                  style={{ background: `${itemsColor}` }}
                >
                  {index + 1}
                </div>
              </div>
              <div className={s._itemTitle} style={{ color: itemsColor }}>
                {title}
              </div>
              <div className={s._itemText}>{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essence;
