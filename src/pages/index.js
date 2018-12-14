import React from "react";

import { MainAnimation } from "../components/MainAnimation/MainAnimation";
import { HorizontalRule, Link } from "../components/Atoms/Atoms";
import { BigH1 } from "../components/Atoms/Atoms";

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
