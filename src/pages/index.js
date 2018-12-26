import React from "react";

import { MainAnimation } from "../components/MainAnimation/MainAnimation";
import { HorizontalRule, GatsbyLink } from "../components/Atoms/Atoms";
import { BigH1 } from "../components/Atoms/Atoms";

const IndexPage = props => {
  return (
    <MainAnimation
      {...props}
      withSvg
      leftSide={
        <>
          <HorizontalRule />
          <BigH1>
            Новый взгляд на <br /> работу с геоданными
          </BigH1>
          <GatsbyLink to="/">Подробнее о нас</GatsbyLink>
        </>
      }
    />
  );
};

export default IndexPage;
