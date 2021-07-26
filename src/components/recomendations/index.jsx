import s from "./index.module.scss";
import cx from "classnames";
import cheese from "./src/cheese.png";
import fence from "./src/fence.png";
import cash from "./src/cash.png";
import { ReactComponent as Plus } from "./src/plus.svg";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./swiper.scss";
import { Fragment } from "react";

const Recomendations = (props) => {
  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <section className={cx(s.recomendations, "recomendations")}>
      <div className={s._content}>
        <div className={s._title}>Рекомендуем вам</div>
        {isDesktop && (
          <Fragment>
            <div className={s._item}>
              <div className={s._itemImageWrapper}>
                <img src={cheese} alt="" className={s._itemImage} />
              </div>
              <div className={s._itemInfo}>
                <div className={s._itemInfoTop}>
                  <div className={s._itemInfoTitle}>Сырное казино</div>
                  <div className={s._itemInfoDescription}>Medium пакет</div>
                </div>
                <div className={s._itemInfoBottom}>
                  <div className={s._itemInfoPriceTitle}>Цена:</div>
                  <div className={s._itemInfoPriceCount}></div>
                  <div className={s._itemInfoPrice}>65 500 ₽</div>
                  <button className={s._itemInfoPlus}>
                    <Plus />
                  </button>
                </div>
              </div>
            </div>

            <div className={s._item}>
              <div className={s._itemImageWrapper}>
                <img src={fence} alt="" className={s._itemImage} />
              </div>
              <div className={s._itemInfo}>
                <div className={s._itemInfoTop}>
                  <div className={s._itemInfoTitle}>Столбики ограждения</div>
                  <div className={s._itemInfoDescription}></div>
                </div>
                <div className={s._itemInfoBottom}>
                  <div className={s._itemInfoPriceTitle}>Цена:</div>
                  <div className={s._itemInfoPriceCount}></div>
                  <div className={s._itemInfoPrice}>1 000 ₽</div>
                  <button className={s._itemInfoPlus}>
                    <Plus />
                  </button>
                </div>
              </div>
            </div>

            <div className={s._item}>
              <div className={s._itemImageWrapper}>
                <img src={cash} alt="" className={s._itemImage} />
              </div>
              <div className={s._itemInfo}>
                <div className={s._itemInfoTop}>
                  <div className={s._itemInfoTitle}>Брендирование фан-мани</div>
                  <div className={s._itemInfoDescription}>
                    Курирует работу крупье
                  </div>
                </div>
                <div className={s._itemInfoBottom}>
                  <div className={s._itemInfoPriceTitle}>Цена:</div>
                  <div className={s._itemInfoCount}>100 купюр</div>
                  <div className={s._itemInfoPrice}>500 ₽</div>
                  <button className={s._itemInfoPlus}>
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
          </Fragment>
        )}
        {isTablet && (
          <Swiper
            {...{
              slidesPerView: "1",
              spaceBetween: 10,
            }}
          >
            <SwiperSlide key={0}>
              <div className={s._item}>
                <div className={s._itemImageWrapper}>
                  <img src={cheese} alt="" className={s._itemImage} />
                </div>
                <div className={s._itemInfo}>
                  <div className={s._itemInfoTop}>
                    <div className={s._itemInfoTitle}>Сырное казино</div>
                    <div className={s._itemInfoDescription}>Medium пакет</div>
                  </div>
                  <div className={s._itemInfoBottom}>
                    <div className={s._itemInfoPriceTitle}>Цена:</div>
                    <div className={s._itemInfoPriceCount}></div>
                    <div className={s._itemInfoPrice}>65 500 ₽</div>
                    <button className={s._itemInfoPlus}>
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={1}>
              <div className={s._item}>
                <div className={s._itemImageWrapper}>
                  <img src={fence} alt="" className={s._itemImage} />
                </div>
                <div className={s._itemInfo}>
                  <div className={s._itemInfoTop}>
                    <div className={s._itemInfoTitle}>Столбики ограждения</div>
                    <div className={s._itemInfoDescription}></div>
                  </div>
                  <div className={s._itemInfoBottom}>
                    <div className={s._itemInfoPriceTitle}>Цена:</div>
                    <div className={s._itemInfoPriceCount}></div>
                    <div className={s._itemInfoPrice}>1 000 ₽</div>
                    <button className={s._itemInfoPlus}>
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={2}>
              <div className={s._item}>
                <div className={s._itemImageWrapper}>
                  <img src={cash} alt="" className={s._itemImage} />
                </div>
                <div className={s._itemInfo}>
                  <div className={s._itemInfoTop}>
                    <div className={s._itemInfoTitle}>
                      Брендирование фан-мани
                    </div>
                    <div className={s._itemInfoDescription}>
                      Курирует работу крупье
                    </div>
                  </div>
                  <div className={s._itemInfoBottom}>
                    <div className={s._itemInfoPriceTitle}>Цена:</div>
                    <div className={s._itemInfoCount}>100 купюр</div>
                    <div className={s._itemInfoPrice}>500 ₽</div>
                    <button className={s._itemInfoPlus}>
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Recomendations;
