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

const Home = (props) => {
  /* Props decomposition */
  const { logo, title, video, features, chips, background, greenBgMobile } =
    props.data;

  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* Bg Style */

  let bgStyle;
  if (isDesktop) {
    bgStyle = {
      background: `url(${background.desktop.image}) 100% 100% / contain no-repeat`,
      width: background.desktop.width,
      height: background.desktop.height,
      position: "absolute",
      top: background.desktop.top,
      right: background.desktop.right,
    };
  } else if (isTablet) {
    bgStyle = {
      background: `url(${background.tablet.image}) 100% 100% / contain no-repeat`,
      width: background.tablet.width,
      height: background.tablet.height,
      position: "absolute",
      top: background.tablet.top,
      right: background.tablet.right,
    };
  } else if (isMobile) {
    bgStyle = {
      background: `url(${background.mobile.image}) 100% 100% / contain no-repeat`,
      width: background.mobile.width,
      height: background.mobile.height,
      position: "absolute",
      top: background.mobile.top,
      right: background.mobile.right,
    };
  }

  /* Change header color theme */

  useLayoutEffect(() => {
    makeHeaderDark();
  });

  /* Local state */

  const [videoIsOpen, setVideoOpen] = useState(false);
  const [buttonIsHover, setButtonIsHover] = useState(false);

  return (
    <section className={s.home}>
      {greenBgMobile && isMobile ? (
        <div
          className={s._bg0}
          style={{
            width: greenBgMobile.width,
            height: greenBgMobile.height,
            top: greenBgMobile.top,
            right: greenBgMobile.right,
          }}
        ></div>
      ) : (
        <div className={s._bg0}></div>
      )}
      <div className={s._bg} style={bgStyle} />
      <div className={s._bg1}></div>
      <div
        className={s._bg2}
        style={{
          background: `url(${chips.left}) 100% 100% / contain no-repeat`,
        }}
      ></div>
      <div className={s._bg3}></div>
      <div className={s._bg4}></div>
      <div
        className={s._bg5}
        style={{
          background: `url(${chips.right}) 100% 100% / contain no-repeat`,
        }}
      ></div>
      <div className={s._bg6}></div>

      <div className={s._content}>
        <div
          className={s._title}
          dangerouslySetInnerHTML={{ __html: title.text }}
          style={{ color: title.color }}
        ></div>
        <div className={s._subtitle}>
          * все законно, мы не используем настоящие деньги
        </div>
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
        <button
          className={classname(s._videoButton, {
            [s._videoButton_hover]: buttonIsHover,
          })}
          style={{
            background: buttonIsHover ? "none" : video.color,
            boxShadow: buttonIsHover
              ? `inset 0 0 0 2px ${video.color}`
              : "none",
          }}
          onClick={setVideoOpen.bind(null, true)}
          onMouseEnter={setButtonIsHover.bind(null, true)}
          onMouseLeave={setButtonIsHover.bind(null, false)}
        >
          <p>Смотреть видео</p>
          <div className={s._videoButtonIcon}></div>
        </button>
        <div className={s._features}>
          {features.items.map(({ top, bottom }, index) => (
            <div className={s._feature} key={index}>
              {top.type === "text" ? (
                <div
                  className={s._featureNumber}
                  style={{ color: features.color }}
                  dangerouslySetInnerHTML={{ __html: top.text }}
                />
              ) : (
                <div
                  className={s._featureIcon}
                  style={{
                    backgroundColor: features.color,
                    WebkitMaskImage: `url(${top.icon})`,
                    maskImage: `url(${top.icon})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center center",
                    maskPosition: "center center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              )}
              <p
                className={s._featureTitle}
                dangerouslySetInnerHTML={{ __html: bottom.description }}
              />
            </div>
          ))}
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

export default connect((state) => ({}), { makeHeaderDark })(Home);
