import React from "react";

import { HorizontalRule } from "../components/HorizontalRule/HorizontalRule";
import { BigH1 } from "../components/Headlines/Headlines";
import { Link } from "../components/Link/Link";
import { LeftSide } from "../components/Main/LeftSide";

const IndexPage = () => {
  return (
    <>
      <LeftSide>
        <HorizontalRule />
        <BigH1>
          Новый взгляд на <br /> работу с геоданными
        </BigH1>
        <Link>Подробнее о нас</Link>
      </LeftSide>
    </>
  );
};

export default IndexPage;
