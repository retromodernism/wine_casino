import s from "./index.module.scss";
import { Link } from "react-router-dom";

const BackToAll = ({ to = "/" }) => {
  return (
    <div className={s.backToAll}>
      <Link to={to} className={s._link}>
        Вернуться ко всем видам
      </Link>
    </div>
  );
};

export default BackToAll;
