import s from "./index.module.scss";

const CasinoItem = ({ href = "/", image, title, color, fontColor }) => {
  return (
    <a href={href} className={s.casinoItem}>
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
    </a>
  );
};

export default CasinoItem;
