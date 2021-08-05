import s from "./index.module.scss";
import cx from "classnames";
import { Link } from "react-router-dom";
import croupier1 from "./src/croupier1.png";
import croupier2 from "./src/croupier2.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
const ShowMoreButton = () => {
  const [isHovered, setHover] = useState(false);
  return (
    <Link
      to="/croupiers"
      className={cx(s._showMoreButton, {
        [s._showMoreButton_hover]: isHovered,
      })}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    >
      <p className={s._showMoreButtonText}>Посмотреть всех крупье</p>
      <div className={s._showMoreButtonIcon}></div>
    </Link>
  );
};

const Сroupiers = ({ ...props }) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <section className={s.croupiers}>
      <div className={s._content}>
        <div className={s._info}>
          <div className={s._title}>Лучшие крупье</div>
          <div className={s._description}>
            <p>
              Крупье – незаменимый куратор любых мероприятий, связанных с казино
              и азартными играми. Если вы желаете организовать выездное
              фан-казино в Москве, наша компания готова предоставить услуги
              профессиональных крупье. У нас заняты опытные специалисты, знающие
              толк в ведении игрового процесса и правилах любых азартных игр.
            </p>
            <p>
              Участие крупье необходимо при организации карточных игр (покер,
              блэк джек, баккара, крепс), рулетки, колеса фортуны, а также
              проведении дегустаций в формате “съедобных” казино.
            </p>
          </div>
          {isDesktop && <ShowMoreButton />}
        </div>
        <div className={s._items}>
          <div className={s._item}>
            <div className={s._itemTitle}>Александра</div>
            <div className={s._itemDescription}>
              SEO. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Justo tristique fusce non odio lacinia felis. Tortor ac enim,
              pulvinar nibh platea aenean massa.
            </div>
            <div
              className={s._itemImage}
              style={{
                background: `url(${croupier1}) 100% 100% /cover no-repeat`,
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
          <div className={s._item}>
            <div className={s._itemTitle}>Александра</div>
            <div className={s._itemDescription}>
              SEO. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Justo tristique fusce non odio lacinia felis. Tortor ac enim,
              pulvinar nibh platea aenean massa.
            </div>
            <div
              className={s._itemImage}
              style={{
                background: `url(${croupier1}) 100% 100% /cover no-repeat`,
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
        </div>
        {(isTablet || isMobile) && <ShowMoreButton />}
      </div>
    </section>
  );
};

export default Сroupiers;
