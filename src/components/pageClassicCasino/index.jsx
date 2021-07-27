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

const MainPageFoodCasino = (props) => {
  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <main className={s.main}>
      {isDesktop && (
        <Fragment>
          <HomeCoulinaryCasino />
          <Essence />
          <Masterclass />
          <Promotion background={false} />
          <Variants />
          <Additionals />
          <Croupiers />
        </Fragment>
      )}
      {isTablet && (
        <Fragment>
          <HomeCoulinaryCasino />
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
          <HomeCoulinaryCasino />
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
  );
};

export default MainPageFoodCasino;
