import s from "./index.module.scss";
import { Link } from "react-router-dom";

const CasinoItem = ({ to = "/", image, title, color, fontColor }) => {
  return (
    <Link to={to} className={s.casinoItem}>
      <div
        className={s._image}
        style={{
          background: `url(${image}) 100% 100% no-repeat`,
          backgroundSize: "contain",
        }}
      ></div>
      <div className={s._frame} style={{ background: color }}>
        <div className={s._innerFrame} />
        <div className={s._title} style={{ color: fontColor }}>
          {title}
        </div>
      </div>
    </Link>
  );
};

export default CasinoItem;
