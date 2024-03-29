import s from "./index.module.scss";
import ReactTypingEffect from "react-typing-effect";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import cx from "classnames";
import { ReactComponent as Feature1 } from "./src/featureIcon_1.svg";
import { ReactComponent as Feature2 } from "./src/featureIcon_2.svg";
import { ReactComponent as Feature3 } from "./src/featureIcon_3.svg";
import { makeHeaderLight } from "../../redux/modules/headerColor";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";

const scrollDown = (ref) => {
  const element = ref.current;
  const currentScrollPosition = element.scrollTop;
  const newScrollPosition = currentScrollPosition + 97;
  element.scroll({ left: 0, top: newScrollPosition, behavior: "smooth" });
};

const LinkItem = ({ title, href }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <Link
      to={href}
      className={cx(s._linkItem, { [s._linkItem_hover]: isHovered })}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    >
      <span className={s._linkItemtext}>{title}</span>
    </Link>
  );
};

const HomeCoulinaryCasino = ({
  casinos,
  background,
  makeHeaderLight,
  ...props
}) => {
  useEffect(() => {
    makeHeaderLight();
  }, []);

  const { isDesktop, isTablet, isMobile } = useMemo(() => props, [props]);

  /* Data */
  const foodCasinos = useMemo(
    () =>
      casinos
        .filter(
          ({ type, foodType }) =>
            type === "foodCasino" && foodType === "Съедобное"
        )
        .map(({ url, title }) => ({ title, href: url })),
    []
  );

  const drinkCasinos = useMemo(
    () =>
      casinos
        .filter(
          ({ type, foodType }) => type === "foodCasino" && foodType === "Drink"
        )
        .map(({ url, title }) => ({ title, href: url })),
    []
  );

  /* State */

  const [videoIsOpen, setVideoOpen] = useState(false);

  const foodCasinosIsScrolling = useMemo(() => foodCasinos.length > 5, []);
  const drinkCasinosIsScrolling = useMemo(() => drinkCasinos.length > 5, []);

  const foodLinksList = useRef(null);
  const drinkLinksList = useRef(null);

  const scrollFoodCasinosDown = useCallback(
    scrollDown.bind(null, foodLinksList),
    []
  );

  const scrollDrinkCasinosDown = useCallback(
    scrollDown.bind(null, drinkLinksList),
    []
  );

  return (
    <section
      className={s.home}
      style={{
        background: `url(${background}) 100% 100% / cover no-repeat`,
        backgroundPosition: "center center",
      }}
    >
      <div className={s._content}>
        <div className={s._title}>Кулинарное фан-казино</div>
        <div className={s._grid}>
          <div className={s._column}>
            <div className={s._subtitle}>
              * все законно, мы не используем настоящие деньги
            </div>
            {isTablet && (
              <div className={s._typingText}>
                <ReactTypingEffect
                  typingDelay={0}
                  speed={100}
                  eraseSpeed={100}
                  eraseDelay={3000}
                  text={[
                    "для вечеринок",
                    "на день рождения",
                    "на свадьбу",
                    "на корпоратив",
                    "для частного мероприятия",
                  ]}
                />
              </div>
            )}
            <div className={s._features}>
              <div className={s._feature}>
                <Feature1 />
                <p className={s._featureTitle}>Нанесение логотипа</p>
              </div>
              <div className={s._feature}>
                <Feature2 />
                <p className={s._featureTitle}>Аренда стола от 2 часов</p>
              </div>
              <div className={s._feature}>
                <Feature3 />
                <p className={s._featureTitle}>Необычный формат игры</p>
              </div>
            </div>
          </div>
          {isDesktop && (
            <div className={cx(s._column, s._links)}>
              <div className={s._linksColumn}>
                <div className={s._linksTitle}>Съедобное</div>

                <div
                  className={cx(s._linksList, {
                    [s._linksList_scroll]: foodCasinosIsScrolling,
                  })}
                  ref={foodLinksList}
                >
                  {foodCasinos.map((item, index) => (
                    <LinkItem {...item} key={index} />
                  ))}
                </div>

                {foodCasinosIsScrolling && (
                  <button
                    className={s._showMore}
                    onClick={scrollFoodCasinosDown}
                  />
                )}
              </div>

              <div className={s._linksColumn}>
                <div className={s._linksTitle}>Drink</div>

                <div
                  className={cx(s._linksList, {
                    [s._linksList_scroll]: drinkCasinosIsScrolling,
                  })}
                  ref={drinkLinksList}
                >
                  {drinkCasinos.map((item, index) => (
                    <LinkItem {...item} key={index} />
                  ))}
                </div>

                {drinkCasinosIsScrolling && (
                  <button
                    className={s._showMore}
                    onClick={scrollDrinkCasinosDown}
                  />
                )}
              </div>
            </div>
          )}
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

export default connect((state) => ({ casinos: state.casinos.casinos }), {
  makeHeaderLight,
})(HomeCoulinaryCasino);
