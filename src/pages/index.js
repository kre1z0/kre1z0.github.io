import React from "react";

import { MainAnimation } from "../components/MainAnimation/MainAnimation";
import { HorizontalRule } from "../components/HorizontalRule/HorizontalRule";
import { BigH1 } from "../components/Headlines/Headlines";
import { Link } from "../components/Link/Link";

const IndexPage = props => {
  return (
    <MainAnimation
      {...props}
      leftSide={
        <>
          <HorizontalRule />
          <BigH1>
            Новый взгляд на <br /> работу с геоданными
          </BigH1>
          <Link>Подробнее о нас</Link>
        </>
      }
    />
  );
};

export default IndexPage;
