/** Wine */
/* Home */
import loupe from "./src/loupe.svg";
import sertificate from "./src/sertificate.svg";
import chipLeft_red from "./src/chipLeft_red.svg";
import chipRight_red from "./src/chipRight_red.svg";
import bgWine_desktop from "./src/bgWine.png";
import bgWine_tablet from "./src/bgWine_tab.png";
import bgWine_mobile from "./src/bgWine_mob.png";
/* Essence */
import wineglass from "./src/wineglass.png";
import chips from "./src/chips.png";
import peoples from "./src/peoples.png";
import wine from "./src/wine.png";
/* Masterclass */
import pizzaIcon from "./src/masterclass/iconPizza.svg";
import lidIcon from "./src/masterclass/iconLid.svg";
import juiceIcon from "./src/masterclass/iconJuice.svg";
import masterclassImage from "./src/masterclass/image.png";
import iconWineglass from "./src/masterclass/iconWineglass.svg";
import iconParty from "./src/masterclass/iconParty.svg";
import iconConference from "./src/masterclass/iconConference.svg";
/* Promotion */
import camera from "./src/promotion/camera.svg";
import photograph from "./src/promotion/photograph.svg";
import sertificatePromotion from "./src/promotion/sertificate.svg";
import promotionBg from "./src/promotion/bg.png";
/* Additionals */
import wineAdditinalsBg from "./src/additionals/bg.png";
/* HowItWas */
import imageHowItWas_1 from "./src/howItWas/image1.png";
import imageHowItWas_2 from "./src/howItWas/image2.png";
import imageHowItWas_3 from "./src/howItWas/image3.png";
import imageHowItWas_4 from "./src/howItWas/image4.png";
import bgHowItWas from "./src/howItWas/bg.png";
/* Tematic */
import gatsby1 from "./src/tematic/gatsby1.png";
import gatsby2 from "./src/tematic/gatsby2.png";
import gatsby3 from "./src/tematic/gatsby3.png";
import lasVegas1 from "./src/tematic/lasVegas1.png";
import lasVegas2 from "./src/tematic/lasVegas2.png";
import lasVegas3 from "./src/tematic/lasVegas3.png";
import mafia1 from "./src/tematic/mafia1.png";
import mafia2 from "./src/tematic/mafia2.png";
import mafia3 from "./src/tematic/mafia3.png";
/* About */
import imageAbout from "./src/about/image.png";

/** Cheese */
/* Home */
import chipLeft_yellow from "./src/chipLeft_yellow.svg";
import chipRight_yellow from "./src/chipRight_yellow.svg";
import bgCheese_desktop from "./src/bgCheese.png";
import bgCheese_tablet from "./src/bgCheese_tab.png";
import bgCheese_mobile from "./src/bgCheese_mob.png";
/* Essence */
import imageEssenceCheese from "./src/cheeseCasino/essence/image1.png";
import bgEssenceCheese from "./src/cheeseCasino/essence/bg.png";
/* Promotion */
import bgCheesePromotion from "./src/cheeseCasino/promotion/bg.png";
/* Additionals */
import bgCheeseAdditionals from "./src/cheeseCasino/additionals/bg.png";
/* HowItWas */
import bgHowItWasCheese from './src/cheeseCasino/howItWas/bg.png';
import image1HowItWasCheese from './src/cheeseCasino/howItWas/image1.png'
import image2HowItWasCheese from './src/cheeseCasino/howItWas/image2.png'
import image3HowItWasCheese from './src/cheeseCasino/howItWas/image3.png'
import image4HowItWasCheese from './src/cheeseCasino/howItWas/image4.png'

const casinos = [
  {
    url: "/vinnoe-kazino",
    type: "foodCasino",
    header: {
      logo: {
        desktop: {
          color: "#323232",
        },
        tablet: {
          // color: "#323232",
          color: "#A2000C",
        },
        mobile: {
          color: "#A2000C",
        },
      },
    },
    home: {
      logo: {
        color: "#323232",
      },
      title: {
        text: "Винное<br/>фан-казино",
        color: "#A2000C",
      },
      video: {
        id: "fZd3IMBfMB0",
        color: "#A2000C",
      },
      features: {
        items: [
          {
            top: {
              type: "text",
              text: "4",
            },
            bottom: {
              description: "сорта вина",
            },
          },
          {
            top: {
              type: "icon",
              icon: loupe,
            },
            bottom: {
              description: "интересные факты",
            },
          },
          {
            top: {
              type: "icon",
              icon: sertificate,
            },
            bottom: {
              description: "новый формат",
            },
          },
        ],
        color: "#A2000C",
      },
      chips: {
        left: chipLeft_red,
        right: chipRight_red,
      },
      background: {
        desktop: {
          image: bgWine_desktop,
          width: "732px",
          height: "469px",
          right: "10.42%",
          top: "225px",
        },
        tablet: {
          image: bgWine_tablet,
          width: "298px",
          height: "672px",
          right: "4.28%",
          top: 0,
        },
        mobile: {
          image: bgWine_mobile,
          width: "157px",
          height: "357px",
          right: 0,
          top: "8px",
        },
      },
    },
    essence: {
      title: "В чем суть?",
      // itemsColor: "#2A9D76",
      itemsColor: "#2A9D76",
      items: [
        {
          title: "Дегустация",
          description:
            "В начале игры сомелье рассказывает правила, раздаёт фишки и предлагает игрокам продегустировать определенный вид вина. Гости получают пробник, и пытаются и понять вкусовые и иные характеристики.",
          image: wineglass,
        },
        {
          title: "Ставки",
          description:
            "После того, как участники распробовали вкус, они начинают делать ставки на разные поля игрового стола. Как и в классическом казино, можно расположить несколько фишек на разные сектора.",
          image: chips,
        },
        {
          title: "Вскрытие",
          description:
            "Когда ставки сделаны, ведущий подробно описывает продегустированный продукт и чьи догадки оказались верными, а чьи нет. Распределяется выигрыш между участниками.",
          image: peoples,
        },
        {
          title: "Приз",
          description:
            "После завершения всех раундов, определяется победитель с наибольшим числом заработанных очков. Ему выдается сувенир, который согласуется с заказчиком (например, один из продуктов игры).",
          image: wine,
        },
      ],
    },
    masterclass: {
      color: "#2A9D76",
      title: "Проведем мастеркласс у вас или у нас",
      holidays: {
        title: "Организация праздников на выезде",
        description:
          "Компания фан-казино предоставляет широкий спектр услуг по организации выездного фан-казино в Москве. Мы берем на себя доставку игрового поля, продуктов и всей необходимой атрибутики для проведения эффектного мероприятия. Также мы предоставляем услуги профессиональных крупье, сомелье, бариста и фотографов.",
      },
      offer: {
        offerItems: [
          {
            icon: pizzaIcon,
            description: "съедобная «рулетка»",
          },
          {
            icon: lidIcon,
            description: "сырные, медовые, хлебные дегустации",
          },
          {
            icon: juiceIcon,
            description:
              "алкогольные/ слабоалкогольные/ безалкогольные<br/>фан-казино",
          },
        ],
      },
      image: masterclassImage,
      rent: {
        title: "Аренда площадки<br />на ваше мероприятие",
        text: "Компания фан-казино располагает собственными площадками для организации торжеств любой тематики и масштаба.",
        items: [
          {
            icon: iconWineglass,
            title: "на праздник",
          },
          {
            icon: iconParty,
            title: "на корпоратив",
          },
          {
            icon: iconConference,
            title: "на конференцию",
          },
        ],
      },
      video: {
        id: "fZd3IMBfMB0",
      },
    },
    promotion: {
      color: "#A2000C",
      // color: "#323232",
      bg: {
        image: promotionBg,
        width: "761px",
        height: "459px",
        top: "0",
        left: "-8.125%",
      },
      items: [
        {
          title: "Фотобудка в подарок",
          description: "при заказе<br />maxi пакета",
          icon: {
            svg: camera,
            desktop: {
              height: "105px",
              width: "139px",
              bottom: "-18px",
              right: "33px",
            },
            tablet: {
              width: "95px",
              height: "72px",
              bottom: "-12px",
              right: "23px",
            },
            mobile: {
              width: "78px",
              height: "59px",
              bottom: "-10px",
              right: "19px",
            },
          },
        },
        {
          title: "Фотограф бесплатно",
          description: "при заказе<br />от 5-ти столов",
          icon: {
            svg: photograph,
            desktop: {
              height: "127px",
              width: "123px",
              bottom: "-8px",
              right: "26px",
            },
            tablet: {
              width: "84px",
              height: "87px",
              bottom: "-5px",
              right: "18px",
            },
            mobile: {
              width: "68px",
              height: "71px",
              bottom: "-5px",
              right: "14px",
            },
          },
        },
        {
          title: "Сертификат 10 000 ₽",
          description: "при заказе maxi пакета",
          icon: {
            svg: sertificatePromotion,
            desktop: {
              height: "79px",
              width: "123px",
              bottom: "-23px",
              right: "25px",
            },
            tablet: {
              width: "84px",
              height: "54px",
              bottom: "-16px",
              right: "17px",
            },
            mobile: {
              width: "68px",
              height: "44px",
              bottom: "-13px",
              right: "14px",
            },
          },
        },
      ],
    },
    variants: {
      color: {
        item: "#2A9D76",
        popular: "#A2000C",
      },
      // color: {
      //   item: "#323232",
      //   popular: "#2A9D76",
      // },
    },
    additionals: {
      title: "Так же вы можете добавить",
      // color: "#323232",
      color: "#2A9D76",
      bg: {
        image: wineAdditinalsBg,
        right: "-172px",
        top: "-2px",
        height: "698px",
        width: "520px",
      },
    },
    otherCasinos: {
      color: "#A2000C",
      fontColor: "#FFFFFF",
    },
    howItWas: {
      title: "Как это было",
      color: "#A2000C",
      images: [
        imageHowItWas_1,
        imageHowItWas_2,
        imageHowItWas_3,
        imageHowItWas_4,
        imageHowItWas_4,
      ],
      bg: {
        image: bgHowItWas,
        height: "630px",
        width: "630px",
        top: "-89px",
        left: "-15.47%",
      },
    },
    tematic: {
      items: [
        {
          title: "Гэтсби",
          description:
            "Организуем для вас вечеринку в стиле Гэтсби. Гламур и декаданс 20-х годов прошлого века сделали их популярной темой для тематических праздников. Помимо оформления здесь не малую роль играют благородные напитки, что отлично сочетается с нашими услугами.",
          images: [gatsby1, gatsby2, gatsby3],
        },
        {
          title: "Лас-Вегас",
          description:
            "Город расположенный в пустыне стал символом кутежа, богатства и веселья. Установим игровые столы фан-казино различной направленности на событии для создания атмосферы в стиле Лас-Вегаса.",
          images: [lasVegas1, lasVegas2, lasVegas3],
        },
        {
          title: "Мафия",
          description:
            "Эпоха шарма подпольных баров и романтизированной мафии из зарубежных фильмов, всегда притягивала внимание людей. Легко воплотим желание окунуться в те времена с помощью аниматоров и соответствующего реквизита.",
          images: [mafia1, mafia2, mafia3],
        },
      ],
    },
    about: {
      title: "О винном фан-казино",
      items: [
        {
          type: "text",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu turpis amet, eu tincidunt purus, arcu. Tellus eget dui eget lorem. Nunc cras nulla viverra pulvinar. Mauris purus, lobortis nulla tortor dis platea. Erat nibh amet, dictum a, amet at interdum integer. Arcu pulvinar parturient porttitor scelerisque in sit ut ultricies. Accumsan, sed consectetur aliquam donec. Platea eu odio tincidunt auctor sed. Viverra at et velit lacus facilisis est amet, lacus. Erat eleifend at faucibus nisl purus enim pulvinar. Ultrices fringilla risus sodales dignissim tristique venenatis nulla aenean tortor. Amet, orci gravida fermentum, morbi iaculis dui laoreet. Dictum id nulla imperdiet purus pellentesque etiam et habitant viverra. Donec arcu sagittis ipsum nulla. Tempus dolor eu consequat elit ut diam hendrerit enim odio. Auctor sed volutpat morbi ut tristique netus. ",
        },
        {
          type: "image",
          image: imageAbout,
          desktop: {
            height: "auto",
          },
          tablet: {
            height: "471px",
          },
          mobile: {
            height: "42vh",
          },
        },
        {
          type: "text",
          text: "<p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
        },
        {
          type: "text",
          text: "<p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
        },
        {
          type: "text",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu turpis amet, eu tincidunt purus, arcu. Tellus eget dui eget lorem. Nunc cras nulla viverra pulvinar. Mauris purus, lobortis nulla tortor dis platea. Erat nibh amet, dictum a, amet at interdum integer. Arcu pulvinar parturient porttitor scelerisque in sit ut ultricies. Accumsan, sed consectetur aliquam donec. Platea eu odio tincidunt auctor sed. Viverra at et velit lacus facilisis est amet, lacus. Erat eleifend at faucibus nisl purus enim pulvinar. Ultrices fringilla risus sodales dignissim tristique venenatis nulla aenean tortor. Amet, orci gravida fermentum, morbi iaculis dui laoreet. Dictum id nulla imperdiet purus pellentesque etiam et habitant viverra. Donec arcu sagittis ipsum nulla. Tempus dolor eu consequat elit ut diam hendrerit enim odio. Auctor sed volutpat morbi ut tristique netus. ",
          column: "1/-1",
        },
      ],
    },
    footer: {
      textColor: "#323232", // цвет текста правого блока
      mainColor: "#A2000C", // цвет левого блока, лого, инпутов у формы
      iconColor: "#ffffff", // цвет иконок в футере
      innerTextColor: "#ffffff", // цвет текста в левом блоке
    },
  },
  {
    url: "/syrnoe-kazino",
    type: "foodCasino",
    header: {
      logo: {
        desktop: {
          color: "#CF972A",
        },
        tablet: {
          color: "#CF972A",
        },
        mobile: {
          color: "#CF972A",
        },
      },
    },
    home: {
      logo: {
        color: "#323232",
      },
      title: {
        text: "Сырное<br/>фан-казино",
        color: "#CF972A",
      },
      video: {
        link: "fZd3IMBfMB0",
        color: "#CF972A",
      },
      features: {
        items: [
          {
            top: {
              type: "text",
              text: "8",
            },
            bottom: {
              description: "сортов сыра",
            },
          },
          {
            top: {
              type: "icon",
              icon: loupe,
            },
            bottom: {
              description: "сорта вина",
            },
          },
          {
            top: {
              type: "icon",
              icon: sertificate,
            },
            bottom: {
              description: "новый формат",
            },
          },
        ],
        color: "#CF972A",
      },
      chips: {
        left: chipLeft_yellow,
        right: chipRight_yellow,
      },
      background: {
        desktop: {
          image: bgCheese_desktop,
          width: "889px",
          height: "614px",
          right: "-83px",
          top: "225px",
        },
        tablet: {
          image: bgCheese_tablet,
          width: "453px",
          height: "496px",
          right: "0",
          top: "153px",
        },
        mobile: {
          image: bgCheese_mobile,
          width: "160px",
          height: "208px",
          right: "0",
          top: "120px",
        },
      },
    },
    essence: {
      title: "В чем суть?",
      // itemsColor: "#2A9D76",
      itemsColor: "#2A9D76",
      items: [
        {
          title: "Дегустация",
          description:
            "В начале игры сомелье рассказывает правила, раздаёт фишки и предлагает игрокам продегустировать определенный вид вина. Гости получают пробник, и пытаются и понять вкусовые и иные характеристики.",
          image: imageEssenceCheese,
        },
        {
          title: "Ставки",
          description:
            "После того, как участники распробовали вкус, они начинают делать ставки на разные поля игрового стола. Как и в классическом казино, можно расположить несколько фишек на разные сектора.",
          image: chips,
        },
        {
          title: "Вскрытие",
          description:
            "Когда ставки сделаны, ведущий подробно описывает продегустированный продукт и чьи догадки оказались верными, а чьи нет. Распределяется выигрыш между участниками.",
          image: peoples,
        },
        {
          title: "Приз",
          description:
            "После завершения всех раундов, определяется победитель с наибольшим числом заработанных очков. Ему выдается сувенир, который согласуется с заказчиком (например, один из продуктов игры).",
          image: wine,
        },
      ],
      bg: {
        image: bgEssenceCheese,
        top: "916px",
        right: 0,
        width: "244px",
        height: "241px",
      },
    },
    masterclass: {
      color: "#2A9D76",
      title: "Проведем мастеркласс у вас или у нас",
      holidays: {
        title: "Организация праздников на выезде",
        description:
          "Компания фан-казино предоставляет широкий спектр услуг по организации выездного фан-казино в Москве. Мы берем на себя доставку игрового поля, продуктов и всей необходимой атрибутики для проведения эффектного мероприятия. Также мы предоставляем услуги профессиональных крупье, сомелье, бариста и фотографов.",
      },
      offer: {
        offerItems: [
          {
            icon: pizzaIcon,
            description: "съедобная «рулетка»",
          },
          {
            icon: lidIcon,
            description: "сырные, медовые, хлебные дегустации",
          },
          {
            icon: juiceIcon,
            description:
              "алкогольные/ слабоалкогольные/ безалкогольные<br/>фан-казино",
          },
        ],
      },
      image: masterclassImage,
      rent: {
        title: "Аренда площадки<br />на ваше мероприятие",
        text: "Компания фан-казино располагает собственными площадками для организации торжеств любой тематики и масштаба.",
        items: [
          {
            icon: iconWineglass,
            title: "на праздник",
          },
          {
            icon: iconParty,
            title: "на корпоратив",
          },
          {
            icon: iconConference,
            title: "на конференцию",
          },
        ],
      },
      video: {
        id: "fZd3IMBfMB0",
      },
    },
    promotion: {
      color: "#CF972A",
      // color: "#323232",
      bg: {
        image: bgCheesePromotion,
        width: "444px",
        height: "444px",
        top: "0",
        left: "-152px",
      },
      items: [
        {
          title: "Фотобудка в подарок",
          description: "при заказе<br />maxi пакета",
          icon: {
            svg: camera,
            desktop: {
              height: "105px",
              width: "139px",
              bottom: "-18px",
              right: "33px",
            },
            tablet: {
              width: "95px",
              height: "72px",
              bottom: "-12px",
              right: "23px",
            },
            mobile: {
              width: "78px",
              height: "59px",
              bottom: "-10px",
              right: "19px",
            },
          },
        },
        {
          title: "Фотограф бесплатно",
          description: "при заказе<br />от 5-ти столов",
          icon: {
            svg: photograph,
            desktop: {
              height: "127px",
              width: "123px",
              bottom: "-8px",
              right: "26px",
            },
            tablet: {
              width: "84px",
              height: "87px",
              bottom: "-5px",
              right: "18px",
            },
            mobile: {
              width: "68px",
              height: "71px",
              bottom: "-5px",
              right: "14px",
            },
          },
        },
        {
          title: "Сертификат 10 000 ₽",
          description: "при заказе maxi пакета",
          icon: {
            svg: sertificatePromotion,
            desktop: {
              height: "79px",
              width: "123px",
              bottom: "-23px",
              right: "25px",
            },
            tablet: {
              width: "84px",
              height: "54px",
              bottom: "-16px",
              right: "17px",
            },
            mobile: {
              width: "68px",
              height: "44px",
              bottom: "-13px",
              right: "14px",
            },
          },
        },
      ],
    },
    variants: {
      color: {
        item: "#2A9D76",
        popular: "#A2000C",
      },
      // color: {
      //   item: "#323232",
      //   popular: "#2A9D76",
      // },
    },
    additionals: {
      title: "Так же вы можете добавить",
      // color: "#323232",
      color: "#2A9D76",
      bg: {
        image: bgCheeseAdditionals,
        right: "-216px",
        top: "430px",
        height: "254px",
        width: "414px",
      },
    },
    otherCasinos: {
      color: "#CF972A",
      fontColor: "#323232",
    },
    howItWas: {
      title: "Как это было",
      color: "#CF972A",
      images: [
        image1HowItWasCheese,
        image2HowItWasCheese,
        image3HowItWasCheese,
        image4HowItWasCheese,
        image4HowItWasCheese,
      ],
      bg: {
        image: bgHowItWasCheese,
        height: "254px",
        width: "414px",
        top: "-162px",
        left: "-180px",
      },
    },
    tematic: {
      items: [
        {
          title: "Гэтсби",
          description:
            "Организуем для вас вечеринку в стиле Гэтсби. Гламур и декаданс 20-х годов прошлого века сделали их популярной темой для тематических праздников. Помимо оформления здесь не малую роль играют благородные напитки, что отлично сочетается с нашими услугами.",
          images: [gatsby1, gatsby2, gatsby3],
        },
        {
          title: "Лас-Вегас",
          description:
            "Город расположенный в пустыне стал символом кутежа, богатства и веселья. Установим игровые столы фан-казино различной направленности на событии для создания атмосферы в стиле Лас-Вегаса.",
          images: [lasVegas1, lasVegas2, lasVegas3],
        },
        {
          title: "Мафия",
          description:
            "Эпоха шарма подпольных баров и романтизированной мафии из зарубежных фильмов, всегда притягивала внимание людей. Легко воплотим желание окунуться в те времена с помощью аниматоров и соответствующего реквизита.",
          images: [mafia1, mafia2, mafia3],
        },
      ],
    },
    about: {
      title: "О винном фан-казино",
      items: [
        {
          type: "text",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu turpis amet, eu tincidunt purus, arcu. Tellus eget dui eget lorem. Nunc cras nulla viverra pulvinar. Mauris purus, lobortis nulla tortor dis platea. Erat nibh amet, dictum a, amet at interdum integer. Arcu pulvinar parturient porttitor scelerisque in sit ut ultricies. Accumsan, sed consectetur aliquam donec. Platea eu odio tincidunt auctor sed. Viverra at et velit lacus facilisis est amet, lacus. Erat eleifend at faucibus nisl purus enim pulvinar. Ultrices fringilla risus sodales dignissim tristique venenatis nulla aenean tortor. Amet, orci gravida fermentum, morbi iaculis dui laoreet. Dictum id nulla imperdiet purus pellentesque etiam et habitant viverra. Donec arcu sagittis ipsum nulla. Tempus dolor eu consequat elit ut diam hendrerit enim odio. Auctor sed volutpat morbi ut tristique netus. ",
        },
        {
          type: "image",
          image: imageAbout,
          desktop: {
            height: "auto",
          },
          tablet: {
            height: "471px",
          },
          mobile: {
            height: "42vh",
          },
        },
        {
          type: "text",
          text: "<p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
        },
        {
          type: "text",
          text: "<p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
        },
        {
          type: "text",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu turpis amet, eu tincidunt purus, arcu. Tellus eget dui eget lorem. Nunc cras nulla viverra pulvinar. Mauris purus, lobortis nulla tortor dis platea. Erat nibh amet, dictum a, amet at interdum integer. Arcu pulvinar parturient porttitor scelerisque in sit ut ultricies. Accumsan, sed consectetur aliquam donec. Platea eu odio tincidunt auctor sed. Viverra at et velit lacus facilisis est amet, lacus. Erat eleifend at faucibus nisl purus enim pulvinar. Ultrices fringilla risus sodales dignissim tristique venenatis nulla aenean tortor. Amet, orci gravida fermentum, morbi iaculis dui laoreet. Dictum id nulla imperdiet purus pellentesque etiam et habitant viverra. Donec arcu sagittis ipsum nulla. Tempus dolor eu consequat elit ut diam hendrerit enim odio. Auctor sed volutpat morbi ut tristique netus. ",
          column: "1/-1",
        },
      ],
    },
    footer: {
      textColor: "#323232", // цвет текста правого блока
      mainColor: "#CF972A", // цвет левого блока, лого, инпутов у формы
      iconColor: "#323232", // цвет иконок в футере
      innerTextColor: "#323232", // цвет текста в левом блоке
    },
  },
];

export default casinos;
