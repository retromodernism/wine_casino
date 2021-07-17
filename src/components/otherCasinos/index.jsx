import CasinoItem from "../casinoItem";
import s from "./index.module.scss";
import stake from "./src/stake.png";
import chocolate from "./src/chocolate.png";
import cheese from "./src/cheese.png";
import tea from "./src/tea.png";
import limonad from "./src/limonad.png";
import coffee from "./src/coffee.png";
import champagne from "./src/champagne.png";
import whiskey from "./src/whiskey.png";

const OtherCasinos = (props) => {
  return (
    <section className={s.otherCasinos}>
      <div className={s._bg1}></div>
      <div className={s._bg2}></div>
      <div className={s._content}>
        <div className={s._title}>Другие виды нашего казино</div>
        <div className={s._items}>
          <CasinoItem image={stake} title="Мясное" />
          <CasinoItem image={chocolate} title="Шоколадное" />
          <CasinoItem image={cheese} title="Сырное" />
          <CasinoItem image={tea} title="Чайное" />
          <CasinoItem image={limonad} title="Безалкогольное" />
          <CasinoItem image={coffee} title="Кофейное" />
          <CasinoItem image={champagne} title="Шампанское" />
          <CasinoItem image={whiskey} title="Виски" />
          {/* <CasinoItem image={chocolate} title="Шоколадное" />
          <CasinoItem image={tea} title="Чайное" />
          <CasinoItem image={stake} title="Мясное" /> */}
          <div className={s._more}>Ещё</div>
        </div>
      </div>
    </section>
  );
};

export default OtherCasinos;
