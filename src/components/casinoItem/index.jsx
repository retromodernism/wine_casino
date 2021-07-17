import s from "./index.module.scss";

const CasinoItem = ({ href = "/", image, title }) => {
  return (
    <a href={href} className={s.casinoItem}>
      <div
        className={s._image}
        style={{
          background: `url(${image}) 100% 100% no-repeat`,
          backgroundSize: "contain",
        }}
      ></div>
      <div className={s._frame}>
        <div className={s._innerFrame}></div>
        <div className={s._title}>{title}</div>
      </div>
    </a>
  );
};

export default CasinoItem;
