import s from "./index.module.scss";
import cx from "classnames";
import gatsby1 from "./src/gatsby1.png";
import gatsby2 from "./src/gatsby2.png";
import gatsby3 from "./src/gatsby3.png";
import lasVegas1 from "./src/lasVegas1.png";
import lasVegas2 from "./src/lasVegas2.png";
import lasVegas3 from "./src/lasVegas3.png";
import mafia1 from "./src/mafia1.png";
import mafia2 from "./src/mafia2.png";
import mafia3 from "./src/mafia3.png";
import TematicItem from "../tematicItem";

const Tematic = (props) => {
  return (
    <section className={s.tematic}>
      <div className={s._bg1}></div>
      <div className={s._bg2}></div>
      <div className={s._content}>
        <div className={s._title}>Тематическая вечеринка с фан-казино</div>
        <div className={s._items}>

          <TematicItem
            images={[gatsby1, gatsby2, gatsby3]}
            title="Гэтсби"
            description="Организуем для вас вечеринку в стиле Гэтсби. Гламур и декаданс 20-х годов прошлого века сделали их популярной темой для тематических праздников. Помимо оформления здесь не малую роль играют благородные напитки, что отлично сочетается с нашими услугами."
          />

          <TematicItem
            images={[lasVegas1, lasVegas2, lasVegas3]}
            title="Лас-Вегас"
            description="Город расположенный в пустыне стал символом кутежа, богатства и веселья. Установим игровые столы фан-казино различной направленности на событии для создания атмосферы в стиле Лас-Вегаса."
            odd
          />

          <TematicItem
            images={[mafia1, mafia2, mafia3]}
            title="Гэтсби"
            description="Эпоха шарма подпольных баров и романтизированной мафии из зарубежных фильмов, всегда притягивала внимание людей. Легко воплотим желание окунуться в те времена с помощью аниматоров и соответствующего реквизита."
          />
          
          {/* <div className={cx(s._itemInfo, s._even)}>
            <div className={s._itemTitle}>Гэтсби</div>
            <div className={s._itemDescription}>
              Организуем для вас вечеринку в стиле Гэтсби. Гламур и декаданс
              20-х годов прошлого века сделали их популярной темой для
              тематических праздников. Помимо оформления здесь не малую роль
              играют благородные напитки, что отлично сочетается с нашими
              услугами.
            </div>
            <a href="/" className={s._itemGetMore}>
              Узнать подробнее
            </a>
          </div>
          <div
            className={s._image}
            style={{ background: `url(${gatsby1}) 100% 100% /cover no-repeat` }}
          ></div>
          <div
            className={s._image}
            style={{
              background: `url(${gatsby2}) 100% 100% /cover no-repeat`,
              backgroundPosition: "center center",
            }}
          ></div>
          <div
            className={s._image}
            style={{
              background: `url(${gatsby3}) 100% 100% /cover no-repeat`,
              backgroundPosition: "center center",
            }}
          ></div>
          <div
            className={s._image}
            style={{
              background: `url(${lasVegas1}) 100% 100% /cover no-repeat`,
              backgroundPosition: "center center",
            }}
          ></div>
          <div
            className={s._image}
            style={{
              background: `url(${lasVegas2}) 100% 100% /cover no-repeat`,
              backgroundPosition: "center center",
            }}
          ></div>
          <div
            className={s._image}
            style={{
              background: `url(${lasVegas3}) 100% 100% /cover no-repeat`,
              backgroundPosition: "center center",
            }}
          ></div>
          <div className={cx(s._itemInfo, s._odd)}>
            <div className={s._itemTitle}>Лас-Вегас</div>
            <div className={s._itemDescription}>
              Город расположенный в пустыне стал символом кутежа, богатства и
              веселья. Установим игровые столы фан-казино различной
              направленности на событии для создания атмосферы в стиле
              Лас-Вегаса.
            </div>
            <a href="/" className={s._itemGetMore}>
              Узнать подробнее
            </a>
          </div>
          <div className={cx(s._itemInfo, s._even)}>
            <div className={s._itemTitle}>Мафия</div>
            <div className={s._itemDescription}>
              Эпоха шарма подпольных баров и романтизированной мафии из
              зарубежных фильмов, всегда притягивала внимание людей. Легко
              воплотим желание окунуться в те времена с помощью аниматоров и
              соответствующего реквизита.
            </div>
            <a href="/" className={s._itemGetMore}>
              Узнать подробнее
            </a>
          </div>
          <div
            className={s._image}
            style={{
              background: `url(${mafia1}) 100% 100% /cover no-repeat`,
              backgroundPosition: "center center",
            }}
          ></div>
          <div
            className={s._image}
            style={{
              background: `url(${mafia2}) 100% 100% /cover no-repeat`,
              backgroundPosition: "center center",
            }}
          ></div>
          <div
            className={s._image}
            style={{
              background: `url(${mafia3}) 100% 100% /cover no-repeat`,
              backgroundPosition: "center center",
            }}
          ></div> */}
        </div>
      </div>
    </section>
  );
};

export default Tematic;
