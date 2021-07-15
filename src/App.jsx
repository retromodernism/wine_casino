import s from "./App.module.scss";
import BackToAll from "./components/backToAll";
import Essence from "./components/essence";
import Header from "./components/header";
import Home from "./components/home";
import Masterclass from "./components/masterclass";

const App = (props) => {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.main}>
        <Home />
        <BackToAll />
        <Essence />
        <Masterclass />
      </main>
    </div>
  );
};

export default App;
