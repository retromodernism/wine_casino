import s from "./index.module.scss";
import Variant from "../variant";
import { connect } from "react-redux";

const defaultData = {
  color: {
    item: "#323232",
    popular: "#2A9D76",
  },
};

const Variants = ({ positions, ...props }) => {
  const { color } = props.data || defaultData;

  const currentCasinoType = "wine";
  const casinos = positions.filter(
    ({ type, casinoType }) =>
      type === "casino" && casinoType === currentCasinoType
  );

  return (
    <section className={s.variants}>
      <div className={s._bg1}></div>
      <div className={s._bg2}></div>
      <div className={s._bg3}></div>
      <div className={s._content}>
        <div className={s._title}>Подберите лучший для себя вариант</div>
        <div className={s._variants}>
          {casinos.map((casino, index) => (
            <Variant {...casino} color={color} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default connect((state) => ({
  positions: state.positions.positions,
}))(Variants);
