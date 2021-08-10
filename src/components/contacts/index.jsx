import s from "./index.module.scss";
import cx from "classnames";
import yandexIcon from "./src/yandex.png";
import googleIcon from "./src/google.png";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Fragment } from "react";

const Contacts = (props) => {
  const { isDesktop, isTablet, isMobile } = props;

  return (
    <section className={s.contacts}>
      <div className={s._content}>
        <div className={s._info}>
          {isDesktop && <div className={s._title}>Контакты</div>}
          <div className={cx(s._item, s._item_phone_1)}>
            <div className={s._itemTitle}>Телефон</div>
            <a href="tel:+74950857604" className={s._itemPhone}>
              <span className={s._itemPhoneText}>+7 (495) 085-76-04</span>
            </a>
            <div className={s._itemDescription}>ежедневно с 9:00 до 21:00</div>
            <a href="tel:+74950857604" className={s._itemPhoneGetCall}>
              <span className={s._itemPhoneGetCallText}>заказать звонок</span>
            </a>
          </div>

          <div className={cx(s._item, s._item_email)}>
            <div className={s._itemTitle}>Почта</div>
            <a href="mailto:info@arenda-kazino.ru" className={s._itemMail}>
              <span className={s._itemMailText}>info@arenda-kazino.ru</span>
            </a>
          </div>

          <div className={cx(s._item, s._item_padding, s._item_phone_2)}>
            <a href="tel:+79258258573" className={s._itemPhone}>
              <span className={s._itemPhoneText}>+7 (925) 825-85-73</span>
            </a>
            <div className={s._itemDescription}>круглосуточно, WhatsApp</div>
            <a href="tel:+79258258573" className={s._itemPhoneGetCall}>
              <span className={s._itemPhoneGetCallText}>заказать звонок</span>
            </a>
          </div>

          <div className={cx(s._item, s._item_address)}>
            <div className={s._itemTitle}>Адрес</div>
            <p className={s._itemAddress}>
              Москва, Люблинская улица, 60 корп.2
            </p>
          </div>

          {isDesktop && (
            <Fragment>
              <div className={s._item}>
                <a
                  href="https://yandex.ru"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={s._itemButton}
                >
                  <div
                    className={s._itemButtonIcon}
                    style={{
                      background: `url(${yandexIcon}) 100% 100% no-repeat`,
                      width: "15px",
                      height: "25px",
                    }}
                  ></div>
                  <span className={s.itemButtonText}>Открыть в Я.Картах</span>
                </a>
              </div>

              <div className={s._item}>
                <a
                  href="https://google.ru"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={s._itemButton}
                >
                  <div
                    className={s._itemButtonIcon}
                    style={{
                      background: `url(${googleIcon}) 100% 100% no-repeat`,
                      width: "21px",
                      height: "25px",
                    }}
                  ></div>
                  <span className={s.itemButtonText}>
                    Открыть в Гугл-Картах
                  </span>
                </a>
              </div>
            </Fragment>
          )}
        </div>

        {(isTablet || isMobile) && (
          <div className={s._buttons}>
            <div className={s._item}>
              <a
                href="https://yandex.ru"
                target="_blank"
                rel="noreferrer noopener"
                className={s._itemButton}
              >
                <div
                  className={s._itemButtonIcon}
                  style={{
                    background: `url(${yandexIcon}) 100% 100% / contain no-repeat`,
                    width: isMobile ? "9px" : "15px",
                    height: isMobile ? "15px" : "25px",
                  }}
                ></div>
                <span className={s.itemButtonText}>Открыть в Я.Картах</span>
              </a>
            </div>

            <div className={s._item}>
              <a
                href="https://google.ru"
                target="_blank"
                rel="noreferrer noopener"
                className={s._itemButton}
              >
                <div
                  className={s._itemButtonIcon}
                  style={{
                    background: `url(${googleIcon}) 100% 100% / contain no-repeat`,
                    width: isMobile ? "13px" : "21px",
                    height: isMobile ? "15px" : "25px",
                  }}
                ></div>
                <span className={s.itemButtonText}>Открыть в Гугл-Картах</span>
              </a>
            </div>
          </div>
        )}

        <YMaps>
          <Map
            width="100%"
            height="100%"
            defaultState={{
              center: [55.672834, 37.737524],
              zoom: 13,
            }}
          >
            <Placemark geometry={[55.672834, 37.737524]} />
          </Map>
        </YMaps>
      </div>
    </section>
  );
};

export default Contacts;
