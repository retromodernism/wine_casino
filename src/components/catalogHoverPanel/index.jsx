import s from "./index.module.scss";
import { connect } from "react-redux";
import { setCatalogHover } from "../../redux/modules/catalogHover";
import classnames from "classnames";
import { ReactComponent as Apple } from "./src/apple.svg";
import { ReactComponent as Cards } from "./src/cards.svg";
import { useState } from "react";

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

const CatalogHoverPanel = ({ setCatalogHover }) => {
  const [links, setLinks] = useState(linksInit);
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
        {links.map(({ title, isActive }, index) => (
          <div
            className={classnames(s._categoriesItem, {
              [s._categoriesItem_active]: isActive,
            })}
            onMouseEnter={activateCategory.bind(null, title)}
          >
            {index === 0 ? (
              <Apple className={s._categoriesItemIcon_apple} />
            ) : (
              <Cards className={s._categoriesItemIcon_cards} />
            )}

            <p className={s._categoriesItemTitle}>{title}</p>
            <div className={s._categoriesItemIconArrow}></div>
          </div>
        ))}
        {/* <div className={s._categoriesItem}>
          <Apple className={s._categoriesItemIcon_apple} />
          <p className={s._categoriesItemTitle}>Кулинарное казино</p>
          <div className={s._categoriesItemIconArrow}></div>
        </div>
        <div
          className={classnames(s._categoriesItem, s._categoriesItem_active)}
        >
          <Cards className={s._categoriesItemIcon_cards} />
          <p className={s._categoriesItemTitle}>Классическое казино</p>
          <div className={s._categoriesItemIconArrow}></div>
        </div> */}
      </div>
      <div className={s._links}>
        {links
          .filter(({ isActive }) => isActive)[0]
          .links.map(({ title, href, isActive }) => (
            <a
              href={href}
              className={classnames(s._link, { [s._link_active]: isActive })}
            >
              {title}
            </a>
          ))}
      </div>
    </div>
  );
};

export default connect(null, { setCatalogHover })(CatalogHoverPanel);
