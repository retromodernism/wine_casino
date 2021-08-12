import s from "./index.module.scss";
import ReactTypingEffect from "react-typing-effect";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import cx from "classnames";
import { makeHeaderLight } from "../../redux/modules/headerColor";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
  makeHeaderLight();
  const { isDesktop, isTablet, isMobile } = props;

  /* Data */
  const half =
    casinos.filter(({ type }) => type === "classicCasino").length / 2;

  const classicCasinos = casinos.filter(
    ({ type }, index) => type === "classicCasino"
  );

  const foodCasinos = classicCasinos
    .filter((casino, index) => index < half)
    .map(({ url, title }) => ({ title, href: url }));

  const drinkCasinos = classicCasinos
    .filter((casino, index) => index >= half)
    .map(({ url, title }) => ({ title, href: url }));

  /* State */
  const [videoIsOpen, setVideoOpen] = useState(false);
  // const [buttonIsHover, setButtonIsHover] = useState(false);
  const [showedFoodCasinos, setShowedFoodCasinos] = useState(100);
  const [showedDrinkCasinos, setShowedDrinkCasinos] = useState(100);

  const hasShowMoreFoodCasinos = showedFoodCasinos < foodCasinos.length;
  const hasShowMoreDrinkCasinos = showedDrinkCasinos < drinkCasinos.length;

  const showMoreFoodCasinos = setShowedFoodCasinos.bind(
    null,
    showedFoodCasinos + 2
  );
  const showMoreDrinkCasinos = setShowedDrinkCasinos.bind(
    null,
    showedDrinkCasinos + 2
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
        <div className={s._title}>
          Классическое
          <br />
          фан-казино
        </div>
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
              <p className={s._featuresDescription}>
                У нас так же есть классические виды казино. Такие как покер,
                рулетка, блэкджэк, крэпс. Особенно популярен в последнее время
                гэмбл. Это один из видов рулетки.
              </p>
            </div>
          </div>
          {isDesktop && (
            <div className={cx(s._column, s._links)}>
              <div className={s._linksColumn}>
                {foodCasinos.map((item, index) =>
                  index < showedFoodCasinos ? (
                    <LinkItem {...item} key={index} />
                  ) : null
                )}
                {hasShowMoreFoodCasinos && (
                  <button
                    className={s._showMore}
                    onClick={showMoreFoodCasinos}
                  />
                )}
              </div>
              <div className={s._linksColumn}>
                {drinkCasinos.map((item, index) =>
                  index < showedDrinkCasinos ? (
                    <LinkItem {...item} key={index} />
                  ) : null
                )}
                {hasShowMoreDrinkCasinos && (
                  <button
                    className={s._showMore}
                    onClick={showMoreDrinkCasinos}
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
