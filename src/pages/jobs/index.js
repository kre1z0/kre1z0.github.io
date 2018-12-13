import React from "react";

import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { LeftSideMenu } from "../../components/LeftSideMenu/LeftSideMenu";

import styles from "../../styles/jobs";

const LoremIpsum = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos est illo in
    ipsum magnam maxime, molestiae officiis optio, quae quaerat, ratione repellendus sit suscipit
    tempore totam ullam voluptates! Possimus?
  </p>
);

const Jobs = props => {
  const { location } = props;

  return (
    <MainAnimation
      {...props}
      leftSide={<LeftSideMenu location={location} />}
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
