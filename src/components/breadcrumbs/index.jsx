import s from "./index.module.scss";
import cx from "classnames";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ tree = [], title = "" }) => {
  return (
    <section className={s.breadcrumbs}>
      <div className={s._content}>
        {tree.map(({ title, to }, index) => (
          <Link to={to} className={s._item} key={index}>
            {title}
          </Link>
        ))}
        <div className={cx(s._item, s._current)}>{title}</div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
