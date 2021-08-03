import s from "./index.module.scss";
import Additionals from "../additionals";
import Croupiers from "../croupiers";
import Essence from "../essence";
import Masterclass from "../masterclass";
import OtherCasinos from "../otherCasinos";
import Promotion from "../promotion";
import Tematic from "../tematic";
import Variants from "../variants";
import { useMediaQuery } from "react-responsive";
import HomeCoulinaryCasino from "../home2";
import { Fragment } from "react";
import homeBg from "./src/homeBg.png";
import Form from "../form";
import Header from "../header";
import Footer from "../footer";

const data = {
  homeBg: homeBg,
};

const MainPageFoodCasino = (props) => {
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
            <HomeCoulinaryCasino background={data.homeBg} />
            <Masterclass />
            <Promotion background={false} />
            <Additionals />
            <Form />
            <Variants />
            <Tematic />
          </Fragment>
        )}
        {isTablet && (
          <Fragment>
            <HomeCoulinaryCasino background={data.homeBg} />
            <OtherCasinos />
            {/* Почему мы */}
            <Tematic />
            <Promotion />
            <Masterclass />
            <Variants />
            <Additionals />
            <Croupiers />
          </Fragment>
        )}
        {isMobile && (
          <Fragment>
            <HomeCoulinaryCasino background={data.homeBg} />
            <OtherCasinos />
            <Essence />
            <Masterclass />
            <Promotion />
            <Variants />
            <Additionals />
            <Tematic />
            <Croupiers />
          </Fragment>
        )}
      </main>
      <Footer />
    </>
  );
};

export default MainPageFoodCasino;
