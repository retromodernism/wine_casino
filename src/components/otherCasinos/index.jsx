import CasinoItem from "../casinoItem";
import s from "./index.module.scss";
import cx from "classnames";
import { useState } from "react";
import { connect } from "react-redux";
import { useMemo } from "react";
import { useCallback } from "react";

const defaultData = {
  color: "#323232",
  fontColor: "#ffffff",
  type: "classicCasino",
};

const ShowMore = ({ onClick }) => {
  const [isHovered, setHover] = useState(false);

  return (
    <div
      className={cx(s._more, { [s._more_hover]: isHovered })}
      onClick={onClick}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    >
      Ещё
    </div>
  );
};

const OtherCasinos = ({ allCasinos, ...props }) => {
  const { color, fontColor, type } = useMemo(
    () => props.data || defaultData,
    []
  );
  const { isDesktop, isTablet, isMobile } = useMemo(() => props, []);

  /* Data */
  const casinos = useMemo(
    () =>
      allCasinos
        .filter((casino) => casino.type === type)
        .map(({ miniTitle, url, miniIcon }) => ({
          title: miniTitle,
          image: miniIcon,
          to: url,
        })),
    []
  );

  const [showedCasinos, countAddedCasinos] = useMemo(() => {
    if (isDesktop) {
      return [8, 8];
    }
    if (isTablet) {
      return [9, 6];
    }
    if (isMobile) {
      return [4, 4];
    }
  }, []);

  const [showedCasinosNumber, setShowedCasinoNumber] = useState(showedCasinos);
  const hasShowMore = useMemo(
    () => showedCasinosNumber < casinos.length,
    [showedCasinosNumber, casinos]
  );
  const showMoreCasinos = useCallback(
    setShowedCasinoNumber.bind(null, showedCasinosNumber + countAddedCasinos),
    [showedCasinosNumber]
  );

  return (
    <section className={s.otherCasinos}>
      <div className={s._bg1}></div>
      <div className={s._bg2}></div>
      <div className={s._content}>
        <div className={s._title}>Другие виды нашего казино</div>
        <div className={s._items}>
          {casinos.map((casino, index) =>
            index < showedCasinosNumber ? (
              <CasinoItem
                {...casino}
                color={color}
                fontColor={fontColor}
                key={index}
              />
            ) : null
          )}
          {hasShowMore && <ShowMore onClick={showMoreCasinos} />}
        </div>
      </div>
    </section>
  );
};

export default connect((state) => ({ allCasinos: state.casinos.casinos }))(
  OtherCasinos
);
