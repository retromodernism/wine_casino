import { Fragment } from "react";
import Header from "../header";
import Footer from "../footer";
import OurCroupiers from "../ourCroupiers";
import s from "./index.module.scss";
import { makeHeaderDark } from "../../redux/modules/headerColor";
import { connect } from "react-redux";

const PageCroupiers = ({ makeHeaderDark, ...props }) => {
  makeHeaderDark();

  const { isDesktop, isTablet, isMobile } = props;
  const mediaQueries = { isDesktop, isTablet, isMobile };

  return (
    <>
      <Header {...mediaQueries} />
      <main className={s.main} {...mediaQueries}>
        {isDesktop && (
          <Fragment>
            <OurCroupiers {...mediaQueries} />
          </Fragment>
        )}
        {isTablet && (
          <Fragment>
            <OurCroupiers {...mediaQueries} />
          </Fragment>
        )}
        {isMobile && (
          <Fragment>
            <OurCroupiers {...mediaQueries} />
          </Fragment>
        )}
      </main>
      <Footer {...mediaQueries} />
    </>
  );
};

export default connect(null, { makeHeaderDark })(PageCroupiers);
