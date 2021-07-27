import s from "./index.module.scss";
import cx from "classnames";
import { useMediaQuery } from "react-responsive";

const TematicItem = ({
  images,
  title,
  description,
  href = "/",
  odd = false,
}) => {
  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  const even = !odd;

  return (
    <div className={s.tematicItem}>
      {even && (
        <div className={cx(s._itemInfo, s._even)}>
          <div className={s._itemTitle}>{title}</div>
          <div className={s._itemDescription}>{description}</div>
          <a href={href} className={s._itemGetMore}>
            <span className={s._itemGetMoreText}>Узнать подробнее</span>
          </a>
        </div>
      )}

      {images.map((image, index) => (
        <div
          className={s._image}
          key={index}
          style={{
            background: `url(${image}) 100% 100% /cover no-repeat`,
            backgroundPosition: "center center",
          }}
        ></div>
      ))}

      {odd && (
        <div className={cx(s._itemInfo, s._odd)}>
          <div className={s._itemTitle}>{title}</div>
          <div className={s._itemDescription}>{description}</div>
          <a href={href} className={s._itemGetMore}>
            <span className={s._itemGetMoreText}>Узнать подробнее</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default TematicItem;
