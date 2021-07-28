import s from "./index.module.scss";
import Additionals from "../additionals";
import Croupiers from "../croupiers";
import Essence from "../essence";
import Masterclass from "../masterclass";
import OtherCasinos from "../otherCasinos";
import Promotion from "../promotion";
import Tematic from "../tematic";
import Variants from "../variants";
import { useMediaQuery } from "react-responsive";
import HomeClassicCaisno from "../homeTemplate_classicCasino";
import { Fragment } from "react";
import homeBg from "./src/homeBg.png";
import Form from "../form";
import BackToAll from "../backToAll";
import essence1 from "./src/essence/1.png";
import essence2 from "./src/essence/2.png";
import essence3 from "./src/essence/3.png";
import essence4 from "./src/essence/4.png";

const data = {
  home: {
    bg: homeBg,
    title: "Покер",
    description:
      "Вряд ли кто-то не слышал о столь захватывающей карточной игре как покер. Правила ее очень просты, а победитель определяется преимущественно удачей. Выездной набор для покера – это удобно, стильно и полностью легально, так как в нем не задействованы настоящие деньги.",
  },
  essence: {
    title: "Правила игры",
    itemsColor: "#323232",
    items: [
      {
        title: "",
        image: essence1,
        description: "Игроки перед раздачей карт, должны сделать ставку.",
      },
      {
        title: "",
        image: essence2,
        description:
          "После размещения ставок всеми игроками, дилер сдаёт игрокам и себе по 3 карты.",
      },
      {
        title: "",
        image: essence3,
        description:
          "Затем игроки могут сбросить карты, потеряв все свои ставки или продолжить игру. Как только все игроки приняли решения по ставкам, дилер вскрывает карты игроков.",
      },
      {
        title: "",
        image: essence4,
        description: "Затем дилер сравнивает свои карты с картами игроков.",
      },
    ],
  },
};

const MainPageFoodCasino = (props) => {
  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <main className={s.main}>
      {isDesktop && (
        <Fragment>
          <HomeClassicCaisno {...data.home} />
          <BackToAll />
          <Essence {...data.essence} />
          {/* Рулетки */}
          <Masterclass />
          <Promotion background={false} />
          <Additionals />
          <Form />
          <Variants />
          <Tematic />
        </Fragment>
      )}
      {isTablet && (
        <Fragment>
          <HomeClassicCaisno {...data.home} />
          {/* рулетки */}
          <Masterclass />
          <Promotion />
          <Variants />
          <Additionals />
        </Fragment>
      )}
      {isMobile && (
        <Fragment>
          <HomeClassicCaisno {...data.home} />
          <Essence {...data.essence} />
          {/* Рулетки */}
          <Promotion />
          <Variants />
          <Additionals />
          <Masterclass />
          <Tematic />
        </Fragment>
      )}
    </main>
  );
};

export default MainPageFoodCasino;
