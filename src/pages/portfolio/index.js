import React from "react";
import cn from "classnames";

import { Background, styles } from "../../components/Background/Background";
import { LeftSide } from "../../components/Main/LeftSide";
import { H1 } from "../../components/Headlines/Headlines";
import { Link } from "../../components/Link/Link";
import { transition } from "../../components/Transition/Transition";
import { slideY, fade } from "../../components/Transition/animation";

export const Portfolio = ({ status }) => {
  return (
    <>
      <Background portfolio className={cn(styles[status], fade[status], transition[status])} />
      <LeftSide className={cn(slideY[status], fade[status], transition[status])}>
        <H1>Продукты</H1>
        <Link>EverGIS</Link>
        <Link>EverGIS Online</Link>
        <Link>EverGIS EverTrack</Link>
      </LeftSide>
    </>
  );
};

export default Portfolio;
