import msp from "../img/portfolio/msp/msp-screen.png";
import bank from "../img/portfolio/geomonitoring/bank.png";
import mobileMsp1 from "../img/portfolio/mobileMsp/mobile-1.png";
import mobileMsp2 from "../img/portfolio/mobileMsp/mobile-2.png";
import mobileMsp3 from "../img/portfolio/mobileMsp/mobile-3.png";
import rrIcon from "../img/portfolio/msp/rr.svg";
import bankIcon from "../img/portfolio/msp/bank.svg";
import mspVideo1 from "../videos/msp/1_1.mp4";
import mspVideo1Poster from "../videos/msp/posters/1_1_000.jpg";
import mspVideo2 from "../videos/msp/1_2.mp4";
import mspVideo2Poster from "../videos/msp/posters/1_2_000.jpg";
import mspVideo3 from "../videos/msp/1_3.mp4";
import mspVideo3Poster from "../videos/msp/posters/1_3_000.jpg";

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
        { text: "EverGIS", id: "evergis", projectBackgroundColor: "#f8a717", screenshot: msp },
        {
          text: "EverGIS Online",
          id: "evergisOnline",
          projectBackgroundColor: "#35343c",
          screenshot: bank,
          link: "public.everpoint.ru",
          description:
            "Картографический сервис, который позволяет оценить местность по различным параметрам",
        },
        { text: "EverTrack", id: "evertrack", projectBackgroundColor: "#0fa5f6", screenshot: msp },
      ],
    },
    {
      id: "solutions",
      title: "Решения",
      children: [
        {
          id: "msp",
          type: "Малый бизнес",
          // groupName: "Малый бизнес",
          text: "Бизнес-навигатор МСП",
          projectBackgroundColor: "#387bc7",
          description:
            "Бесплатный сервис для предпринимателей. Найдите лучшее место для открытия бизнеса и получите готовый бизнес-план.",
          screenshot: msp,
          link: "navigator.smbn.ru",
          achievements: [
            {
              amount: "172",
              text: "Столиц субъектов РФ и городов с населением более 100 тыс. чел.",
            },
            { amount: "103", text: "Концепций бизнеса доступны для расчёта бизнес-плана" },
            { amount: "450 000", text: "Пользователей воспользовались сервисом за два года" },
            { amount: "270 000", text: "Предпринимателей зарегистрированы в бизнес-навигаторе" },
            { icon: rrIcon, text: "Подключена публичная кадастровая карта Росреестра" },
            { icon: bankIcon, text: "Бизнес-планы принимаются банками-партнёрами Корпорации МСП" },
          ],
          videos: [
            { title: "Новичок", source: mspVideo1, poster: mspVideo1Poster },
            {
              title: "Предприниматель со стартовым капиталом",
              source: mspVideo2,
              poster: mspVideo2Poster,
            },
            { title: "Опытный предприниматель", source: mspVideo3, poster: mspVideo3Poster },
          ],
        },
        {
          id: "mobileMsp",
          type: "Малый бизнес",
          // groupName: "Малый бизнес",
          text: "Мобильный бизнес-навигатор",
          projectBackgroundColor: "#e0f0f6",
          textColor: "#0a2342",
          screenshot: [mobileMsp1, mobileMsp2, mobileMsp3],
          description:
            "Приложение для расчёта бизнес-планов и справочник мер поддержки предпринимателей",
          ios: "https://itunes.apple.com/ru/developer/корпорация-мсп/id1253348895?mt=8",
          android: "https://play.google.com/store/apps/developer?id=АО+«Корпорация+«МСП»",
        },
        {
          title: "Геомониторинг недвижимости",
          type: "Банковский сектор",
          text: "Банковский сектор",
          id: "geomonitoring",
          projectBackgroundColor: "#009AEB",
          screenshot: bank,
          description:
            "Аналитическая система управления залоговым имуществом банка. Планирование выездных проверок и оценка стоимости объектов.",
        },
      ],
    },
  ],
  slider: true,
};
