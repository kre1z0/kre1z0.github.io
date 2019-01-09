import employees from "./assets/employees";
import vacancy from "./assets/vacancy";
import principles from "./assets/principles";
import photo from "./assets/photo";

import msp from "./img/portfolio/msp.png";
import mobileMsp1 from "./img/portfolio/mobileMsp/mobile-1.png";
import mobileMsp2 from "./img/portfolio/mobileMsp/mobile-2.png";
import mobileMsp3 from "./img/portfolio/mobileMsp/mobile-3.png";
import bank from "./img/portfolio/bank.png";

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
        children: [
          { text: "EverGIS", id: "evergis", bgColor: "#f8a717", screenshot: msp },
          { text: "EverGIS Online", id: "evergisOnline", bgColor: "#6c30d7", screenshot: bank },
          { text: "EverTrack", id: "evertrack", bgColor: "#0fa5f6", screenshot: msp },
        ],
      },
      {
        id: "solutions",
        title: "Решения",
        children: [
          {
            id: "msp",
            groupName: "Малый бизнес",
            text: "Бизнес-навигатор МСП",
            bgColor: "#387bc7",
            description:
              "Бесплатный сервис для предпринимателей. Найдите лучшее место для открытия бизнеса и получите готовый бизнес-план.",
            screenshot: msp,
          },
          {
            id: "mobileMsp",
            groupName: "Малый бизнес",
            text: "Мобильный бизнес-навигатор",
            bgColor: "#e0f0f6",
            textColor: "#0a2342",
            screenshot: [mobileMsp1, mobileMsp2, mobileMsp3],
            description:
              "Приложение для расчёта бизнес-планов и справочник мер поддержки предпринимателей",
          },
          {
            title: "Геомониторинг недвижимости",
            text: "Банковский сектор",
            id: "bankingSector",
            bgColor: "#45aac3",
            screenshot: bank,
            description:
              "Аналитическая система управления залоговым имуществом банка. Планирование выездных проверок и оценка стоимости объектов.",
          },
        ],
      },
    ],
    slider: true,
  },
  {
    id: "about",
    text: "СМИ о нас",
    route: "/about",
    news: [
      {
        id: "1",
        title: "Бизнес-план на основе Big Data",
        date: "23.02.2018",
        description:
          "Бесплатный геомаркетинговый сервис «Бизнес-навигатор МСП» рассчитывает и создает типовой бизнес-план для предпринимателей и для тех, кто мечтает открыть свое дело. Помогает в поисках наиболее привлекательного местоположения будущего бизнеса в конкретном городе.",
        logo: "https://www.e-xecutive.ru/assets/logo-b5985edca6b1ff92f4b3261e6a2665fc.svg",
      },
      {
        id: "2",
        title: "Cтуденая былина",
        date: "14.07.2018",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, debitis eveniet fugit inventore odit pariatur, perferendis porro quidem quis quo ratione sequi velit. A atque et id soluta temporibus voluptates.",
        logo: "https://www.e-xecutive.ru/assets/logo-b5985edca6b1ff92f4b3261e6a2665fc.svg",
      },
      {
        id: "3",
        title: "Колумб открыл Америку",
        date: "11.04.2018",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, debitis eveniet fugit inventore odit pariatur, perferendis porro quidem quis quo ratione sequi velit. A atque et id soluta temporibus voluptates.",
        logo: "https://www.e-xecutive.ru/assets/logo-b5985edca6b1ff92f4b3261e6a2665fc.svg",
      },
      {
        id: "4",
        title: "Как тренды UX-дизайна влияют на внешний вид навигаторов и карт",
        date: "12.04.2018",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, debitis eveniet fugit inventore odit pariatur, perferendis porro quidem quis quo ratione sequi velit. A atque et id soluta temporibus voluptates.",
        logo: "https://www.e-xecutive.ru/assets/logo-b5985edca6b1ff92f4b3261e6a2665fc.svg",
      },
      {
        id: "5",
        title: "Как геомаркетинговые сервисы и картографическое ПО меняют маркетинг",
        date: "22.04.2018",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, debitis eveniet fugit inventore odit pariatur, perferendis porro quidem quis quo ratione sequi velit. A atque et id soluta temporibus voluptates.",
        logo: "https://www.e-xecutive.ru/assets/logo-b5985edca6b1ff92f4b3261e6a2665fc.svg",
      },
    ],
  },
  {
    id: "jobs",
    text: "Работа у нас",
    route: "/jobs",
    additionalMenuWidth: "7rem",
    additionalMenu: [
      {
        id: "team",
        title: "Команда",
        children: [
          { id: "employees", text: "Наши сотрудники", items: employees, count: true },
          { id: "vacancy", text: "Вакансии", items: vacancy, count: true },
        ],
      },
      {
        id: "howWeAreWorking",
        title: "Как мы работаем",
        children: [
          {
            id: "process",
            text: "Рабочий процесс",
            items: principles,
          },
          { id: "photo", text: "Фото", items: photo },
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
    return true;
  }
};

export const getRouteByLocation = location => {
  if (location.pathname === "/") {
    return routes.find(({ id }) => id === "index");
  } else {
    return routes.find(({ id }) => id && location.pathname.includes(id));
  }
};

export const getRouteById = id => routes.find(route => route.id === id);

export const sectionsFromAdditionalMenu = additionalMenu => {
  const sliderIdArray = [];
  additionalMenu &&
    additionalMenu.forEach(({ children, title }) =>
      children.forEach(item => sliderIdArray.push({ ...item, parentTitle: title })),
    );

  return sliderIdArray;
};

export const getBackRouteByLocationPathName = pathname => {
  if (pathname.includes("company")) return "/";
  else return "/";
};
