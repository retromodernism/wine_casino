import s from "./index.module.scss";
import Additionals from "../additionals";
import Croupiers from "../croupiers";
import Essence from "../essence";
import Masterclass from "../masterclass";
import OtherCasinos from "../otherCasinos";
import Promotion from "../promotion";
import Tematic from "../tematic";
import Variants from "../variants";
import HomeCoulinaryCasino from "../home2";
import { Fragment } from "react";
import homeBg from "./src/homeBg.webp";
import Header from '../header';
import Footer from "../footer";

const data = {
  homeBg: homeBg,
};

const MainPageFoodCasino = (props) => {
  const { isDesktop, isTablet, isMobile } = props;
  const mediaQueries = { isDesktop, isTablet, isMobile };

  return (
    <>
    <Header {...mediaQueries} />
    <main className={s.main} {...mediaQueries}>
      {isDesktop && (
        <Fragment>
          <HomeCoulinaryCasino background={data.homeBg} {...mediaQueries} />
          <Essence {...mediaQueries} />
          <Masterclass {...mediaQueries} />
          <Promotion background={false} {...mediaQueries} />
          <Variants {...mediaQueries} />
          <Additionals {...mediaQueries} />
          <Croupiers {...mediaQueries} />
        </Fragment>
      )}
      {isTablet && (
        <Fragment>
          <HomeCoulinaryCasino background={data.homeBg} {...mediaQueries} />
          <OtherCasinos {...mediaQueries} />
          {/* Почему мы */}
          <Tematic {...mediaQueries} />
          <Promotion {...mediaQueries} />
          <Masterclass {...mediaQueries} />
          <Variants {...mediaQueries} />
          <Additionals {...mediaQueries} />
          <Croupiers {...mediaQueries} />
        </Fragment>
      )}
      {isMobile && (
        <Fragment>
          <HomeCoulinaryCasino background={data.homeBg} {...mediaQueries} />
          <OtherCasinos {...mediaQueries} />
          <Essence {...mediaQueries} />
          <Masterclass {...mediaQueries} />
          <Promotion {...mediaQueries} />
          <Variants {...mediaQueries} />
          <Additionals {...mediaQueries} />
          <Tematic {...mediaQueries} />
          <Croupiers {...mediaQueries} />
        </Fragment>
      )}
    </main>
    <Footer {...mediaQueries} />
    </>
  );
};

export default MainPageFoodCasino;
