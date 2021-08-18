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
import { useMemo } from "react";

const ContactsPage = ({ makeHeaderDark, ...props }) => {
  makeHeaderDark();

  const { isDesktop, isTablet, isMobile } = useMemo(() => props);
  const mediaQueries = useMemo(() => ({ isDesktop, isTablet, isMobile }), []);

  return (
    <>
      <Header {...mediaQueries} />
      <main className={s.main}>
        <Contacts {...mediaQueries} />
        <Promotion background={false} {...mediaQueries} />
      </main>
      <Footer {...mediaQueries} />
    </>
  );
};

export default connect(null, { makeHeaderDark })(ContactsPage);
