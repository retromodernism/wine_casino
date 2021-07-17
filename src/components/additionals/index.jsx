import EquipmentItem from "../equipmentItem";
import s from "./index.module.scss";
import chairClassic from "./src/chairClassic.png";
import chair from "./src/chair.png";
import leatherChair from "./src/chairClassic.png";
import cash from "./src/cash.png";
import pitBoss from "./src/pitBoss.png";
import magician from "./src/magician.png";
import thimblerigger from "./src/thimblerigger.png";
import ServiceItem from "../serviceItem";

const Additionals = (props) => {
  return (
    <section className={s.additionals}>
      <div className={s._bg}></div>
      <div className={s._bg1}></div>
      <div className={s._content}>
        <div className={s._title}>Так же вы можете добавить</div>
        <div className={s._subtitle}>Наше оборудование</div>
        <div className={s._equipment}>
          <EquipmentItem
            image={chairClassic}
            title="Стул-классика"
            price={1500}
          />
          <EquipmentItem image={chair} title="Стул-кьяра" price={2000} />
          <EquipmentItem
            image={leatherChair}
            title="Кожаный стул"
            price={2500}
          />
          <EquipmentItem
            image={cash}
            title="Брендированные фан-мани"
            price={500}
            count="100 купюр"
          />
          {/* <EquipmentItem
            image={chairClassic}
            title="Стул-классика"
            price={1500}
          /> */}
          <div className={s._showMore}>Показать еще</div>
        </div>
        <div className={s._subtitle}>Наш услуги</div>
        <div className={s._service}>
          <ServiceItem
            image={pitBoss}
            title="Пит-босс"
            description="курирует работу крупье"
            price={8000}
          />
          <ServiceItem
            image={magician}
            title="Фокусник"
            description="проведет незабываемое шоу"
            price={8000}
          />
          <ServiceItem
            image={thimblerigger}
            title="Наперсточник"
            description="сделает ваш вечер более запутанным, но интригующим"
            price={8000}
          />
          {/* <ServiceItem image={pitBoss} /> */}
          <div className={s._showMore}>Показать еще</div>
        </div>
      </div>
    </section>
  );
};

export default Additionals;
