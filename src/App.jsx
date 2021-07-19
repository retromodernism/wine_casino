import s from "./App.module.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./components/mainPage";
import Cart from "./components/cart";
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
          <Route path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
