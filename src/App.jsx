import s from "./App.module.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./components/mainPage";
import CartPage from "./components/cartPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

const App = (props) => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={s.app}>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/cart" component={CartPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
