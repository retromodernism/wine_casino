import s from "./App.module.scss";
import About from "./components/about";
import Additionals from "./components/additionals";
import BackToAll from "./components/backToAll";
import Essence from "./components/essence";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import HowItWas from "./components/howItWas";
import Masterclass from "./components/masterclass";
import OtherCasinos from "./components/otherCasinos";
import Promotion from "./components/promotion";
import Tematic from "./components/tematic";
import Variants from "./components/variants";

const App = (props) => {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.main}>
        <Home />
        <BackToAll />
        <Essence />
        <Masterclass />
        <Promotion />
        <Variants />
        <Additionals />
        <OtherCasinos />
        <HowItWas />
        <Tematic />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
