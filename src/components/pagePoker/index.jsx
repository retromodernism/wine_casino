import s from "./index.module.scss";
import Additionals from "../additionals";
import Essence from "../essence";
import Masterclass from "../masterclass";
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
  
  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  return (
    <>
      <Header />
      <main className={s.main}>
        {isDesktop && (
          <Fragment>
            <HomeClassicCaisno data={casino.home} />
            <BackToAll to="/klassicheskoe-kazino" />
            <Essence data={casino.essence} />
            <KindsOfGames data={casino.kindsOfGames} />
            <Masterclass data={casino.masterclass} />
            <Promotion background={false} data={casino.promotion} />
            <Additionals data={casino.additionals} />
            <Form />
            {/* <Variants /> */}
            {/* <Tematic /> */}
          </Fragment>
        )}
        {isTablet && (
          <Fragment>
            <HomeClassicCaisno data={casino.home} />
            <KindsOfGames_tablet data={casino.kindsOfGames} />
            <Masterclass data={casino.masterclass} />
            <Promotion data={casino.promotion} />
            {/* <Variants /> */}
            <Additionals data={casino.additionals} />
          </Fragment>
        )}
        {isMobile && (
          <Fragment>
            <HomeClassicCaisno data={casino.home} />
            <Essence data={casino.essence} />
            <KindsOfGames_tablet data={casino.kindsOfGames} />
            <Promotion data={casino.promotion} />
            {/* <Variants /> */}
            <Masterclass />
            <Additionals data={casino.additionals} />
            {/* <Tematic data={casino.tematic} /> */}
          </Fragment>
        )}
      </main>
      <Footer />
    </>
  );
};

export default MainPageFoodCasino;
