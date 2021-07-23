import s from "./index.module.scss";
import { ReactComponent as Pizza } from "./src/pizza.svg";
import { ReactComponent as Taste } from "./src/taste.svg";
import { ReactComponent as Beverage } from "./src/beverage.svg";
import { ReactComponent as Bocals } from "./src/bocals.svg";
import { ReactComponent as Corporative } from "./src/corporative.svg";
import { ReactComponent as Conference } from "./src/conference.svg";
import classname from "classnames";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { useMediaQuery } from "react-responsive";

const Masterclass = (props) => {
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  const [buttonIsHover, setButtonIsHover] = useState(false);
  const [videoIsOpen, setVideoOpen] = useState(false);
  return (
    <section className={s.masterclass}>
      <div className={s._bg1}></div>
      <div className={s._bg2}></div>
      <div className={s._bg3}></div>
      <div className={s._content}>
        <div className={s._title}>Проведем мастер-класс у вас или у нас</div>
        <div className={s._items}>
          <div className={s._holidays}>
            <div className={s._holidaysTitle}>
              Организация праздников на выезде
            </div>
            <p className={s._holidaysText}>
              Компания фан-казино предоставляет широкий спектр услуг по
              организации выездного фан-казино в Москве. Мы берем на себя
              доставку игрового поля, продуктов и всей необходимой атрибутики
              для проведения эффектного мероприятия. Также мы предоставляем
              услуги профессиональных крупье, сомелье, бариста и фотографов.
            </p>
          </div>
          <div className={s._offer}>
            <div className={s._offerTitle}>
              Мы предлагаем полный набор необходимого оборудования для
              проведения дегустаций с элементами казино:
            </div>
            <div className={s._offerItems}>
              <div className={s._offerItem}>
                <div className={s._offerItemIcon}>
                  <Pizza />
                </div>

                <p className={s._offerItemDesciption}>съедобная «рулетка»</p>
              </div>
              <div
                className={s._offerItem}
                style={{ marginLeft: isDesktop ? "54px" : "" }}
              >
                <div className={s._offerItemIcon}>
                  <Taste />
                </div>
                <p className={s._offerItemDesciption}>
                  сырные, медовые, хлебные дегустации
                </p>
              </div>
              <div
                className={s._offerItem}
                style={{ marginLeft: isDesktop ? "25px" : "", width: "235px" }}
              >
                <div className={s._offerItemIcon}>
                  <Beverage />
                </div>
                <p className={s._offerItemDesciption}>
                  алкогольные/ слабоалкогольные/ безалкогольные
                  <br />
                  фан-казино
                </p>
              </div>
            </div>
          </div>
          <div className={s._image}></div>
          <div className={s._rent}>
            <div className={s._rentTitle}>
              Аренда площадки
              <br />
              на ваше мероприятие
            </div>
            <div className={s._rentText}>
              Компания фан-казино располагает собственными площадками для
              организации торжеств любой тематики и масштаба.
            </div>
            <div className={s._rentFeatures}>
              <div className={s._rentFeature}>
                <Bocals />
                <p className={s._rentFeatureTitle}>на праздник</p>
              </div>
              <div className={s._rentFeature}>
                <Corporative />
                <p className={s._rentFeatureTitle}>на корпоратив</p>
              </div>
              <div className={s._rentFeature}>
                <Conference />
                <p className={s._rentFeatureTitle}>на конференцию</p>
              </div>
            </div>
            <button
              className={classname(s._videoButton, {
                [s._videoButton_hover]: buttonIsHover,
              })}
              onClick={setVideoOpen.bind(null, true)}
              onMouseEnter={setButtonIsHover.bind(null, true)}
              onMouseLeave={setButtonIsHover.bind(null, false)}
            >
              <p>Смотреть видео о площадке</p>
              <div className={s._videoButtonIcon}></div>
            </button>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay={1}
        isOpen={videoIsOpen}
        videoId={"fZd3IMBfMB0"}
        onClose={setVideoOpen.bind(null, false)}
      />
    </section>
  );
};

export default Masterclass;
