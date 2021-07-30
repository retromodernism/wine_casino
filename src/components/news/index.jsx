import s from "./index.module.scss";
import cx from "classnames";
import { connect } from "react-redux";
import { useState } from "react";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";

const ShowMoreButton = ({ onClick }) => {
  const [isHover, setHover] = useState(false);
  return (
    <button
      className={cx(s._showMoreButton, { [s._showMoreButton_hover]: isHover })}
      onClick={onClick}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    >
      Показать еще
    </button>
  );
};

const NewsItem = ({ title, date, paragraphs = [""], mainImage, id = 0 }) => {
  return (
    <div className={s._newsItem}>
      <div
        className={s._image}
        style={{
          background: `url(${mainImage}) 100% 100% / cover no-repeat`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className={s._itemInfo}>
        <div className={s._itemTitle}>{title}</div>
        <div className={s._itemDate}>{date}</div>
      </div>
      <div className={s._descriptionWrapper}>
        <TextTruncate
          className={s._itemDescription}
          line={3}
          // element="span"
          truncateText="…"
          text={paragraphs[0]}
        />
      </div>
      <Link to={`/news/${id}`} className={s._itemLink}>
        <span className={s._itemLinkText}>Читать подробнее</span>
      </Link>
    </div>
  );
};

const News = ({ news, ...props }) => {
  const [showedNews, setSHowedNews] = useState(6);
  const hasShowMore = showedNews < news.length;
  const showMore = setSHowedNews.bind(null, showedNews + 3);

  return (
    <section className={s.news}>
      <div className={s._content}>
        <div className={s._title}>Наши новости</div>
        <div className={s._newsGrid}>
          {news.map((newsItem, index) =>
            index < showedNews ? <NewsItem {...newsItem} key={index} /> : null
          )}
        </div>
        {hasShowMore && (
          <div className={s._buttonWrapper}>
            <ShowMoreButton onClick={showMore} />
          </div>
        )}
      </div>
    </section>
  );
};

export default connect((state) => ({
  news: state.news.news,
}))(News);
