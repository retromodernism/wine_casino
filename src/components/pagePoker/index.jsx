import s from "./index.module.scss";
import Additionals from "../additionals";
import Essence from "../essence";
import Masterclass from "../masterclass";
import Promotion from "../promotion";
import HomeClassicCaisno from "../homeTemplate_classicCasino";
import { Fragment } from "react";
import homeBg from "./src/homeBg.png";
import Form from "../form";
import BackToAll from "../backToAll";
import essence1 from "./src/essence/1.webp";
import essence2 from "./src/essence/2.webp";
import essence3 from "./src/essence/3.webp";
import essence4 from "./src/essence/4.webp";
import KindsOfGames from "../kindsOfGames";
import KindsOfGames_tablet from "../kindsOfGames_tablet";
import Header from "../header";
import Footer from "../footer";
import { useEffect } from "react";

const defaultCasino = {
  title: "Покер",
  home: {
    bg: {
      desktop: {
        image: homeBg,
        width: "745px",
        height: "643px",
        top: "220px",
        right: "189px",
      },
      tablet: {
        image: homeBg,
        width: "521px",
        height: "450px",
        top: "94px",
        right: "-107px",
      },
      mobile: {
        image: homeBg,
        width: "226px",
        height: "195px",
        top: "48px",
        right: "-64px",
      },
    },
    title: "Покер",
    description:
      "Вряд ли кто-то не слышал о столь захватывающей карточной игре как покер. Правила ее очень просты, а победитель определяется преимущественно удачей. Выездной набор для покера – это удобно, стильно и полностью легально, так как в нем не задействованы настоящие деньги.",
    video: {
      id: "fZd3IMBfMB0",
    },
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
  kindsOfGames: {
    title: "Разновидности Покера",
    gameType: "poker",
  },
};

const MainPageFoodCasino = (props) => {
  const casino = props.casino || defaultCasino;

  /* Поменяем тайттл страницы */
  useEffect(() => {
    document.title = casino.title ?? "Food Casino";
  });

  const { isDesktop, isTablet, isMobile } = props;
  const mediaQueries = { isDesktop, isTablet, isMobile };

  return (
    <>
      <Header {...mediaQueries} />
      <main className={s.main}>
        {isDesktop && (
          <Fragment>
            <HomeClassicCaisno data={casino.home} {...mediaQueries} />
            <BackToAll to="/klassicheskoe-kazino" {...mediaQueries} />
            <Essence data={casino.essence} {...mediaQueries} />
            <KindsOfGames data={casino.kindsOfGames} {...mediaQueries} />
            <Masterclass data={casino.masterclass} {...mediaQueries} />
            <Promotion
              background={false}
              data={casino.promotion}
              {...mediaQueries}
            />
            <Additionals data={casino.additionals} {...mediaQueries} />
            <Form />
          </Fragment>
        )}
        {isTablet && (
          <Fragment>
            <HomeClassicCaisno data={casino.home} {...mediaQueries} />
            <KindsOfGames_tablet data={casino.kindsOfGames} {...mediaQueries} />
            <Masterclass data={casino.masterclass} {...mediaQueries} />
            <Promotion data={casino.promotion} {...mediaQueries} />
            <Additionals data={casino.additionals} {...mediaQueries} />
          </Fragment>
        )}
        {isMobile && (
          <Fragment>
            <HomeClassicCaisno data={casino.home} {...mediaQueries} />
            <Essence data={casino.essence} {...mediaQueries} />
            <KindsOfGames_tablet data={casino.kindsOfGames} {...mediaQueries} />
            <Promotion data={casino.promotion} {...mediaQueries} />
            <Masterclass {...mediaQueries} />
            <Additionals data={casino.additionals} {...mediaQueries} />
          </Fragment>
        )}
      </main>
      <Footer {...mediaQueries} />
    </>
  );
};

export default MainPageFoodCasino;
