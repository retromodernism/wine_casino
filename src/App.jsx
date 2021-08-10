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
import { useMediaQuery } from "react-responsive";

const App = ({
  burgerIsOpen,
  getNews,
  news,
  casinos,
  getPositions,
  getCasinos,
  ...props
}) => {
  /* Getting Indo from Redux State */
  getNews();
  getCasinos();
  getPositions();

  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });
  
  const mediaQueries = { isDesktop, isTablet, isMobile };

  const foodCasinos = casinos.filter(({ type }) => type === "foodCasino");
  const classicCasinos = casinos.filter(({ type }) => type === "classicCasino");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={s.app}>
        <Switch>
          <Route exact path="/" component={() => <MainPageFoodCasino {...mediaQueries} />} />
          <Route path="/klassicheskoe-kazino" component={() => <ClassicCasino {...mediaQueries} />} />
          <Route path="/cart" component={() => <CartPage {...mediaQueries} />} />
          <Route path="/contacts" component={() => <ContactsPage {...mediaQueries} />} />
          <Route path="/croupiers" component={() => <PageCroupiers {...mediaQueries} />} />
          <Route exact path="/news" component={() => <PageNews {...mediaQueries} />} />
          <Route path="/news/:id" component={() => <PageNewsItem {...mediaQueries} />} />
          {foodCasinos.map((casino, index) => (
            <Route
              path={casino.url}
              key={index}
              component={() => <WineCasino casino={casino} {...mediaQueries} />}
            />
          ))}
          {classicCasinos.map((casino, index) => (
            <Route
              path={casino.url}
              key={index}
              component={() => <Poker casino={casino} {...mediaQueries} />}
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
