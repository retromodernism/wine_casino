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

const MainPage = (props) => {
  return (
    <main className={s.main}>
      <Home />
      <BackToAll />
      <Essence />
      <Masterclass />
      <Promotion />
      {/* <Variants />
      <Additionals />
      <OtherCasinos />
      <HowItWas />
      <Tematic />
      <About /> */}
    </main>
  );
};

export default MainPage;
