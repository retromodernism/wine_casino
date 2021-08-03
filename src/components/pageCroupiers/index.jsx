import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../header";
import Footer from "../footer";
import OurCroupiers from "../ourCroupiers";
import s from "./index.module.scss";

const PageCroupiers = (props) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <>
      <Header />
      <main className={s.main}>
        {isDesktop && (
          <Fragment>
            <OurCroupiers />
          </Fragment>
        )}
        {isTablet && (
          <Fragment>
            <OurCroupiers />
          </Fragment>
        )}
        {isMobile && (
          <Fragment>
            <OurCroupiers />
          </Fragment>
        )}
      </main>
      <Footer />
    </>
  );
};

export default PageCroupiers;
