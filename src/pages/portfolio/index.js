import React from "react";

import { LeftSide } from "../../components/Main/LeftSide";
import { H1 } from "../../components/Headlines/Headlines";
import { Link } from "../../components/Link/Link";

export const Portfolio = () => {
  return (
    <>
      <LeftSide>
        <H1>Продукты</H1>
        <Link>EverGIS</Link>
        <Link>EverGIS Online</Link>
        <Link>EverGIS EverTrack</Link>
      </LeftSide>
    </>
  );
};

export default Portfolio;
