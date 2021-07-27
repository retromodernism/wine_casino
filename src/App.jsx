import s from "./App.module.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import WineCasino from "./components/pageWineCasino";
import MainPageFoodCasino from "./components/pageFoodCasino";
import CartPage from "./components/pageCart";
import ContactsPage from "./components/pageContacts";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { getPositions } from "./redux/modules/positions";
import { connect } from "react-redux";
import BurgerMenu from "./components/burgerMenu";

const App = ({ burgerIsOpen, getPositions, ...props }) => {
  getPositions();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={s.app}>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPageFoodCasino} />
          <Route path="/wine-casino" component={WineCasino} />
          <Route path="/cart" component={CartPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
        {burgerIsOpen && <BurgerMenu />}
      </div>
    </BrowserRouter>
  );
};

export default connect(
  (state) => ({ burgerIsOpen: state.burger.burgerIsOpen }),
  { getPositions }
)(App);
