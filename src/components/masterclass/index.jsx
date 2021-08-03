import s from "./index.module.scss";
import pizzaIcon from "./src/pizza.svg";
import lidIcon from "./src/taste.svg";
import juiceIcon from "./src/beverage.svg";
import iconWineglass from "./src/bocals.svg";
import iconParty from "./src/corporative.svg";
import iconConference from "./src/conference.svg";
import masterclassImage from "./src/image.png";
import classname from "classnames";
import { Fragment, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { useMediaQuery } from "react-responsive";

const defaultData = {
  color: "#323232",
  title: "Проведем мастеркласс у вас или у нас",
  holidays: {
    title: "Организация праздников на выезде",
    description:
      "Компания фан-казино предоставляет широкий спектр услуг по организации выездного фан-казино в Москве. Мы берем на себя доставку игрового поля, продуктов и всей необходимой атрибутики для проведения эффектного мероприятия. Также мы предоставляем услуги профессиональных крупье, сомелье, бариста и фотографов.",
  },
  offer: {
    offerItems: [
      {
        icon: pizzaIcon,
        description: "съедобная «рулетка»",
      },
      {
        icon: lidIcon,
        description: "сырные, медовые, хлебные дегустации",
      },
      {
        icon: juiceIcon,
        description:
          "алкогольные/ слабоалкогольные/ безалкогольные<br/>фан-казино",
      },
    ],
  },
  image: masterclassImage,
  rent: {
    title: "Аренда площадки<br />на ваше мероприятие",
    text: "Компания фан-казино располагает собственными площадками для организации торжеств любой тематики и масштаба.",
    items: [
      {
        icon: iconWineglass,
        title: "на праздник",
      },
      {
        icon: iconParty,
        title: "на корпоратив",
      },
      {
        icon: iconConference,
        title: "на конференцию",
      },
    ],
  },
  video: {
    id: "fZd3IMBfMB0",
  },
};

const Masterclass = (props) => {
  const { color, title, holidays, offer, image, rent, video } =
    props.data || defaultData;

  /* Media Queries */
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
        <div className={s._title}>{title}</div>
        <div className={s._items}>
          <div className={s._holidays}>
            <div className={s._holidaysTitle}>{holidays.title}</div>

            {isMobile && (
              <div className={s._offer} style={{ background: color }}>
                <div className={s._offerTitle}>
                  Мы предлагаем полный набор необходимого оборудования для
                  проведения дегустаций с элементами казино:
                </div>
                <div className={s._offerItems}>
                  {offer.offerItems.map(({ description, icon }, index) => (
                    <div className={s._offerItem} key={index}>
                      <div
                        className={s._offerItemIcon}
                        style={{
                          background: `url(${icon}) 100% 100% / contain no-repeat`,
                          backgroundPosition: "center center",
                        }}
                      />
                      <p
                        className={s._offerItemDesciption}
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className={s._holidaysText}>{holidays.description}</p>
          </div>
          {!isMobile && (
            <div className={s._offer} style={{ background: color }}>
              <div className={s._offerTitle}>
                Мы предлагаем полный набор необходимого оборудования для
                проведения дегустаций с элементами казино:
              </div>
              <div className={s._offerItems}>
                {offer.offerItems.map(({ description, icon }, index) => (
                  <div className={s._offerItem} key={index}>
                    <div
                      className={s._offerItemIcon}
                      style={{
                        background: `url(${icon}) 100% 100% / contain no-repeat`,
                        backgroundPosition: "center center",
                      }}
                    />
                    <p
                      className={s._offerItemDesciption}
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {!isMobile && (
            <div
              className={s._image}
              style={{
                background: `url(${image}) 100% 100% / cover no-repeat`,
              }}
            ></div>
          )}
          <div className={s._rent}>
            {!isMobile && (
              <Fragment>
                <div
                  className={s._rentTitle}
                  dangerouslySetInnerHTML={{ __html: rent.title }}
                />
                <div className={s._rentText}>{rent.text}</div>
                <div className={s._rentFeatures}>
                  {rent.items.map(({ icon, title }, index) => (
                    <div className={s._rentFeature}>
                      <div
                        className={s._rentFeatureIcon}
                        style={{
                          background: `url(${icon}) 100% 100% / contain no-repeat`,
                        }}
                      />
                      <p className={s._rentFeatureTitle}>{title}</p>
                    </div>
                  ))}
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
              </Fragment>
            )}
            {isMobile && (
              <Fragment>
                <div
                  className={s._rentTitle}
                  dangerouslySetInnerHTML={{ __html: rent.title }}
                />
                <div className={s._rentFeatures}>
                  {rent.items.map(({ icon, title }, index) => (
                    <div className={s._rentFeature}>
                      <div
                        className={s._rentFeatureIcon}
                        style={{
                          background: `url(${icon}) 100% 100% / contain no-repeat`,
                        }}
                      />
                      <p className={s._rentFeatureTitle}>{title}</p>
                    </div>
                  ))}
                </div>
                <div
                  className={s._image}
                  style={{
                    background: `url(${image}) 100% 100% / cover no-repeat`,
                  }}
                ></div>
                <div className={s._rentText}>{rent.text}</div>
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
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay={1}
        isOpen={videoIsOpen}
        videoId={video.id}
        onClose={setVideoOpen.bind(null, false)}
      />
    </section>
  );
};

export default Masterclass;
