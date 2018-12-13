import React from "react";

import { LeftSideMenu } from "../../components/LeftSideMenu/LeftSideMenu";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";

export const Portfolio = props => {
  const { location } = props;
  return (
    <MainAnimation
      {...props}
      leftSide={<LeftSideMenu location={location} />}
      rightSide={
        <div>
          <h1>rightSide</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos est
            illo in ipsum magnam maxime, molestiae officiis optio, quae quaerat, ratione repellendus
            sit suscipit tempore totam ullam voluptates! Possimus?
          </p>
        </div>
      }
    />
  );
};

export default Portfolio;
