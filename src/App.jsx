import s from "./App.module.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./components/mainPage";
import CartPage from "./components/cartPage";
import ContactsPage from "./components/contactsPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { getPositions } from "./redux/modules/positions";
import { connect } from "react-redux";

const App = ({ getPositions, ...props }) => {
  getPositions();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={s.app}>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default connect(null, { getPositions })(App);
