import s from "./index.module.scss";
import cx from "classnames";
import camera from "./src/camera.svg";
import promotionBg from "./src/bg.png";
import photograph from "./src/photograph.svg";
import sertificatePromotion from "./src/sertificate.svg";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./swiper.scss";

const defaultData = {
  color: "#323232",
  bg: {
    image: promotionBg,
    width: "761px",
    height: "459px",
    top: "0",
    left: "-8.125%",
  },
  items: [
    {
      title: "Фотобудка в подарок",
      description: "при заказе<br />maxi пакета",
      icon: {
        svg: camera,
        desktop: {
          height: "105px",
          width: "139px",
          bottom: "-18px",
          right: "33px",
        },
        tablet: {
          width: "95px",
          height: "72px",
          bottom: "-12px",
          right: "23px",
        },
        mobile: {
          width: "78px",
          height: "59px",
          bottom: "-10px",
          right: "19px",
        },
      },
    },
    {
      title: "Фотограф бесплатно",
      description: "при заказе<br />от 5-ти столов",
      icon: {
        svg: photograph,
        desktop: {
          height: "127px",
          width: "123px",
          bottom: "-8px",
          right: "26px",
        },
        tablet: {
          width: "84px",
          height: "87px",
          bottom: "-5px",
          right: "18px",
        },
        mobile: {
          width: "68px",
          height: "71px",
          bottom: "-5px",
          right: "14px",
        },
      },
    },
    {
      title: "Сертификат 10 000 ₽",
      description: "при заказе maxi пакета",
      icon: {
        svg: sertificatePromotion,
        desktop: {
          height: "79px",
          width: "123px",
          bottom: "-23px",
          right: "25px",
        },
        tablet: {
          width: "84px",
          height: "54px",
          bottom: "-16px",
          right: "17px",
        },
        mobile: {
          width: "68px",
          height: "44px",
          bottom: "-13px",
          right: "14px",
        },
      },
    },
  ],
};

const sliderParams = {
  slidesPerView: 2,
};

const Promotion = ({ background = true, ...props }) => {
  const { color, items, bg } = props.data || defaultData;

  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <section className={cx(s.promotion, "promotion")}>
      {(background && isDesktop) && (
        <div
          className={s._bg}
          style={{
            background: `url(${bg.image}) 100% 100% / contain no-repeat`,
            width: bg.width,
            height: bg.height,
            top: bg.top,
            left: bg.left,
          }}
        ></div>
      )}
      {isDesktop && (
        <div className={s._content}>
          {items.map(({ title, description, icon }, index) => (
            <div className={s._item} key={index} style={{ background: color }}>
              <div
                className={s._itemTitle}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <div
                className={s._itemDescription}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div
                className={s._itemIcon}
                style={{
                  background: `url(${icon.svg}) 100% 100% no-repeat`,
                  height: icon.desktop.height,
                  width: icon.desktop.width,
                  bottom: icon.desktop.bottom,
                  right: icon.desktop.right,
                }}
              ></div>
            </div>
          ))}
        </div>
      )}
      {isTablet && (
        <div className={s._content}>
          <Swiper {...sliderParams} {...{ loop: isMobile }}>
            {items.map(({ title, description, icon }, index) => (
              <SwiperSlide key={index}>
                <div className={s._item} style={{ background: color }}>
                  <div
                    className={s._itemTitle}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <div
                    className={s._itemDescription}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <div
                    className={s._itemIcon}
                    style={{
                      background: `url(${icon.svg}) 100% 100% / contain no-repeat`,
                      height: icon.tablet.height,
                      width: icon.tablet.width,
                      bottom: icon.tablet.bottom,
                      right: icon.tablet.right,
                    }}
                  ></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {isMobile && (
        <div className={s._content}>
          <Swiper {...sliderParams} {...{ loop: isMobile }}>
            {items.map(({ title, description, icon }, index) => (
              <SwiperSlide key={index}>
                <div className={s._item} style={{ background: color }}>
                  <div
                    className={s._itemTitle}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <div
                    className={s._itemDescription}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <div
                    className={s._itemIcon}
                    style={{
                      background: `url(${icon.svg}) 100% 100% / contain no-repeat`,
                      height: icon.mobile.height,
                      width: icon.mobile.width,
                      bottom: icon.mobile.bottom,
                      right: icon.mobile.right,
                    }}
                  ></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default Promotion;
