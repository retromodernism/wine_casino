import s from "./index.module.scss";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import Breadcrumbs from "../breadcrumbs";
import NewsItem from "../newsItem";
import { makeHeaderDark } from "../../redux/modules/headerColor";
import { useParams, useHistory } from "react-router-dom";

const PageNews = ({ news, makeHeaderDark, ...props }) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* State */

  useEffect(() => {
    makeHeaderDark();
  }, []);

  const { id } = useParams();
  const history = useHistory();

  const [newsItem] = news.filter((news) => `${news.id}` === id);

  if (!newsItem) {
    /* Redirect if there is no news item */
    history.push("/");
  }

  return (
    <main className={s.main}>
      {isDesktop && (
        <Fragment>
          <Breadcrumbs
            tree={[
              { title: "Главная", to: "/" },
              { title: "Новости", to: "/news" },
            ]}
            title={newsItem.title}
          />
          <NewsItem {...newsItem} />
        </Fragment>
      )}
      {isTablet && (
        <Fragment>
          <NewsItem {...newsItem} />
        </Fragment>
      )}
      {isMobile && (
        <Fragment>
          <NewsItem {...newsItem} />
        </Fragment>
      )}
    </main>
  );
};

export default connect(
  (state) => ({
    news: state.news.news,
  }),
  { makeHeaderDark }
)(PageNews);
