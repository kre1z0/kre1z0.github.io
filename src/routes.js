export const routes = [
  { text: "О компании", route: "/" },
  {
    text: "Продукты и Решения",
    route: "/portfolio",
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
  { text: "СМИ о нас", route: "/about" },
  { text: "Блог", route: "/blog" },
  { text: "Работа у нас", route: "/jobs", scrollable: true },
  { text: "Контакты", route: "/contacts" },
];

export const navigateTo = ({ navigate, pathname, direction }) => {
  const index = routes.findIndex(({ route }) => route === pathname);
  const length = routes.length;
  const nextRouteIndex = index + direction;

  if (nextRouteIndex >= 0 && nextRouteIndex < length) {
    navigate(routes[nextRouteIndex].route);
  }
};
