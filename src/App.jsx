import s from "./App.module.scss";
import Header from "./components/header";
import Home from "./components/home";

const App = (props) => {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.main}>
        <Home />
      </main>
    </div>
  );
};

export default App;
