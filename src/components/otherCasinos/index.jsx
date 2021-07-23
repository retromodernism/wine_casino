import CasinoItem from "../casinoItem";
import s from "./index.module.scss";
import cx from "classnames";
import stake from "./src/stake.png";
import chocolate from "./src/chocolate.png";
import cheese from "./src/cheese.png";
import tea from "./src/tea.png";
import limonad from "./src/limonad.png";
import coffee from "./src/coffee.png";
import champagne from "./src/champagne.png";
import whiskey from "./src/whiskey.png";
import beer from "./src/beer.png";
import tincture from "./src/tincture.png";
import liquor from "./src/liquor.png";
import chilli from "./src/chilli.png";
import fat from "./src/fat.png";
import bread from "./src/bread.png";
import honey from "./src/honey.png";
import molecular from "./src/molecular.png";
import wine from "./src/wine.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const casinos = [
  {
    title: "Мясное",
    image: stake,
  },
  {
    title: "Шоколадное",
    image: chocolate,
  },
  {
    title: "Сырное",
    image: cheese,
  },
  {
    title: "Чайное",
    image: tea,
  },
  {
    title: "Безалкогольное",
    image: limonad,
  },
  {
    title: "Кофейное",
    image: coffee,
  },
  {
    title: "Шампанское",
    image: champagne,
  },
  {
    title: "Виски",
    image: whiskey,
  },
  {
    title: "Пивное",
    image: beer,
  },
  {
    title: "Настойки",
    image: tincture,
  },
  {
    title: "Ликерное",
    image: liquor,
  },
  {
    title: "Чили",
    image: chilli,
  },
  {
    title: "Сало",
    image: fat,
  },
  {
    title: "Пивное",
    image: beer,
  },
  {
    title: "Хлебное",
    image: bread,
  },
  {
    title: "Медовое",
    image: honey,
  },
  {
    title: "Молекулярное",
    image: molecular,
  },
  {
    title: "Винное",
    image: wine,
  },
];

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

const OtherCasinos = (props) => {
  /* Media Queries */

  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  let showedCasinos, countAddedCasinos;
  if (isDesktop) {
    [showedCasinos, countAddedCasinos] = [8, 8];
  }
  if (isTablet) {
    [showedCasinos, countAddedCasinos] = [9, 6];
  }

  const [showedCasinosNumber, setShowedCasinoNumber] = useState(showedCasinos);
  const hasShowMore = showedCasinosNumber < casinos.length;

  return (
    <section className={s.otherCasinos}>
      <div className={s._bg1}></div>
      <div className={s._bg2}></div>
      <div className={s._content}>
        <div className={s._title}>Другие виды нашего казино</div>
        <div className={s._items}>
          {casinos.map((casino, index) =>
            index < showedCasinosNumber ? <CasinoItem {...casino} /> : null
          )}
          {hasShowMore && (
            <ShowMore
              onClick={setShowedCasinoNumber.bind(
                null,
                showedCasinosNumber + countAddedCasinos
              )}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default OtherCasinos;
