import s from "./index.module.scss";
import ReactTypingEffect from "react-typing-effect";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import classname from "classnames";
import {
  makeHeaderDark,
  makeHeaderLight,
} from "../../redux/modules/headerColor";
import { connect } from "react-redux";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import bg from "./src/homeBg.png";
import { useMemo } from "react";
import { useCallback } from "react";

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
  }, []);

  const { bg, title, description, video } = useMemo(
    () => props.data || defaultData,
    []
  );

  const { isDesktop, isTablet, isMobile } = useMemo(() => props, [props]);

  /* Background Style */
  const bgStyle = useMemo(() => {
    if (isDesktop) {
      return {
        background: `url(${bg.desktop.image}) 100% 100% / contain no-repeat`,
        width: bg.desktop.width,
        height: bg.desktop.height,
        top: bg.desktop.top,
        right: bg.desktop.right,
      };
    } else if (isTablet) {
      return {
        background: `url(${bg.tablet.image}) 100% 100% / contain no-repeat`,
        width: bg.tablet.width,
        height: bg.tablet.height,
        top: bg.tablet.top,
        right: bg.tablet.right,
      };
    } else if (isMobile) {
      return {
        background: `url(${bg.mobile.image}) 100% 100% / contain no-repeat`,
        width: bg.mobile.width,
        height: bg.mobile.height,
        top: bg.mobile.top,
        right: bg.mobile.right,
      };
    }
  }, []);

  /* State */

  const [videoIsOpen, setVideoOpen] = useState(false);
  const [buttonIsHover, setButtonIsHover] = useState(false);

  /* Callbacks */
  const openVideo = useCallback(setVideoOpen.bind(null, true), []);
  const closeVideo = useCallback(setVideoOpen.bind(null, false), []);
  const buttonHover = useCallback(setButtonIsHover.bind(null, true), []);
  const buttonUnhover = useCallback(setButtonIsHover.bind(null, false), []);

  return (
    <section className={s.home}>
      <div className={s._bg} style={bgStyle}></div>

      <div className={s._content}>
        <div className={s._title} dangerouslySetInnerHTML={{ __html: title }} />
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
          onClick={openVideo}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonUnhover}
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
        onClose={closeVideo}
      />
    </section>
  );
};

export default connect(null, { makeHeaderLight })(Home);
