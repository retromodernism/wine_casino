import s from "./index.module.scss";
import About from "../about";
import Additionals from "../additionals";
import BackToAll from "../backToAll";
import Essence from "../essence";
import Home from "../home";
import HowItWas from "../howItWas";
import Masterclass from "../masterclass";
import OtherCasinos from "../otherCasinos";
import Promotion from "../promotion";
import Tematic from "../tematic";
import Variants from "../variants";
import { useMediaQuery } from "react-responsive";

const MainPage = (props) => {
  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <main className={s.main}>
      <Home />
      <BackToAll />
      <Essence />
      <Masterclass />
      {!isMobile && <Promotion />}
      <Variants />
      {isMobile && <Promotion />}
      <Additionals />
      <OtherCasinos />
      <HowItWas />
      {isDesktop && <Tematic />}
      <About />
    </main>
  );
};

export default MainPage;
