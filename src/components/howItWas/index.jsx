import s from "./index.module.scss";
import cx from "classnames";
import Slider from "react-slick";
import image1 from "./src/image1.png";
import image2 from "./src/image2.png";
import image3 from "./src/image3.png";
import image4 from "./src/image4.png";
import bg from "./src/bg.png";
import prev from "./src/prev.svg";
import prevHover from "./src/prev_hover.svg";
import next from "./src/next.svg";
import nextHover from "./src/next_hover.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const defaultData = {
  title: "Как это было",
  color: "#A2000C",
  images: [image1, image2, image3, image4, image4],
  bg: {
    image: bg,
    height: "630px",
    width: "630px",
    top: "-89px",
    left: "-15.47%",
  },
};

/* Slick settings */

const NextArrow = ({ className, style, onClick, color }) => {
  const [isHovered, setHover] = useState(false);
  console.log(color);
  return (
    <div
      className={cx(className, s._arrow_wrapper, s._arrow_wrapper_next, {
        [s._arrow_wrapper_hover]: isHovered,
      })}
      onClick={onClick}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
      style={{ ...style, display: "flex", outline: "unset", color: "unset" }}
    >
      {isHovered && (
        <div className={s._arrowBg} style={{ background: color }} />
      )}
      <div
        className={cx(s._arrow, s._arrow_next)}
        style={{
          ...style,
          background: isHovered ? "#ffffff" : color,
        }}
      />
    </div>
  );
};

const PrevArrow = ({ className, style, onClick, color }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <div
      className={cx(className, s._arrow_wrapper, s._arrow_wrapper_prev, {
        [s._arrow_wrapper_hover]: isHovered,
      })}
      onClick={onClick}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
      style={{ ...style, display: "flex", outline: "unset", color: "unset" }}
    >
      {isHovered && (
        <div className={s._arrowBg} style={{ background: color }} />
      )}
      <div
        className={cx(s._arrow, s._arrow_prev)}
        style={{
          ...style,
          background: isHovered ? "#ffffff" : color,
        }}
      />
    </div>
  );
};

const HowItWas = (props) => {
  const { color, images, title, bg } = props.data || defaultData;

  /* Slider Params */
  const sliderParams = {
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow color={color} />,
    prevArrow: <PrevArrow color={color} />,
    className: s._slider,
  };

  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  let slidesToShow;
  if (isDesktop) {
    slidesToShow = 4;
  }
  if (isTablet) {
    slidesToShow = 2;
  }
  if (isMobile) {
    slidesToShow = 1;
  }

  return (
    <section className={s.howItWas}>
      {(bg && isDesktop) && (
        <div
          className={s._bg}
          style={{
            background: `url(${bg.image}) 100% 100% / contain no-repeat`,
            width: bg.width,
            height: bg.height,
            top: bg.top,
            left: bg.left,
          }}
        />
      )}
      <div className={s._bg1} />
      <div className={s._content}>
        <div className={s._title}>{title}</div>
        <Slider {...sliderParams} {...{ slidesToShow }}>
          {images.map((image, index) => (
            <div className={s._imageSlide} key={index}>
              <img src={image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HowItWas;
