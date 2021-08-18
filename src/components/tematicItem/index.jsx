import s from "./index.module.scss";
import cx from "classnames";
import { useMemo } from "react";

const TematicItem = ({
  images = [],
  title = "",
  description = "",
  href = "/",
  odd = false,
  ...props
}) => {
  const { isDesktop, isTablet, isMobile } = useMemo(() => props, [props]);

  /* Local */

  const even = useMemo(() => !odd, []);

  return (
    <div className={s.tematicItem}>
      {even && (
        <div className={cx(s._itemInfo, s._even)}>
          {(isDesktop || isTablet) && (
            <div className={s._itemTitle}>{title}</div>
          )}
          <div className={s._itemDescription}>{description}</div>
          <a href={href} className={s._itemGetMore}>
            <span className={s._itemGetMoreText}>Узнать подробнее</span>
          </a>
        </div>
      )}

      {(isDesktop || isTablet) &&
        images.map((image, index) => (
          <div
            className={s._image}
            key={index}
            style={{
              background: `url(${image}) 100% 100% /cover no-repeat`,
              backgroundPosition: "center center",
            }}
          ></div>
        ))}

      {isMobile && images.length > 0 && (
        <div
          className={s._image}
          style={{
            background: `url(${images[0]}) 100% 100% /cover no-repeat`,
            backgroundPosition: "center center",
          }}
        ></div>
      )}

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
