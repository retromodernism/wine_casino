import s from "./index.module.scss";

const BackToAll = (props) => {
  return (
    <div className={s.backToAll}>
      <a href="/" className={s._link}>
        Вернуться ко всем видам
      </a>
    </div>
  );
};

export default BackToAll;
