import EquipmentItem from "../equipmentItem";
import s from "./index.module.scss";
import cx from "classnames";
import ServiceItem from "../serviceItem";
import { connect } from "react-redux";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./swiper.scss";
import wineAdditinalsBg from "./src/bg.png";
import { useCallback } from "react";
import { useMemo } from "react";

const defaultData = {
  title: "Так же вы можете добавить",
  color: "#323232",
  bg: {
    image: wineAdditinalsBg,
    right: "-172px",
    top: "-2px",
    height: "698px",
    width: "520px",
  },
};

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

const Additionals = ({ positions, ...props }) => {
  const { title, color, bg } = useMemo(
    () => props.data || defaultData,
    [props.data]
  );
  const { isDesktop, isTablet, isMobile } = useMemo(() => props, [props]);
  const mediaQueries = useMemo(
    () => ({ isDesktop, isTablet, isMobile }),
    [isDesktop, isTablet, isMobile]
  );

  /* State */

  const equipments = useMemo(
    () => positions.filter(({ type }) => type === "equipment"),
    [positions]
  );
  const services = useMemo(
    () => positions.filter(({ type }) => type === "service"),
    [positions]
  );

  const [showedEquipmentNumber, setShowedEquipmentNumber] = useState(4);
  const equipmentsHasShowMore = useMemo(
    () => equipments.length > showedEquipmentNumber,
    [equipments, showedEquipmentNumber]
  );
  const showMoreEquipments = useCallback(
    setShowedEquipmentNumber.bind(null, showedEquipmentNumber + 4),
    [showedEquipmentNumber]
  );

  const [showedServiceNumber, setShowedServiceNumber] = useState(3);
  const servicesHasShowMore = useMemo(
    () => services.length > showedServiceNumber,
    [services, showedServiceNumber]
  );
  const showMoreServices = useCallback(
    setShowedServiceNumber.bind(null, showedServiceNumber + 3),
    [showedServiceNumber]
  );

  return (
    <section className={cx(s.additionals, "additionals")}>
      {isDesktop && (
        <div
          className={s._bg}
          style={{
            background: `url(${bg.image}) 100% 100% / contain no-repeat`,
            width: bg.width,
            height: bg.height,
            top: bg.top,
            right: bg.right,
          }}
        />
      )}
      <div className={s._bg1} />
      <div className={s._content}>
        <div className={s._title}>{title}</div>
        <div className={s._subtitle}>Наше оборудование</div>
        {!isMobile && (
          <div className={s._equipment}>
            {equipments.map((item, index) =>
              index < showedEquipmentNumber ? (
                <EquipmentItem
                  {...item}
                  {...mediaQueries}
                  key={index}
                  color={color}
                />
              ) : null
            )}
            {equipmentsHasShowMore && <ShowMore onClick={showMoreEquipments} />}
          </div>
        )}

        {isMobile && (
          <div className={cx(s._equipment, "equipment")}>
            <Swiper
              {...{
                slidesPerView: "auto",
                spaceBetween: 10,
              }}
            >
              {equipments.map((item, index) => (
                <SwiperSlide key={index}>
                  <EquipmentItem {...item} {...mediaQueries} color={color} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <div className={s._subtitle}>Наши услуги</div>
        {isDesktop && (
          <div className={s._service}>
            {services.map((item, index) =>
              index < showedServiceNumber ? (
                <ServiceItem
                  {...item}
                  {...mediaQueries}
                  key={index}
                  color={color}
                />
              ) : null
            )}
            {servicesHasShowMore && <ShowMore onClick={showMoreServices} />}
          </div>
        )}
        {isTablet && (
          <div className={cx(s._service, "service")}>
            <Swiper {...sliderParams}>
              {services.map((item, index) => (
                <SwiperSlide key={index}>
                  <ServiceItem
                    {...item}
                    {...mediaQueries}
                    key={index}
                    color={color}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {isMobile && (
          <div className={cx(s._service, "service")}>
            <Swiper {...{ slidesPerView: "auto", spaceBetween: 10 }}>
              {services.map((item, index) => (
                <SwiperSlide key={index}>
                  <ServiceItem
                    {...item}
                    {...mediaQueries}
                    key={index}
                    color={color}
                  />
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
