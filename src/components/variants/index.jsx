import s from "./index.module.scss";
import image1 from "./src/image1.png";
import image2 from "./src/image2.png";
import image3 from "./src/image3.png";
import classname from "classnames";
import Variant from "../variant";
import { connect } from "react-redux";

const Variants = ({ positions, ...props }) => {
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
            <Variant {...casino} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default connect((state) => ({
  positions: state.positions.positions,
}))(Variants);
