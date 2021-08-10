import s from "./index.module.scss";
import { Fragment } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import Breadcrumbs from "../breadcrumbs";
import NewsItem from "../newsItem";
import { makeHeaderDark } from "../../redux/modules/headerColor";
import { useParams, useHistory } from "react-router-dom";
import Header from '../header';
import Footer from "../footer";

const PageNews = ({ news, makeHeaderDark, ...props }) => {
  const { isDesktop, isTablet, isMobile } = props;
  const mediaQueries = { isDesktop, isTablet, isMobile };

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
    <>
    <Header {...mediaQueries} />
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
          <NewsItem {...newsItem} {...mediaQueries} />
        </Fragment>
      )}
      {isTablet && (
        <Fragment>
          <NewsItem {...newsItem} {...mediaQueries} />
        </Fragment>
      )}
      {isMobile && (
        <Fragment>
          <NewsItem {...newsItem} {...mediaQueries} />
        </Fragment>
      )}
    </main>
    <Footer {...mediaQueries} />
    </>
  );
};

export default connect(
  (state) => ({
    news: state.news.news,
  }),
  { makeHeaderDark }
)(PageNews);
