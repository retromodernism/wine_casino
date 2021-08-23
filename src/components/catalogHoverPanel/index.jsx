import s from "./index.module.scss";
import { connect } from "react-redux";
import {
  openFoodCasinos,
  closeFoodCasinos,
  openClassicCasinos,
  closeClassicCasinos,
} from "../../redux/modules/catalogHover";
import classnames from "classnames";
import { ReactComponent as Apple } from "./src/apple.svg";
import { ReactComponent as Cards } from "./src/cards.svg";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useCallback } from "react";
import { useMemo } from "react";

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

const CatalogHoverPanel = ({
  casinosType = "foodCasino",
  openFoodCasinos,
  closeFoodCasinos,
  openClassicCasinos,
  closeClassicCasinos,
  casinos,
}) => {
  const casinosToPrint = useMemo(
    () => casinos.filter(({ type }) => type === casinosType),
    [casinosType, casinos]
  );

  const openPanel = useMemo(
    () => (casinosType === "foodCasino" ? openFoodCasinos : openClassicCasinos),
    [casinosType]
  );

  const closePanel = useMemo(
    () =>
      casinosType === "foodCasino" ? closeFoodCasinos : closeClassicCasinos,
    [casinosType]
  );

  const currentPath = useLocation().pathname;

  const casinosLinks = useMemo(
    () => [
      {
        title:
          casinosType === "foodCasino"
            ? "Кулинарное казино"
            : "Классическое казино",
        link: casinosType === "foodCasino" ? "/" : "/klassicheskoe-kazino",
        isActive: true,
        links: casinosToPrint.map(({ url, title }) => ({
          title,
          href: url,
          isActive: currentPath === url,
        })),
      },
    ],
    [casinosType, casinosToPrint, currentPath]
  );

  const [links, setLinks] = useState(casinosLinks);
  const activateCategory = useCallback((title) => {
    const newLinks = links.map((item) =>
      item.title === title
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setLinks(newLinks);
  });

  return (
    <div
      className={s._catalogHoverPanel}
      onMouseEnter={openPanel}
      onMouseLeave={closePanel}
    >
      <div className={s._cateories} style={{ display: "none" }}>
        {links.map(({ title, isActive, link }, index) => (
          <Link
            className={classnames(s._categoriesItem, {
              [s._categoriesItem_active]: isActive,
            })}
            to={link}
            onMouseEnter={activateCategory.bind(null, title)}
            onClick={closePanel}
            key={index}
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
          .links.map(({ title, href, isActive }, index) => (
            <Link
              to={href}
              className={classnames(s._link, { [s._link_active]: isActive })}
              onClick={closePanel}
              key={index}
            >
              {title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default connect((state) => ({ casinos: state.casinos.casinos }), {
  openFoodCasinos,
  closeFoodCasinos,
  openClassicCasinos,
  closeClassicCasinos,
})(CatalogHoverPanel);
