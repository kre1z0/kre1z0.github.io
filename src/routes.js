import msp from "./img/msp.png";

export const routes = [
  { id: "index", text: "О компании", route: "/" },
  {
    id: "portfolio",
    text: "Продукты и Решения",
    route: "/portfolio",
    additionalMenuWidth: "12rem",
    additionalMenu: [
      {
        id: "products",
        title: "Продукты",
        children: [{ text: "EverGIS" }, { text: "EverGIS Online" }, { text: "EverTrack" }],
      },
      {
        id: "solutions",
        title: "Решения",
        children: [
          {
            title: "Малый бизнес",
            id: "smallBusiness",
            secondLevel: [
              {
                text: "Бизнес-навигатор МСП",
                bgColor: "#387bc7",
                id: "msp",
                description:
                  "Бесплатный сервис для предпринимателей. Найдите лучшее место для открытия бизнеса и получите готовый бизнес-план.",
                screenshot: msp,
              },
              {
                text: "Мобильный бизнес-навигатор",
                id: "mobileMsp",
                bgColor: "red",
                description: "lorem ipsum",
              },
            ],
          },
          { text: "Банковский сектор" },
        ],
      },
    ],
  },
  { id: "about", text: "СМИ о нас", route: "/about" },
  {
    id: "jobs",
    text: "Работа у нас",
    route: "/jobs",
    additionalMenuWidth: "7rem",
    additionalMenu: [
      {
        id: "team",
        title: "Команда",
        children: [{ text: "Наши сотрудники", count: 19 }, { text: "Вакансии", count: 3 }],
      },
      {
        id: "howWeAreWorking",
        title: "Как мы работаем",
        children: [
          {
            text: "Рабочий процесс",
          },
          { text: "Фото" },
        ],
      },
    ],
    scrollable: true,
  },
  { id: "contacts", text: "Контакты", route: "/contacts" },
  { text: "Блог", outsideLink: "http://everpoint.ru" },
];

export const navigateTo = ({ navigate, pathname, direction }) => {
  const outsideLinkFilteredRoutes = routes.filter(({ outsideLink }) => !outsideLink);
  const index = outsideLinkFilteredRoutes.findIndex(({ route }) => route === pathname);
  const length = outsideLinkFilteredRoutes.length;
  const nextRouteIndex = index + direction;

  if (nextRouteIndex >= 0 && nextRouteIndex < length) {
    navigate(outsideLinkFilteredRoutes[nextRouteIndex].route);
  }
};

export const getRouteByLocation = location => {
  if (location.pathname === "/") {
    return routes.find(({ id }) => id === "index");
  } else {
    return routes.find(({ id }) => id && location.pathname.includes(id));
  }
};
