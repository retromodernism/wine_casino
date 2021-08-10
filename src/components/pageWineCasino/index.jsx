import s from "./index.module.scss";
import About from "../about";
import Additionals from "../additionals";
import BackToAll from "../backToAll";
import Essence from "../essence";
import Header from "../header";
import Home from "../home";
import HowItWas from "../howItWas";
import Masterclass from "../masterclass";
import OtherCasinos from "../otherCasinos";
import Promotion from "../promotion";
import Tematic from "../tematic";
import Variants from "../variants";
import Footer from "../footer";
import { useEffect } from "react";

const MainPageFoodCasino = (props) => {
  const { casino } = props;

  /* Поменяем тайттл страницы */
  useEffect(() => {
    document.title = casino.title ?? "Food Casino";
  });

  const { isDesktop, isTablet, isMobile } = props;
  const mediaQueries = { isDesktop, isTablet, isMobile };

  return (
    <>
      <Header data={casino.header} {...mediaQueries} />
      <main className={s.main} {...mediaQueries}>
        <Home data={casino.home} {...mediaQueries} />
        <BackToAll data={casino.back} {...mediaQueries} />
        <Essence data={casino.essence} {...mediaQueries} />
        <Masterclass data={casino.masterclass} {...mediaQueries} />
        {!isMobile && <Promotion data={casino.promotion} {...mediaQueries} />}
        <Variants data={casino.variants} {...mediaQueries} />
        {isMobile && <Promotion data={casino.promotion} {...mediaQueries} />}
        <Additionals data={casino.additionals} {...mediaQueries} />
        <OtherCasinos data={casino.otherCasinos} {...mediaQueries} />
        <HowItWas data={casino.howItWas} {...mediaQueries} />
        {isDesktop && <Tematic data={casino.tematic} {...mediaQueries} />}
        <About data={casino.about} {...mediaQueries} />
      </main>
      <Footer data={casino.footer} {...mediaQueries} />
    </>
  );
};

export default MainPageFoodCasino;
