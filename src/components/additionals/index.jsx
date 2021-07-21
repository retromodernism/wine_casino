import EquipmentItem from "../equipmentItem";
import s from "./index.module.scss";
import ServiceItem from "../serviceItem";
import { connect } from "react-redux";
import { useState } from "react";

const Additionals = ({ positions, props }) => {
  const equipments = positions.filter(({ type }) => type === "equipment");
  const services = positions.filter(({ type }) => type === "service");

  const [showedEquipmentNumber, setShowedEquipmentNumber] = useState(4);
  const equipmentsHasShowMore = equipments.length > showedEquipmentNumber;

  const [showedServiceNumber, setShowedServiceNumber] = useState(3);
  const servicesHasShowMore = services.length > showedServiceNumber;

  return (
    <section className={s.additionals}>
      <div className={s._bg}></div>
      <div className={s._bg1}></div>
      <div className={s._content}>
        <div className={s._title}>Так же вы можете добавить</div>
        <div className={s._subtitle}>Наше оборудование</div>
        <div className={s._equipment}>
          {equipments.map((item, index) =>
            index < showedEquipmentNumber ? (
              <EquipmentItem {...item} key={index} />
            ) : null
          )}
          {equipmentsHasShowMore && (
            <div
              className={s._showMore}
              onClick={setShowedEquipmentNumber.bind(
                null,
                showedEquipmentNumber + 4
              )}
            >
              Показать еще
            </div>
          )}
        </div>
        <div className={s._subtitle}>Наш услуги</div>
        <div className={s._service}>
          {services.map((item, index) =>
            index < showedServiceNumber ? (
              <ServiceItem {...item} key={index} />
            ) : null
          )}
          {servicesHasShowMore && (
            <div
              className={s._showMore}
              onClick={setShowedServiceNumber.bind(
                null,
                showedServiceNumber + 3
              )}
            >
              Показать еще
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default connect((state) => ({
  positions: state.positions.positions,
}))(Additionals);
