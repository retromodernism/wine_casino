import s from "./index.module.scss";
import Additionals from "../additionals";
import Croupiers from "../croupiers";
import Essence from "../essence";
import Masterclass from "../masterclass";
import OtherCasinos from "../otherCasinos";
import Promotion from "../promotion";
import Tematic from "../tematic";
import Variants from "../variants";
import HomeCoulinaryCasino from "../home3";
import { Fragment } from "react";
import homeBg from "./src/homeBg.png";
import Form from "../form";
import Header from "../header";
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
      <main className={s.main}>
        {isDesktop && (
          <>
            <HomeCoulinaryCasino background={data.homeBg} {...mediaQueries} />
            <Masterclass {...mediaQueries} />
            <Promotion background={false} {...mediaQueries} />
            <Additionals {...mediaQueries} />
            <Form {...mediaQueries} />
            <Variants {...mediaQueries} />
            <Tematic {...mediaQueries} />
          </>
        )}
        {isTablet && (
          <>
            <HomeCoulinaryCasino background={data.homeBg} {...mediaQueries} />
            <OtherCasinos {...mediaQueries} />
            {/* Почему мы */}
            <Tematic {...mediaQueries} />
            <Promotion {...mediaQueries} />
            <Masterclass {...mediaQueries} />
            <Variants {...mediaQueries} />
            <Additionals {...mediaQueries} />
            <Croupiers {...mediaQueries} />
          </>
        )}
        {isMobile && (
          <>
            <HomeCoulinaryCasino background={data.homeBg} {...mediaQueries} />
            <OtherCasinos {...mediaQueries} />
            <Essence {...mediaQueries} />
            <Masterclass {...mediaQueries} />
            <Promotion {...mediaQueries} />
            <Variants {...mediaQueries} />
            <Additionals {...mediaQueries} />
            <Tematic {...mediaQueries} />
            <Croupiers {...mediaQueries} />
          </>
        )}
      </main>
      <Footer {...mediaQueries} />
    </>
  );
};

export default MainPageFoodCasino;
