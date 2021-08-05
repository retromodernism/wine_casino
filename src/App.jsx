import s from "./App.module.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import WineCasino from "./components/pageWineCasino";
import MainPageFoodCasino from "./components/pageFoodCasino";
import ClassicCasino from "./components/pageClassicCasino";
import CartPage from "./components/pageCart";
import ContactsPage from "./components/pageContacts";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { getPositions } from "./redux/modules/positions";
import { connect } from "react-redux";
import BurgerMenu from "./components/burgerMenu";
import Poker from "./components/pagePoker";
import PageCroupiers from "./components/pageCroupiers";
import PageNews from "./components/pageNews";
import PageNewsItem from "./components/pageNewsItem";
import { getNews } from "./redux/modules/news";
import { getCasinos } from "./redux/modules/casinos";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

const App = ({
  burgerIsOpen,
  getNews,
  news,
  casinos,
  getPositions,
  getCasinos,
  ...props
}) => {
  useEffect(() => {
    getNews();
    getCasinos();
  }, []);
  getPositions();

  const foodCasinos = casinos.filter(({ type }) => type === "foodCasino");
  const classicCasinos = casinos.filter(({ type }) => type === "classicCasino");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={s.app}>
        <Switch>
          <Route exact path="/" component={MainPageFoodCasino} />
          <Route path="/klassicheskoe-kazino" component={ClassicCasino} />
          <Route path="/cart" component={CartPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/croupiers" component={PageCroupiers} />
          <Route exact path="/news" component={PageNews} />
          <Route path="/news/:id" component={PageNewsItem} />
          {foodCasinos.map((casino, index) => (
            <Route
              path={casino.url}
              key={index}
              component={() => <WineCasino casino={casino} />}
            />
          ))}
          {classicCasinos.map((casino, index) => (
            <Route
              path={casino.url}
              key={index}
              component={() => <Poker casino={casino} />}
            />
          ))}
          {/* <Redirect to="/" /> */}
        </Switch>
        {burgerIsOpen && <BurgerMenu />}
      </div>
    </BrowserRouter>
  );
};

export default connect(
  (state) => ({
    burgerIsOpen: state.burger.burgerIsOpen,
    news: state.news.news,
    casinos: state.casinos.casinos,
  }),
  { getPositions, getNews, getCasinos }
)(App);
