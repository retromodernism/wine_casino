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
import bg from "./src/homeBg.png";

const defaultData = {
  bg: {
    desktop: {
      image: bg,
      width: "745px",
      height: "643px",
      top: "220px",
      right: "189px",
    },
    tablet: {
      image: bg,
      width: "521px",
      height: "450px",
      top: "94px",
      right: "-107px",
    },
    mobile: {
      image: bg,
      width: "226px",
      height: "195px",
      top: "48px",
      right: "-64px",
    },
  },
  title: "Покер",
  description:
    "Вряд ли кто-то не слышал о столь захватывающей карточной игре как покер. Правила ее очень просты, а победитель определяется преимущественно удачей. Выездной набор для покера – это удобно, стильно и полностью легально, так как в нем не задействованы настоящие деньги.",
  video: {
    id: "fZd3IMBfMB0",
  },
};

const Home = ({ makeHeaderLight, ...props }) => {
  useLayoutEffect(() => {
    makeHeaderLight();
  });

  const { bg, title, description, video } = props.data || defaultData;

  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* Background Style */
  let bgStyle;
  if (isDesktop) {
    bgStyle = {
      background: `url(${bg.desktop.image}) 100% 100% / contain no-repeat`,
      width: bg.desktop.width,
      height: bg.desktop.height,
      top: bg.desktop.top,
      right: bg.desktop.right,
    };
  } else if (isTablet) {
    bgStyle = {
      background: `url(${bg.tablet.image}) 100% 100% / contain no-repeat`,
      width: bg.tablet.width,
      height: bg.tablet.height,
      top: bg.tablet.top,
      right: bg.tablet.right,
    };
  } else if (isMobile) {
    bgStyle = {
      background: `url(${bg.mobile.image}) 100% 100% / contain no-repeat`,
      width: bg.mobile.width,
      height: bg.mobile.height,
      top: bg.mobile.top,
      right: bg.mobile.right,
    };
  }

  /* State */

  const [videoIsOpen, setVideoOpen] = useState(false);
  const [buttonIsHover, setButtonIsHover] = useState(false);

  return (
    <section className={s.home}>
      <div className={s._bg} style={bgStyle}></div>

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

export default connect(null, { makeHeaderLight })(Home);
