import s from "./index.module.scss";
import cx from "classnames";
import camera_desk from "./src/camera.svg";
import photograph_desk from "./src/photograph.svg";
import sertificate_desk from "./src/sertificate.svg";
import camera_tab from "./src/camera_tab.svg";
import photograph_tab from "./src/photograph_tab.svg";
import sertificate_tab from "./src/sertificate_tab.svg";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./swiper.scss";

const sliderParams = {
  slidesPerView: 2,
};

const Promotion = ({ background = true }) => {
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "screen and (min-width: 768px) and (max-width: 1023px)" });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  let camera, photograph, sertificate;
  if (isDesktop) {
    camera = camera_desk;
    photograph = photograph_desk;
    sertificate = sertificate_desk;
  }
  if (isTablet) {
    camera = camera_tab;
    photograph = photograph_tab;
    sertificate = sertificate_tab;
  }


  return (
    <section className={cx(s.promotion, "promotion")}>
      {background && <div className={s._bg}></div>}
      {isDesktop && (
        <div className={s._content}>
          <div className={s._item}>
            <div className={s._itemTitle}>Фотобудка в подарок</div>
            <div className={s._itemDescription}>
              при заказе
              <br />
              maxi пакета
            </div>
            <div
              className={s._itemIcon}
              style={{
                background: `url(${camera}) 100% 100% no-repeat`,
                height: "105px",
                width: "139px",
                top: "133px",
                right: "33px",
              }}
            ></div>
          </div>
          <div className={s._item}>
            <div className={s._itemTitle}>Фотограф бесплатно</div>
            <div className={s._itemDescription}>
              при заказе
              <br />
              от 5-ти столов
            </div>
            <div
              className={s._itemIcon}
              style={{
                background: `url(${photograph}) 100% 100% no-repeat`,
                height: "127px",
                width: "123px",
                top: "101px",
                right: "26px",
              }}
            ></div>
          </div>
          <div className={s._item}>
            <div className={s._itemTitle}>Сертификат 10 000 ₽</div>
            <div className={s._itemDescription}>при заказе maxi пакета</div>
            <div
              className={s._itemIcon}
              style={{
                background: `url(${sertificate}) 100% 100% no-repeat`,
                height: "79px",
                width: "123px",
                top: "164px",
                right: "25px",
              }}
            ></div>
          </div>
        </div>
      )}
      {isTablet && (
        <div className={s._content}>
          <Swiper {...sliderParams}>
            <SwiperSlide>
              <div className={s._item}>
                <div className={s._itemTitle}>Фотобудка в подарок</div>
                <div className={s._itemDescription}>
                  при заказе
                  <br />
                  maxi пакета
                </div>
                <div
                  className={s._itemIcon}
                  style={{
                    background: `url(${camera}) 100% 100% no-repeat`,
                    width: "95px",
                    height: "72px",
                    bottom: "-12px",
                    right: "23px",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s._item}>
                <div className={s._itemTitle}>Фотограф бесплатно</div>
                <div className={s._itemDescription}>
                  при заказе
                  <br />
                  от 5-ти столов
                </div>
                <div
                  className={s._itemIcon}
                  style={{
                    background: `url(${photograph}) 100% 100% no-repeat`,
                    width: "84px",
                    height: "87px",
                    bottom: "-5px",
                    right: "18px",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s._item}>
                <div className={s._itemTitle}>Сертификат 10 000 ₽</div>
                <div className={s._itemDescription}>при заказе maxi пакета</div>
                <div
                  className={s._itemIcon}
                  style={{
                    background: `url(${sertificate}) 100% 100% no-repeat`,
                    width: "84px",
                    height: "54px",
                    bottom: "-16px",
                    right: "17px",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default Promotion;
