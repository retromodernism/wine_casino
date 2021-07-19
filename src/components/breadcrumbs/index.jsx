import s from "./index.module.scss";
import cx from "classnames";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ routes }) => {
  return (
    <section className={s.breadcrumbs}>
      <div className={s._content}>
        <Link to="/" className={s._item}>Главная</Link>
        <div className={cx(s._item, s._current)}>Корзина</div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
