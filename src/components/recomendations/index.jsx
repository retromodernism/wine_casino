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
import { connect } from "react-redux";
import { addPosition } from "../../redux/modules/cart";

const shuffle = (o) => {
  for (
    let j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
};

const Recomendations = ({
  positionsIdsInCart,
  positions,
  addPosition,
  ...props
}) => {
  console.log(positionsIdsInCart, positions);
  const positionsNotInCart = positions.filter(
    ({ id }) => !positionsIdsInCart.includes(id)
  );

  const recomendations = shuffle(positionsNotInCart).slice(0, 3);

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
        {isDesktop &&
          recomendations.map(
            ({ cartTitle, cartItemDescription, price, image, id }, index) => (
              <div className={s._item} key={index}>
                <div className={s._itemImageWrapper}>
                  <img src={image.cart} alt="" className={s._itemImage} />
                </div>
                <div className={s._itemInfo}>
                  <div className={s._itemInfoTop}>
                    <div className={s._itemInfoTitle}>{cartTitle}</div>
                    <div className={s._itemInfoDescription}>
                      {cartItemDescription}
                    </div>
                  </div>
                  <div className={s._itemInfoBottom}>
                    <div className={s._itemInfoPriceTitle}>Цена:</div>
                    <div className={s._itemInfoPriceCount}></div>
                    <div className={s._itemInfoPrice}>
                      {price.toLocaleString()} ₽
                    </div>
                    <button
                      className={s._itemInfoPlus}
                      onClick={addPosition.bind(null, id)}
                    >
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        {(isTablet || isMobile) && (
          <Swiper
            {...{
              slidesPerView: "1",
              spaceBetween: 10,
            }}
          >
            {recomendations.map(
              ({ cartTitle, cartItemDescription, price, image, id }, index) => (
                <SwiperSlide key={0} key={index}>
                  <div className={s._item}>
                    <div className={s._itemImageWrapper}>
                      <img src={image.cart} alt="" className={s._itemImage} />
                    </div>
                    <div className={s._itemInfo}>
                      <div className={s._itemInfoTop}>
                        <div className={s._itemInfoTitle}>{cartTitle}</div>
                        <div className={s._itemInfoDescription}>
                          {cartItemDescription}
                        </div>
                      </div>
                      <div className={s._itemInfoBottom}>
                        <div className={s._itemInfoPriceTitle}>Цена:</div>
                        <div className={s._itemInfoPriceCount}></div>
                        <div className={s._itemInfoPrice}>
                          {price.toLocaleString()} ₽
                        </div>
                        <button
                          className={s._itemInfoPlus}
                          onClick={addPosition.bind(null, id)}
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default connect(
  (state) => ({
    positionsIdsInCart: state.cart.positionsIds,
    positions: state.positions.positions,
  }),
  { addPosition }
)(Recomendations);
