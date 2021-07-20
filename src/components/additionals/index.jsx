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
import { connect } from "react-redux";

const Additionals = ({ positions, props }) => {
  const equipments = positions.filter(({ type }) => type === "equipment");
  const services = positions.filter(({ type }) => type === "service");

  return (
    <section className={s.additionals}>
      <div className={s._bg}></div>
      <div className={s._bg1}></div>
      <div className={s._content}>
        <div className={s._title}>Так же вы можете добавить</div>
        <div className={s._subtitle}>Наше оборудование</div>
        <div className={s._equipment}>
          {equipments.map((item, index) => (
            <EquipmentItem {...item} key={index} />
          ))}
          <div className={s._showMore}>Показать еще</div>
        </div>
        <div className={s._subtitle}>Наш услуги</div>
        <div className={s._service}>
          {services.map((item, index) => (
            <ServiceItem {...item} key={index} />
          ))}
          <div className={s._showMore}>Показать еще</div>
        </div>
      </div>
    </section>
  );
};

export default connect((state) => ({
  positions: state.positions.positions,
}))(Additionals);
