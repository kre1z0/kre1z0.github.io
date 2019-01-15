import msp from "../img/portfolio/msp/msp-screen.png";
import bank from "../img/portfolio/bank.png";
import mobileMsp1 from "../img/portfolio/mobileMsp/mobile-1.png";
import mobileMsp2 from "../img/portfolio/mobileMsp/mobile-2.png";
import mobileMsp3 from "../img/portfolio/mobileMsp/mobile-3.png";

export default {
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
}