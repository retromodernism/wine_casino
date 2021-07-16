import s from "./index.module.scss";
import image1 from "./src/image1.png";
import image2 from "./src/image2.png";
import image3 from "./src/image3.png";
import classname from "classnames";
import Variant from "../variant";

const Variants = (props) => {
  return (
    <section className={s.variants}>
      <div className={s._bg1}></div>
      <div className={s._bg2}></div>
      <div className={s._bg3}></div>
      <div className={s._content}>
        <div className={s._title}>Подберите лучший для себя вариант</div>
        <div className={s._variants}>
          <Variant
            image={image1}
            title="Пакет — «Mini»"
            description="до 15 человек | до 2-х часов"
            options={[
              { text: "до 15 человек" },
              { text: "до 2-х часов работы" },
              { text: "услуги аниматора" },
              { text: "малое игровое полотно" },
              { text: "импортное вино — 4 сорта" },
              { text: "пластиковые бокалы" },
            ]}
          />
          <Variant
            image={image2}
            title="Пакет — «Middle»"
            description="до 50 человек | до 3-х часов"
            isPopular
            options={[
              { text: "до 50 человек" },
              { text: "до 3-х часов работы" },
              { text: "услуги сомелье" },
              { text: "большое игровое полотно" },
              { text: "импортное вино — 8 сортов" },
              { text: "пластиковые бокалы премиум" },
              { text: "подарочный набор — 10 бутылочек" },
            ]}
          />
          <Variant
            image={image3}
            title="Пакет — «Maxi»"
            description="до 100 человек | до 4-х часов"
            options={[
              { text: "до 100 человек" },
              { text: "до 4-х часов работы" },
              { text: "услуги сомелье" },
              { text: "игровой стол" },
              { text: "импортное вино — 10 сортов" },
              { text: "стеклянные бокалы" },
              { text: "чехлы для бутылок" },
              { text: "официант и закуски" },
              { text: "подарочный набор — 20 бутылочек" },
            ]}
          />
          <div className={classname(s._variant, s._variant_popular)}>
            <div
              className={s._variantImage}
              style={{
                background: `url(${image2}) 100% 100% no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
          <div className={s._variant}>
            <div
              className={s._variantImage}
              style={{
                background: `url(${image3}) 100% 100% no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variants;
