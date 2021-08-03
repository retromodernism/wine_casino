import Contacts from "../contacts";
import Promotion from "../promotion";
import s from "./index.module.scss";
import {
  makeHeaderDark,
  makeHeaderLight,
} from "../../redux/modules/headerColor";
import { connect } from "react-redux";
import Header from "../header";
import Footer from "../footer";

const ContactsPage = ({ makeHeaderDark, ...props }) => {
  makeHeaderDark();

  return (
    <>
      <Header />
      <main className={s.main}>
        <Contacts />
        <Promotion background={false} />
      </main>
      <Footer />
    </>
  );
};

export default connect(null, { makeHeaderDark })(ContactsPage);
