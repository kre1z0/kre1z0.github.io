import React from "react";

import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H1 } from "../../components/Headlines/Headlines";
import { Link } from "../../components/Link/Link";

export const About = props => {
  return (
    <MainAnimation
      {...props}
      leftSide={
        <>
          <H1>About</H1>
          <Link>test</Link>
          <Link>test</Link>
          <Link>test</Link>
        </>
      }
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

export default About;
