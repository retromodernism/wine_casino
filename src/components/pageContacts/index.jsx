import Contacts from "../contacts";
import Promotion from "../promotion";
import s from "./index.module.scss";
import {
  makeHeaderDark,
  makeHeaderLight,
} from "../../redux/modules/headerColor";
import { connect } from "react-redux";

const ContactsPage = ({ makeHeaderDark, ...props }) => {
  makeHeaderDark();

  return (
    <main className={s.main}>
      <Contacts />
      <Promotion background={false} />
    </main>
  );
};

export default connect(null, { makeHeaderDark })(ContactsPage);
