import s from "./index.module.scss";
import Typical from "react-typical";
import ReactTypingEffect from "react-typing-effect";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import classname from "classnames";
import { ReactComponent as Loupe } from "./src/loupe.svg";
import { ReactComponent as Format } from "./src/format.svg";
import {
  makeHeaderDark,
  makeHeaderLight,
} from "../../redux/modules/headerColor";
import { connect } from "react-redux";
import { useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Home = ({
  bg = "",
  title = "",
  description = "",
  makeHeaderLight,
  ...props
}) => {
  useLayoutEffect(() => {
    makeHeaderLight();
  });

  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* State */

  const [videoIsOpen, setVideoOpen] = useState(false);
  const [buttonIsHover, setButtonIsHover] = useState(false);

  return (
    <section className={s.home}>
      <div
        className={s._bg}
        style={{ background: `url(${bg}) 100% 100% / contain no-repeat` }}
      ></div>

      <div className={s._content}>
        <div className={s._title}>{title}</div>
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

        <div className={s._description}>{description}</div>

        <button
          className={classname(s._videoButton, {
            [s._videoButton_hover]: buttonIsHover,
          })}
          onClick={setVideoOpen.bind(null, true)}
          onMouseEnter={setButtonIsHover.bind(null, true)}
          onMouseLeave={setButtonIsHover.bind(null, false)}
        >
          <p>Смотреть видео</p>
          <div className={s._videoButtonIcon}></div>
        </button>

        {(isTablet || isMobile) && (
          <Link to="/klassicheskoe-kazino" className={s._backToAll}>
            <span>Вернуться ко всем видам</span>
          </Link>
        )}

        {/* <div className={s._features}>
          <div className={s._feature}>
            <div className={s._featureNumber}>4</div>
            <p className={s._featureTitle}>сорта вина</p>
          </div>
          <div className={s._feature}>
            <Loupe
              style={{ marginTop: "3px", width: "32px", height: "32px" }}
            />
            <p className={s._featureTitle}>интересные факты</p>
          </div>
          <div className={s._feature}>
            <Format style={{ width: "46px", height: "35px" }} />
            <p className={s._featureTitle}>новый формат</p>
          </div>
        </div> */}
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

export default connect(null, { makeHeaderLight })(Home);
