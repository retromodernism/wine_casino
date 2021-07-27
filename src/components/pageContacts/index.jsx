import Contacts from "../contacts";
import Promotion from "../promotion";
import s from "./index.module.scss";

const ContactsPage = (props) => {
  return (
    <main className={s.main}>
      <Contacts />
      <Promotion background={false} />
    </main>
  );
};

export default ContactsPage;
