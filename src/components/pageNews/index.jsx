import s from "./index.module.scss";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";
import { connect } from "react-redux";
import { getNews } from "../../redux/modules/news";
import { useEffect } from "react";
import Breadcrumbs from "../breadcrumbs";
import News from "../news";

const PageNews = ({ news, getNews, ...props }) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  /* State */

  useEffect(() => {
    getNews();
  }, []);

  return (
    <main className={s.main}>
      {isDesktop && (
        <Fragment>
          <Breadcrumbs tree={[{ title: "Главная", to: "/" }]} title="Новости" />
          <News />
        </Fragment>
      )}
      {isTablet && (
        <Fragment>
          <News />
        </Fragment>
      )}
      {isMobile && (
        <Fragment>
          <News />
        </Fragment>
      )}
    </main>
  );
};

export default connect(
  (state) => ({
    news: state.news.news,
  }),
  { getNews }
)(PageNews);
