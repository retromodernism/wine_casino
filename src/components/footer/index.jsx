import s from "./index.module.scss";
import cx from "classnames";
import { ReactComponent as Tg } from "./src/tg.svg";
import { ReactComponent as Wa } from "./src/wa.svg";
import { ReactComponent as Fb } from "./src/fb.svg";
import { ReactComponent as Vk } from "./src/vk.svg";
import { ReactComponent as Inst } from "./src/inst.svg";
import { useState } from "react";
import * as Router from "react-router-dom";
import * as Scroll from "react-scroll";
import { Link } from "react-router-dom";
import { useReducer } from "react";

const defaultData = {
  textColor: "#323232", // цвет текста правого блока
  mainColor: "#323232", // цвет левого блока, лого, инпутов у формы
  iconColor: "#ffffff", // цвет иконок в футере
  innerTextColor: "#ffffff", // цвет текста в левом блоке
};

const Submit = ({ mainColor }) => {
  const [isHovered, setHover] = useState();
  return (
    <input
      type="submit"
      className={cx(s._formInput, s._formSubmit, {
        [s._formSubmit_hover]: isHovered,
      })}
      value="Отправить"
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
      style={{
        borderColor: mainColor,
        background: isHovered ? "none" : mainColor,
        boxShadow: `inset 0 0 0 1px ${mainColor}`,
      }}
    />
  );
};

const ComminucationWayOption = ({ onClick, mainColor, ...props }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <button
      className={cx(s._formCommunicationWayOption, {
        [s._formCommunicationWayOption_hover]: isHovered,
      })}
      onClick={onClick}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    >
      {props.children}
    </button>
  );
};

const Footer = (props) => {
  const { mainColor, innerTextColor, iconColor, textColor } =
    props.data || defaultData;

  const isMainPage = Router.useLocation().pathname === "/";

  const { isDesktop, isTablet, isMobile } = props;

  /* State */

  const HOVER_COMMUNICATION_WAY = "HOVER_WAY_COMMUNICATION";
  const UNHOVER_COMMUNICATION_WAY = "UNHOVER_WAY_COMMUNICATION";
  const CHANGE_COMMUNICATION_WAY = "CHANGE_COMMUNICATION_WAY";

  const communicationWays = [
    { communicationWay: "Телефон", placeholder: "Ваш телефон" },
    { communicationWay: "WhatsApp", placeholder: "Ваш WhatsApp" },
    { communicationWay: "Телеграм", placeholder: "Ваш телеграм" },
  ];

  const initialState = {
    communicationWayIsOpen: false,
    communicationWay: "Телефон",
    placeholder: "Ваш телефон",
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case HOVER_COMMUNICATION_WAY:
        return {
          ...state,
          communicationWayIsOpen: true,
        };
      case UNHOVER_COMMUNICATION_WAY:
        return {
          ...state,
          communicationWayIsOpen: false,
        };
      case CHANGE_COMMUNICATION_WAY:
        return {
          ...state,
          communicationWay: payload.communicationWay,
          placeholder: payload.placeholder,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  /* State Hooks */

  const openCommunicationSelectionPanel = () => {
    dispatch({ type: HOVER_COMMUNICATION_WAY, payload: {} });
  };

  const closeCommunicationSelectionPanel = () => {
    dispatch({ type: UNHOVER_COMMUNICATION_WAY, payload: {} });
  };

  const toggleCommunicationSelectionPanel = () => {
    if (state.communicationWayIsOpen) {
      closeCommunicationSelectionPanel();
    } else {
      openCommunicationSelectionPanel();
    }
  };

  const toggleCommunicationWay = (communicationItem) => {
    dispatch({ type: CHANGE_COMMUNICATION_WAY, payload: communicationItem });
  };

  return (
    <footer className={s.footer}>
      {(isTablet || isMobile) && (
        <form
          className={s._form}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Хендлер формы");
          }}
        >
          <div className={s._formTitle}>Оставьте заявку</div>
          <div className={s._formDescription}>
            Оставляйте заявку и наши менеджеры проконсультуруют и помогут
            подобрать оптимальное решение для вашего корпоратива.
          </div>
          <div className={s._formInputs}>
            <label className={s._inputLabel}>
              <input
                type="text"
                className={cx(s._formInput, s._formNameInput)}
                placeholder="Ваше имя"
                style={{ boxShadow: `inset 0 0 0 1px ${mainColor}` }}
              />
            </label>
            <div className={s._formPhoneInputWrapper}>
              <label className={s._inputLabel}>
                <input
                  type="text"
                  className={cx(s._formInput, s._formPhoneInput)}
                  placeholder={state.placeholder}
                  style={{ boxShadow: `inset 0 0 0 1px ${mainColor}` }}
                />
              </label>
              <button
                className={s._formOpenCommunicationWayButton}
                style={{
                  backgroundColor: mainColor,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  toggleCommunicationSelectionPanel();
                }}
                onMouseLeave={closeCommunicationSelectionPanel}
              />
              {state.communicationWayIsOpen && (
                <div
                  className={s._formSelectCommunicationWay}
                  onMouseEnter={openCommunicationSelectionPanel}
                  onMouseLeave={closeCommunicationSelectionPanel}
                  style={{ backgroundColor: mainColor }}
                >
                  {communicationWays.map((item, index) => (
                    <ComminucationWayOption
                      onClick={(e) => {
                        e.preventDefault();
                        toggleCommunicationWay(item);
                        closeCommunicationSelectionPanel();
                      }}
                      key={index}
                    >
                      {item.communicationWay}
                    </ComminucationWayOption>
                  ))}
                </div>
              )}
            </div>
            <label className={s._inputLabel}>
              <Submit mainColor={mainColor} />
            </label>
          </div>
        </form>
      )}
      <div className={s._content}>
        <div className={s._left} style={{ background: mainColor }}>
          {(isDesktop || isMobile) && (
            <div className={s._socials}>
              <div className={s._socialsLeft}>
                <a
                  href="/"
                  className={s._socialLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Tg />
                </a>
                <a
                  href="/"
                  className={s._socialLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Wa />
                </a>
              </div>
              <div className={s._socialsRight}>
                <a
                  href="/"
                  className={s._socialLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Fb fill={iconColor} />
                </a>
                <a
                  href="/"
                  className={s._socialLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Vk fill={iconColor} />
                </a>
                <a
                  href="/"
                  className={s._socialLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Inst fill={iconColor} />
                </a>
              </div>
            </div>
          )}

          <div className={cx(s._contacts, s._contacts_top)}>
            <a href="tel:+74950857604" className={s._contactsPhone}>
              <span style={{ color: innerTextColor }}>+7 (495) 085-76-04</span>
            </a>
            <div
              className={s._contactsDescription}
              style={{ color: innerTextColor }}
            >
              ежедневно с 9:00 до 21:00
            </div>
            <div className={s._requestCall} style={{ color: innerTextColor }}>
              заказать звонок
            </div>
          </div>
          <div className={cx(s._contacts, s._contacts_bottom)}>
            <a href="tel:+74950857604" className={s._contactsPhone}>
              <span style={{ color: innerTextColor }}>+7 (495) 085-76-04</span>
            </a>
            <div
              className={s._contactsDescription}
              style={{ color: innerTextColor }}
            >
              ежедневно с 9:00 до 21:00
            </div>
            <div className={s._requestCall} style={{ color: innerTextColor }}>
              заказать звонок
            </div>
          </div>

          {isTablet && (
            <div className={s._socials}>
              <div className={s._socialsRight}>
                <a
                  href="/"
                  className={s._socialLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Fb fill={iconColor} />
                </a>
                <a
                  href="/"
                  className={s._socialLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Vk fill={iconColor} />
                </a>
                <a
                  href="/"
                  className={s._socialLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Inst fill={iconColor} />
                </a>
              </div>
            </div>
          )}

          {isMobile && <div className={s._rectangle}></div>}

          <a
            href="/"
            className={s._confidLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={s._confid} style={{ color: innerTextColor }}>
              Политика конфиденциальности
            </span>
          </a>
          {isDesktop && <div className={s._rectangle}></div>}
        </div>
        <div className={s._right}>
          {isMainPage ? (
            <Scroll.Link to="header" smooth className={s._logo}>
              <div
                className={s._logoImage}
                style={{ background: mainColor }}
              ></div>
            </Scroll.Link>
          ) : (
            <Router.Link to="/" className={s._logo}>
              <div
                className={s._logoImage}
                style={{ background: mainColor }}
              ></div>
            </Router.Link>
          )}

          <div className={s._links}>
            <Link to="/" className={s._link}>
              <span className={s._linkText} style={{ color: textColor }}>
                Кулинарное казино
              </span>
            </Link>
            <Link to="/klassicheskoe-kazino" className={s._link}>
              <span className={s._linkText} style={{ color: textColor }}>
                Классическое казино
              </span>
            </Link>
            <Link to="/attraction" className={s._link}>
              <span className={s._linkText} style={{ color: textColor }}>
                Аттракционы
              </span>
            </Link>
            {/* <a href="/" className={s._link}>
              <span className={s._linkText} style={{ color: textColor }}>
                Наши программы
              </span>
            </a> */}
            <Link to="/news" className={s._link}>
              <span className={s._linkText} style={{ color: textColor }}>
                Новости
              </span>
            </Link>
          </div>
          {isDesktop && (
            <form
              className={s._form}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Хендлер формы");
              }}
            >
              <div className={s._formTitle} style={{ color: textColor }}>
                Оставьте заявку
              </div>
              <div className={s._formDescription} style={{ color: textColor }}>
                Оставляйте заявку и наши менеджеры проконсультуруют и помогут
                подобрать оптимальное решение для вашего корпоратива.
              </div>
              <label>
                <input
                  type="text"
                  className={cx(s._formInput, s._formNameInput)}
                  placeholder="Ваше имя"
                  style={{ borderColor: mainColor }}
                />
              </label>
              <div className={s._formPhoneInputWrapper}>
                <label>
                  <input
                    type="text"
                    className={cx(s._formInput, s._formPhoneInput)}
                    placeholder={state.placeholder}
                    style={{ borderColor: mainColor }}
                  />
                </label>
                <button
                  className={s._formOpenCommunicationWayButton}
                  style={{
                    backgroundColor: mainColor,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCommunicationSelectionPanel();
                  }}
                  onMouseLeave={closeCommunicationSelectionPanel}
                />
                {state.communicationWayIsOpen && (
                  <div
                    className={s._formSelectCommunicationWay}
                    onMouseEnter={openCommunicationSelectionPanel}
                    onMouseLeave={closeCommunicationSelectionPanel}
                    style={{ backgroundColor: mainColor }}
                  >
                    {communicationWays.map((item, index) => (
                      <ComminucationWayOption
                        onClick={(e) => {
                          e.preventDefault();
                          toggleCommunicationWay(item);
                          closeCommunicationSelectionPanel();
                        }}
                        key={index}
                      >
                        {item.communicationWay}
                      </ComminucationWayOption>
                    ))}
                  </div>
                )}
              </div>
              <label>
                <Submit mainColor={mainColor} />
              </label>
            </form>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
