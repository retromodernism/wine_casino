import s from "./index.module.scss";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";
import { connect } from "react-redux";
import Breadcrumbs from "../breadcrumbs";
import News from "../news";
import Header from "../header";
import Footer from "../footer";
import { makeHeaderDark } from "../../redux/modules/headerColor";

const PageNews = ({ news, makeHeaderDark, ...props }) => {
  makeHeaderDark();

  const { isDesktop, isTablet, isMobile } = props;
  const mediaQueries = { isDesktop, isTablet, isMobile };

  return (
    <>
      <Header {...mediaQueries} />
      <main className={s.main}>
        {isDesktop && (
          <Fragment>
            <Breadcrumbs
              tree={[{ title: "Главная", to: "/" }]}
              title="Новости"
            />
            <News/>
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
