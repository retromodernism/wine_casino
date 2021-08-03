import s from "./index.module.scss";
import About from "../about";
import Additionals from "../additionals";
import BackToAll from "../backToAll";
import Essence from "../essence";
import Header from "../header";
import Home from "../home";
import HomeCoulinaryCasino from "../home2";
import HowItWas from "../howItWas";
import Masterclass from "../masterclass";
import OtherCasinos from "../otherCasinos";
import Promotion from "../promotion";
import Tematic from "../tematic";
import Variants from "../variants";
import { useMediaQuery } from "react-responsive";
import Footer from "../footer";

const MainPageFoodCasino = (props) => {
  const { casino } = props;

  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <>
      <Header data={casino.header} />
      <main className={s.main}>
        <Home data={casino.home} />
        <BackToAll data={casino.back} />
        <Essence data={casino.essence} />
        <Masterclass data={casino.masterclass} />
        {!isMobile && <Promotion data={casino.promotion} />}
        <Variants data={casino.variants} />
        {isMobile && <Promotion data={casino.promotion} />}
        <Additionals data={casino.additionals} />
        <OtherCasinos data={casino.otherCasinos} />
        <HowItWas data={casino.howItWas} />
        {isDesktop && <Tematic data={casino.tematic} />}
        <About data={casino.about} />
      </main>
      <Footer data={casino.footer} />
    </>
  );
};

export default MainPageFoodCasino;
