import React from "react";

import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H1 } from "../../components/Headlines/Headlines";
import { Link } from "../../components/Link/Link";

import styles from "../../styles/jobs";

const LoremIpsum = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos est illo in
    ipsum magnam maxime, molestiae officiis optio, quae quaerat, ratione repellendus sit suscipit
    tempore totam ullam voluptates! Possimus?
  </p>
);

const Jobs = props => {
  return (
    <MainAnimation
      {...props}
      leftSide={
        <>
          <H1>Команда</H1>
          <Link isActive={true}>Наши сотрудники</Link>
          <br />
          <H1>Работа у нас</H1>
          <Link>Как мы работаем</Link>
          <Link>Фото</Link>
          <Link>Вакансии</Link>
        </>
      }
      rightSideClassName={styles.rightSide}
      rightSide={
        <CenterBlock>
          <h1>start</h1>
          {Array.from({ length: 24 }, (_, index) => (
            <LoremIpsum key={index} />
          ))}
          <h1>end</h1>
        </CenterBlock>
      }
    />
  );
};

export default Jobs;
