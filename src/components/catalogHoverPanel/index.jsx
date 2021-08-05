import s from "./index.module.scss";
import { connect } from "react-redux";
import { setCatalogHover } from "../../redux/modules/catalogHover";
import classnames from "classnames";
import { ReactComponent as Apple } from "./src/apple.svg";
import { ReactComponent as Cards } from "./src/cards.svg";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const linksInit = [
  {
    title: "Кулинарное казино",
    isActive: true,
    links: [
      {
        title: "Винное казино",
        href: "/",
        isActive: true,
      },
      {
        title: "Сырное казино",
        href: "/",
        isActive: false,
      },
      {
        title: "Шоколадное казино",
        href: "/",
        isActive: false,
      },
      {
        title: "Чайное казино",
        href: "/",
        isActive: false,
      },
      {
        title: "Мясное казино",
        href: "/",
        isActive: false,
      },
      {
        title: "Пивное казино",
        href: "/",
        isActive: false,
      },
      {
        title: "Виски казино",
        href: "/",
        isActive: false,
      },
      {
        title: "Безалкогольное казино",
        href: "/",
        isActive: false,
      },
      {
        title: "Шампанское казино",
        href: "/",
        isActive: false,
      },
      {
        title: "Кофейное казино",
        href: "/",
        isActive: false,
      },
    ],
  },
  {
    title: "Классическое казино",
    isActive: false,
    links: [
      {
        title: "Рулетка",
        href: "/",
        isActive: false,
      },
      {
        title: "Покер",
        href: "/",
        isActive: false,
      },
      {
        title: "Блэк Джек",
        href: "/",
        isActive: false,
      },
      {
        title: "Онлайн казино",
        href: "/",
        isActive: false,
      },
      {
        title: "Кости",
        href: "/",
        isActive: false,
      },
      {
        title: "Гэмбл",
        href: "/",
        isActive: false,
      },
      {
        title: "Крэпс",
        href: "/",
        isActive: false,
      },
      {
        title: "Грин дайс",
        href: "/",
        isActive: false,
      },
      {
        title: "Баккара",
        href: "/",
        isActive: false,
      },
    ],
  },
];

const CatalogHoverPanel = ({ setCatalogHover, casinos }) => {
  const foodCasinos = casinos.filter(({ type }) => type === "foodCasino");
  const classicCasinos = casinos.filter(({ type }) => type === "classicCasino");

  const currentPath = useLocation().pathname;

  const casinosLinks = [
    {
      title: "Кулинарное казино",
      link: "/",
      isActive: true,
      links: foodCasinos.map(({ url, title }) => ({
        title,
        href: url,
        isActive: currentPath === url,
      })),
    },
    {
      title: "Классическое казино",
      link: "/klassicheskoe-kazino",
      isActive: false,
      links: classicCasinos.map(({ url, title }) => ({
        title,
        href: url,
        isActive: currentPath === url,
      })),
    },
  ];

  const [links, setLinks] = useState(casinosLinks);
  const activateCategory = (title) => {
    const newLinks = links.map((item) =>
      item.title === title
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setLinks(newLinks);
  };

  return (
    <div
      className={s._catalogHoverPanel}
      onMouseEnter={setCatalogHover.bind(null, true)}
      onMouseLeave={setCatalogHover.bind(null, false)}
    >
      <div className={s._cateories}>
        {links.map(({ title, isActive, link }, index) => (
          <Link
            className={classnames(s._categoriesItem, {
              [s._categoriesItem_active]: isActive,
            })}
            to={link}
            onMouseEnter={activateCategory.bind(null, title)}
            onClick={setCatalogHover.bind(null, false)}
          >
            {index === 0 ? (
              <Apple className={s._categoriesItemIcon_apple} />
            ) : (
              <Cards className={s._categoriesItemIcon_cards} />
            )}

            <p className={s._categoriesItemTitle}>{title}</p>
            <div className={s._categoriesItemIconArrow}></div>
          </Link>
        ))}
      </div>
      <div className={s._links}>
        {links
          .filter(({ isActive }) => isActive)[0]
          .links.map(({ title, href, isActive }) => (
            <Link
              to={href}
              className={classnames(s._link, { [s._link_active]: isActive })}
              onClick={setCatalogHover.bind(null, false)}
            >
              {title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default connect((state) => ({ casinos: state.casinos.casinos }), {
  setCatalogHover,
})(CatalogHoverPanel);
