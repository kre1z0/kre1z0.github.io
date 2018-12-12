import React from "react";

import { News } from "../../components/Cards/News";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H1 } from "../../components/Headlines/Headlines";
import { Link } from "../../components/Link/Link";

export const About = props => {
  return (
    <MainAnimation
      {...props}
      leftSide={
        <>
          <H1>СМИ о нас</H1>
          <Link>Все комментарии</Link>
        </>
      }
      rightSide={
        <>
          <News
            title="Бизнес-план на основе Big Data"
            date="23.07.2018"
            description="Бесплатный геомаркетинговый сервис «Бизнес-навигатор МСП» рассчитывает и создает типовой бизнес-план для предпринимателей и для тех, кто мечтает открыть свое дело. Помогает в поисках наиболее привлекательного местоположения будущего бизнеса в конкретном городе."
            logo="https://www.e-xecutive.ru/assets/logo-b5985edca6b1ff92f4b3261e6a2665fc.svg"
          />
        </>
      }
    />
  );
};

export default About;
