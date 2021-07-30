import s from "./index.module.scss";
import "./swiper.scss";
import cx from "classnames";
import {
  makeHeaderDark,
  makeHeaderLight,
} from "../../redux/modules/headerColor";
import { connect } from "react-redux";
import { useLayoutEffect, useState, Fragment } from "react";
import image1 from "./src/1.png";
import image2 from "./src/2.png";
import image3 from "./src/3.png";
import image4 from "./src/4.png";
import image5 from "./src/5.png";
import image6 from "./src/6.png";
import image7 from "./src/7.png";
import image8 from "./src/8.png";
import image9 from "./src/9.png";
import prevArrow from "./src/arrow_prev.svg";
import nextArrow from "./src/arrow_next.svg";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";

const croupiers = [
  {
    image: image1,
    title: "Анна Блажевич",
    casino: "Рулетка",
  },
  {
    image: image2,
    title: "Агапов Алексей",
    casino: "Покер",
  },
  {
    image: image3,
    title: "Валерия Свиридова",
    casino: "Чайное казино",
  },
  {
    image: image4,
    title: "Евгений Хорев",
    casino: "Крэпс",
  },
  {
    image: image5,
    title: "Анна Блажевич",
    casino: "Сырное казино",
  },
  {
    image: image6,
    title: "Ян Плачинта",
    casino: "Холдем",
  },
  {
    image: image7,
    title: "Олеся Сыч",
    casino: "Мясное казино",
  },
  {
    image: image8,
    title: "Наиль Кайдани",
    casino: "Блэк Джэк",
  },
  {
    image: image9,
    title: "Мария Копылова",
    casino: "Шоколадное казино",
  },
];

/* Slider Params */

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={cx(className, s._arrow, s._arrow_prev)}
      onClick={onClick}
      style={{
        ...style,
        background: `url(${prevArrow}) 100% 100% / contain no-repeat`,
        outline: "unset",
        color: "unset",
      }}
    />
  );
};

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={cx(className, s._arrow, s._arrow_next)}
      onClick={onClick}
      style={{
        ...style,
        background: `url(${nextArrow}) 100% 100% / contain no-repeat`,
        outline: "unset",
        color: "unset",
      }}
    />
  );
};

const sliderParams = {
  // autoplay: true,
  // autoplaySpeed: 5000,
  // pauseOnHover: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  className: s._slider,
  // customPaging: (i) => (
  //   <a>
  //     <img src={`${dot}`} className={s._paginationDot} />
  //   </a>
  // ),
  // dots: true,
};

const Item = ({ image, title, casino }) => {
  const [isHover, setHover] = useState(false);
  return (
    <div
      className={cx(s._item, { [s._item_hover]: isHover })}
      style={{
        background: isHover
          ? `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${image}) 100% 100% / cover no-repeat`
          : `url(${image}) 100% 100% / cover no-repeat`,
      }}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    >
      {isHover && (
        <Fragment>
          <div className={s._itemTitle}>{title}</div>
          <div className={s._itemCasino}>{casino}</div>
        </Fragment>
      )}
    </div>
  );
};

const OurCroupiers = (props) => {
  useLayoutEffect(() => {
    makeHeaderDark();
  });

  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <section className={s.ourCroupiers}>
      <div className={s._content}>
        <div className={s._title}>Наши крупье</div>
        <div className={s._description}>
          Наши сомелье имеют большой опыт и обширные знания в сфере кулинарного
          казино. Они расскажут вам такие факты о разных сортах напитков или
          видах сыра, мяса и прочей еды. Так же есть крупье классического
          казино.
        </div>
        <div className={s._croupiers}>
          {isDesktop &&
            croupiers.map((croupier, index) => (
              <Item {...croupier} key={index} />
            ))}

          {(isTablet || isMobile) && (
            <Slider {...sliderParams}>
              {croupiers.map((croupier, index) => (
                <Item {...croupier} key={index} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default connect(null, { makeHeaderDark })(OurCroupiers);
