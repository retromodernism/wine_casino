import hash from "object-hash";

// Casinos images
import wineCasino_mini from "./../../components/variants/src/image1.png";
import wineCasino_middle from "./../../components/variants/src/image2.png";
import wineCasino_maxi from "./../../components/variants/src/image3.png";
import wineCasinoCart from "../../components/cart/src/wineCasinoImage.png";

// Equipment images
import chairClassic from "../../components/additionals/src/chairClassic.png";
import chairKyara from "../../components/additionals/src/chair.png";
import chairLeather from "../../components/additionals/src/leatherChair.png";
import cash from "../../components/additionals/src/cash.png";

// Services images
import pitBoss from "../../components/additionals/src/pitBoss.png";
import magician from "../../components/additionals/src/magician.png";
import thimblerigger from "../../components/additionals/src/thimblerigger.png";

const positions = [
  {
    title: "Стул-классика",
    image: { normal: chairClassic, cart: chairClassic },
    price: 1500,
    count: { title: "за шт", value: 1, fixed: false },
    type: "equipment",
    cartTitle: "Стул-классика",
  },
  {
    title: "Стул-кьяра",
    image: { normal: chairKyara, cart: chairKyara },
    price: 2000,
    count: { title: "за шт", value: 1, fixed: false },
    type: "equipment",
    cartTitle: "Стул-кьяра",
  },
  {
    title: "Кожаный стул",
    image: { normal: chairLeather, cart: chairLeather },
    price: 2500,
    count: { title: "за шт", value: 1, fixed: false },
    type: "equipment",
    cartTitle: "Кожаный стул",
  },
  {
    title: "Брендированые фан-мани",
    image: { normal: cash, cart: cash },
    price: 500,
    count: { title: "100 купюр", value: 100, fixed: false },
    type: "equipment",
    cartTitle: "Брендированые фан-мани",
  },
  {
    title: "Стул-классика1",
    image: { normal: chairClassic, cart: chairClassic },
    price: 1500,
    count: { title: "за шт", value: 1, fixed: false },
    type: "equipment",
    cartTitle: "Стул-классика",
  },
  {
    title: "Стул-кьяра1",
    image: { normal: chairKyara, cart: chairKyara },
    price: 2000,
    count: { title: "за шт", value: 1, fixed: false },
    type: "equipment",
    cartTitle: "Стул-кьяра",
  },
  {
    title: "Кожаный стул1",
    image: { normal: chairLeather, cart: chairLeather },
    price: 2500,
    count: { title: "за шт", value: 1, fixed: false },
    type: "equipment",
    cartTitle: "Кожаный стул",
  },
  {
    title: "Брендированые фан-мани1",
    image: { normal: cash, cart: cash },
    price: 500,
    count: { title: "100 купюр", value: 100, fixed: false },
    type: "equipment",
    cartTitle: "Брендированые фан-мани",
  },
  {
    title: "Стул-классика2",
    image: { normal: chairClassic, cart: chairClassic },
    price: 1500,
    count: { title: "за шт", value: 1, fixed: false },
    type: "equipment",
    cartTitle: "Стул-классика",
  },
  {
    title: "Стул-кьяра2",
    image: { normal: chairKyara, cart: chairKyara },
    price: 2000,
    count: { title: "за шт", value: 1, fixed: false },
    type: "equipment",
    cartTitle: "Стул-кьяра",
  },
  {
    title: "Кожаный стул2",
    image: { normal: chairLeather, cart: chairLeather },
    price: 2500,
    count: { title: "за шт", value: 1, fixed: false },
    type: "equipment",
    cartTitle: "Кожаный стул",
  },
  {
    title: "Брендированые фан-мани2",
    image: { normal: cash, cart: cash },
    price: 500,
    count: { title: "100 купюр", value: 100, fixed: false },
    type: "equipment",
    cartTitle: "Брендированые фан-мани",
  },

  {
    title: "Пит-босс",
    image: { normal: pitBoss, cart: pitBoss },
    price: 8000,
    count: { fixed: true, value: 1 },
    type: "service",
    description: "курирует работу крупье",
    cartTitle: "Пит-босс",
  },
  {
    title: "Фокусник",
    image: { normal: magician, cart: magician },
    price: 8000,
    count: { fixed: true, value: 1 },
    type: "service",
    description: "проведет незабываемое шоу",
    cartTitle: "Фокусник",
  },
  {
    title: "Напёрсточник",
    image: { normal: thimblerigger, cart: thimblerigger },
    price: 8000,
    count: { fixed: true, value: 1 },
    type: "service",
    description: "сделает ваш вечер более запутанным, но интригующим",
    cartTitle: "Напёрсточник",
  },
  {
    title: "Пит-босс1",
    image: { normal: pitBoss, cart: pitBoss },
    price: 8000,
    count: { fixed: true, value: 1 },
    type: "service",
    description: "курирует работу крупье",
    cartTitle: "Пит-босс",
  },
  {
    title: "Фокусник1",
    image: { normal: magician, cart: magician },
    price: 8000,
    count: { fixed: true, value: 1 },
    type: "service",
    description: "проведет незабываемое шоу",
    cartTitle: "Фокусник",
  },
  {
    title: "Напёрсточник1",
    image: { normal: thimblerigger, cart: thimblerigger },
    price: 8000,
    count: { fixed: true, value: 1 },
    type: "service",
    description: "сделает ваш вечер более запутанным, но интригующим",
    cartTitle: "Напёрсточник",
  },
  {
    title: "Пит-босс2",
    image: { normal: pitBoss, cart: pitBoss },
    price: 8000,
    count: { fixed: true, value: 1 },
    type: "service",
    description: "курирует работу крупье",
    cartTitle: "Пит-босс",
  },
  {
    title: "Фокусник2",
    image: { normal: magician, cart: magician },
    price: 8000,
    count: { fixed: true, value: 1 },
    type: "service",
    description: "проведет незабываемое шоу",
    cartTitle: "Фокусник",
  },
  {
    title: "Напёрсточник2",
    image: { normal: thimblerigger, cart: thimblerigger },
    price: 8000,
    count: { fixed: true, value: 1 },
    type: "service",
    description: "сделает ваш вечер более запутанным, но интригующим",
    cartTitle: "Напёрсточник",
  },

  {
    title: "Пакет — «Mini»",
    image: { normal: wineCasino_mini, cart: wineCasinoCart },
    price: 34000,
    count: { value: 1, fixed: false },
    type: "casino",
    casinoType: "wine",
    cartTitle: "Винное казино",
    cartItemDescription: "Mini пакет",
    description: "до 15 человек | до 2-х часов",
    isPopular: false,
    options: [
      "до 15 человек",
      "до 2-х часов работы",
      "услуги аниматора",
      "малое игровое полотно",
      "импортное вино — 4 сорта",
      "пластиковые бокалы",
    ],
  },
  {
    title: "Пакет — «Middle»",
    image: { normal: wineCasino_middle, cart: wineCasinoCart },
    price: 64000,
    count: { fixed: false, value: 1 },
    type: "casino",
    casinoType: "wine",
    cartTitle: "Винное казино",
    cartItemDescription: "Middle пакет",
    description: "до 50 человек | до 3-х часов",
    isPopular: true,
    options: [
      "до 50 человек",
      "до 3-х часов работы",
      "услуги сомелье",
      "большое игровое полотно",
      "импортное вино — 8 сортов",
      "пластиковые бокалы премиум",
      "подарочный набор — 10 бутылочек",
    ],
  },
  {
    title: "Пакет — «Maxi»",
    image: { normal: wineCasino_maxi, cart: wineCasinoCart },
    price: 79000,
    count: { value: 1, fixed: false },
    type: "casino",
    casinoType: "wine",
    cartTitle: "Винное казино",
    cartItemDescription: "Maxi пакет",
    description: "до 100 человек | до 4-х часов",
    isPopular: false,
    options: [
      "до 100 человек",
      "до 4-х часов работы",
      "услуги сомелье",
      "игровой стол",
      "импортное вино — 10 сортов",
      "стеклянные бокалы",
      "чехлы для бутылок",
      "официант и закуски",
      "подарочный набор — 20 бутылочек",
    ],
  },
];

const positionsWithId = positions.map((item) => ({ ...item, id: hash(item) }));

export default positionsWithId;
