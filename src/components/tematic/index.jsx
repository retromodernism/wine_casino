import s from "./index.module.scss";
import cx from "classnames";
import hash from "object-hash";
import gatsby1 from "./src/gatsby1.webp";
import gatsby2 from "./src/gatsby2.webp";
import gatsby3 from "./src/gatsby3.webp";
import lasVegas1 from "./src/lasVegas1.webp";
import lasVegas2 from "./src/lasVegas2.webp";
import lasVegas3 from "./src/lasVegas3.webp";
import mafia1 from "./src/mafia1.webp";
import mafia2 from "./src/mafia2.webp";
import mafia3 from "./src/mafia3.webp";
import TematicItem from "../tematicItem";
import { useState } from "react";

const defaultTematicItems = [
  {
    title: "Гэтсби",
    description:
      "Организуем для вас вечеринку в стиле Гэтсби. Гламур и декаданс 20-х годов прошлого века сделали их популярной темой для тематических праздников. Помимо оформления здесь не малую роль играют благородные напитки, что отлично сочетается с нашими услугами.",
    images: [gatsby1, gatsby2, gatsby3],
  },
  {
    title: "Лас-Вегас",
    description:
      "Город расположенный в пустыне стал символом кутежа, богатства и веселья. Установим игровые столы фан-казино различной направленности на событии для создания атмосферы в стиле Лас-Вегаса.",
    images: [lasVegas1, lasVegas2, lasVegas3],
  },
  {
    title: "Мафия",
    description:
      "Эпоха шарма подпольных баров и романтизированной мафии из зарубежных фильмов, всегда притягивала внимание людей. Легко воплотим желание окунуться в те времена с помощью аниматоров и соответствующего реквизита.",
    images: [mafia1, mafia2, mafia3],
  },
];

const Tematic = (props) => {
  const tematicItems = props?.data?.items || defaultTematicItems;
  const { isDesktop, isTablet, isMobile } = props;

  /* State */

  const initialItemsState = tematicItems.map((item, i) => ({
    ...item,
    isActive: i === 0,
    id: hash(item),
  }));

  const [items, setItems] = useState(initialItemsState);

  const toggleItem = (itemId) => {
    const newState = items.map((item) => ({
      ...item,
      isActive: item.id === itemId,
    }));

    setItems(newState);
  };

  const [activeItem] = items.filter(({ isActive }) => isActive);

  return (
    <section className={s.tematic}>
      <div className={s._bg1}></div>
      <div className={s._bg2}></div>
      <div className={s._content}>
        <div className={s._title}>Тематическая вечеринка с фан-казино</div>
        <div className={s._items}>
          {isMobile && (
            <div className={s._paginationButtons}>
              {items.map(({ title, id, isActive }, index) => (
                <button
                  key={index}
                  className={cx(s._paginationButton, {
                    [s._paginationButton_active]: isActive,
                  })}
                  onClick={toggleItem.bind(null, id)}
                >
                  {title}
                </button>
              ))}
            </div>
          )}

          {(isDesktop || isTablet) &&
            items.map((item, i) => (
              <TematicItem {...item} key={i} odd={i % 2 !== 0} />
            ))}

          {isMobile && <TematicItem {...activeItem} />}
        </div>
      </div>
    </section>
  );
};

export default Tematic;
