import s from "./index.module.scss";
import cx from "classnames";
import { useMediaQuery } from "react-responsive";

const GridItem = ({ text, image }) => {
  if (text) {
    return (
      <div
        className={cx(s._gridItem, s._gridItem_text)}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    );
  } else if (image) {
    return (
      <div
        className={cx(s._gridItem, s._gridItem_image)}
        style={{
          background: `url(${image}) 100% 100% / cover no-repeat`,
        }}
      ></div>
    );
  }
};

const NewsItem = ({
  title = "тайтл",
  date = "14 февраля",
  paragraphs = [],
  images = [],
}) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* Preparing data */

  const gridItems = [];
  let i = 0;
  let even = true;

  if (isDesktop) {
    while (i < paragraphs.length || i < images.length) {
      if (even) {
        if (paragraphs[i]) gridItems.push({ text: paragraphs[i] });
        if (images[i]) gridItems.push({ image: images[i] });
      } else {
        if (images[i]) gridItems.push({ image: images[i] });
        if (paragraphs[i]) gridItems.push({ text: paragraphs[i] });
      }

      i++;
      even = !even;
    }
  }

  if (isTablet || isMobile) {
    while (i < paragraphs.length || i < images.length) {
      if (images[i]) gridItems.push({ image: images[i] });
      if (paragraphs[i]) gridItems.push({ text: paragraphs[i] });

      i++;
    }
  }

  return (
    <section className={s.newsItem}>
      <div className={s._content}>
        <div className={s._title}>Наши новости</div>
        <div className={s._itemTitle}>{title}</div>
        <div className={s._date}>{date}</div>
        <div className={s._grid}>
          {gridItems.map((item, index) => (
            <GridItem {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsItem;
