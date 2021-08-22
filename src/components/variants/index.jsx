import s from "./index.module.scss";
import Variant from "../variant";
import { connect } from "react-redux";
import { useMemo } from "react";

const defaultData = {
  color: {
    item: "#323232",
    popular: "#2A9D76",
  },
  currentCasinoType: "wine",
};

const Variants = ({ positions, ...props }) => {
  const { color, currentCasinoType } = useMemo(
    () => props.data || defaultData,
    [props.data]
  );
  const { isDesktop, isTablet, isMobile } = useMemo(() => props, [props]);
  const mediaQueries = useMemo(
    () => ({ isDesktop, isTablet, isMobile }),
    [props]
  );

  const casinos = useMemo(
    () =>
      positions.filter(
        ({ type, casinoType }) =>
          type === "casino" && casinoType === currentCasinoType
      ),
    [positions]
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
            <Variant {...casino} {...mediaQueries} color={color} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default connect((state) => ({
  positions: state.positions.positions,
}))(Variants);
