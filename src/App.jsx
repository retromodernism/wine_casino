import s from "./App.module.scss";
import Header from "./components/header";

const App = (props) => {
  return (
    <div className={s.app}>
      <Header />
    </div>
  );
};

export default App;
