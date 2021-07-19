import s from "./index.module.scss";

const Popup = ({ onClick, ...props }) => {
  return (
    <div className={s.popup} onClick={onClick} name="popup">
      {props.children}
    </div>
  );
};

export default Popup;
