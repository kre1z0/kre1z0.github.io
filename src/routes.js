export const routes = [
  { id: "index", text: "О компании", route: "/" },
  {
    id: "portfolio",
    text: "Продукты и Решения",
    route: "/portfolio",
    additionalMenuWidth: "13.4rem",
    additionalMenu: [
      {
        id: "products",
        title: "Продукты",
        children: [{ text: "EverGIS" }, { text: "EverGIS Online" }, { text: "EverGIS Marketing" }],
      },
      {
        id: "solutions",
        title: "Решения",
        children: [
          {
            text: "Малый бизнес",
            secondLevel: [{ text: "Бизнес-навигатор МСП" }, { text: "Мобильный навигатор" }],
          },
          { text: "Банки" },
          { text: "Мониторинг транспорта" },
          { text: "Государственный сектор" },
        ],
      },
    ],
  },
  { text: "Блог", outsideLink: "http://everpoint.ru" },
  { id: "about", text: "СМИ о нас", route: "/about" },
  {
    id: "jobs",
    text: "Работа у нас",
    route: "/jobs",
    additionalMenuWidth: "8.1714rem",
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

export const getRouteByLocation = location => routes.find(({ route, id }) => id && location.pathname.includes(id));
