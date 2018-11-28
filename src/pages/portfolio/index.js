import React from "react";
import cn from "classnames";

import { LeftSide } from "../../components/Main/LeftSide";
import { H1 } from "../../components/Headlines/Headlines";
import { Link } from "../../components/Link/Link";
import { Background } from "../../components/Background/Background";
import { fade, scale, slideY, transition } from "../../components/Transition/animation";
import { Content } from "../../components/Content/Content";

export const Portfolio = ({ status }) => {
  return (
    <>
      <Background russia className={cn(scale[status], fade[status], transition[status])} />
      <Content>
        <LeftSide className={cn(slideY[status], fade[status], transition[status])}>
          <H1>Продукты</H1>
          <Link>EverGIS</Link>
          <Link>EverGIS Online</Link>
          <Link>EverGIS EverTrack</Link>
        </LeftSide>
      </Content>
    </>
  );
};

export default Portfolio;
