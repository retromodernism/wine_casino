import s from "./index.module.scss";
import cx from "classnames";
import Slider from "react-slick";
import image1 from "./src/image1.png";
import image2 from "./src/image2.png";
import image3 from "./src/image3.png";
import image4 from "./src/image4.png";
import prev from "./src/prev.svg";
import prevHover from "./src/prev_hover.svg";
import next from "./src/next.svg";
import nextHover from "./src/next_hover.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

/* Slick settings */

const NextArrow = ({ className, style, onClick }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <div
      className={cx(className, s._arrow, s._arrow_next, {
        [s._arrow_hover]: isHovered,
      })}
      onClick={onClick}
      style={{
        ...style,
        background: `url(${isHovered ? nextHover : next}) 100% 100% no-repeat`,
        outline: "unset",
        color: "unset",
        top: "-70px",
        right: "27px",
      }}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    />
  );
};
const PrevArrow = ({ className, style, onClick }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <div
      className={cx(className, s._arrow, s._arrow_prev, {
        [s._arrow_hover]: isHovered,
      })}
      onClick={onClick}
      style={{
        ...style,
        background: `url(${isHovered ? prevHover : prev}) 100% 100% no-repeat`,
        outline: "unset",
        color: "unset",
        top: "-70px",
        left: "calc(100% - 93px)",
      }}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    />
  );
};

const sliderParams = {
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  className: s._slider,
};

const HowItWas = (props) => {
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

  return (
    <section className={s.howItWas}>
      <div className={s._bg}></div>
      <div className={s._bg1}></div>
      <div className={s._content}>
        <div className={s._title}>Как это было</div>
        <Slider {...sliderParams} {...{ slidesToShow }}>
          <div className={s._imageSlide}>
            <img src={image1} alt="" />
          </div>
          <div className={s._imageSlide}>
            <img src={image2} alt="" />
          </div>
          <div className={s._imageSlide}>
            <img src={image3} alt="" />
          </div>
          <div className={s._imageSlide}>
            <img src={image4} alt="" />
          </div>
          <div className={s._imageSlide}>
            <img src={image1} alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HowItWas;
