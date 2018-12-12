export const routes = [
  { id: "index", text: "О компании", route: "/" },
  {
    id: "portfolio",
    text: "Продукты и Решения",
    route: "/portfolio",
    additionalMenuWidth: "13.4rem",
    additionalMenu: [
      {
        label: "Продукты",
        children: [{ text: "EverGIS" }, { text: "EverGIS Online" }, { text: "EverGIS Marketing" }],
      },
      {
        label: "Решения",
        children: [
          {
            text: "Малый бизнес",
            children: [{ text: "Бизнес-навигатор МСП" }, { text: "Мобильный навигатор" }],
          },
          { text: "Банки" },
          { text: "Мониторинг транспорта" },
          { text: "Государственный сектор" },
        ],
      },
    ],
  },
  { id: "about", text: "СМИ о нас", route: "/about" },
  {
    id: "jobs",
    text: "Работа у нас",
    route: "/jobs",
    additionalMenuWidth: "8.1714rem",
    additionalMenu: [
      {
        label: "Команда",
        children: [{ text: "Наши сотрудники" }, { text: "Вакансии" }],
      },
      {
        label: "Как мы работаем",
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

const outsideLinks = [{ text: "Блог", outsideLink: "http://everpoint.ru" }];

export const routesWithOutsideLinks = routes.slice();
routesWithOutsideLinks.splice(2, 0, ...outsideLinks);

export const navigateTo = ({ navigate, pathname, direction }) => {
  const index = routes.findIndex(({ route }) => route === pathname);
  const length = routes.length;
  const nextRouteIndex = index + direction;

  if (nextRouteIndex >= 0 && nextRouteIndex < length) {
    navigate(routes[nextRouteIndex].route);
  }
};
