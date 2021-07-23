import EquipmentItem from "../equipmentItem";
import s from "./index.module.scss";
import cx from "classnames";
import ServiceItem from "../serviceItem";
import { connect } from "react-redux";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./swiper.scss";

const sliderParams = {
  slidesPerView: 2,
  loop: true,
};

const ShowMore = ({ onClick }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <div
      className={cx(s._showMore, { [s._showMore_hover]: isHovered })}
      onClick={onClick}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    >
      Показать еще
    </div>
  );
};

const Additionals = ({ positions, props }) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* State */

  const equipments = positions.filter(({ type }) => type === "equipment");
  const services = positions.filter(({ type }) => type === "service");

  const [showedEquipmentNumber, setShowedEquipmentNumber] = useState(4);
  const equipmentsHasShowMore = equipments.length > showedEquipmentNumber;

  const [showedServiceNumber, setShowedServiceNumber] = useState(3);
  const servicesHasShowMore = services.length > showedServiceNumber;

  return (
    <section className={cx(s.additionals, "additionals")}>
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
            <ShowMore
              onClick={setShowedEquipmentNumber.bind(
                null,
                showedEquipmentNumber + 4
              )}
            />
          )}
        </div>
        <div className={s._subtitle}>Наш услуги</div>
        {isDesktop && (
          <div className={s._service}>
            {services.map((item, index) =>
              index < showedServiceNumber ? (
                <ServiceItem {...item} key={index} />
              ) : null
            )}
            {servicesHasShowMore && (
              <ShowMore
                onClick={setShowedServiceNumber.bind(
                  null,
                  showedServiceNumber + 3
                )}
              />
            )}
          </div>
        )}
        {isTablet && (
          <div className={cx(s._service, "service")}>
            <Swiper {...sliderParams} >
              {services.map((item, index) => (
                <SwiperSlide key={index}>
                  <ServiceItem {...item} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default connect((state) => ({
  positions: state.positions.positions,
}))(Additionals);
