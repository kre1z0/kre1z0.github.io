import React from "react";
import cn from "classnames";

import { HorizontalRule } from "../components/HorizontalRule/HorizontalRule";
import { BigH1 } from "../components/Headlines/Headlines";
import { Link } from "../components/Link/Link";
import { LeftSide } from "../components/Main/LeftSide";
import { Content } from "../components/Content/Content";
import { Background } from "../components/Background/Background";
import { slideY, scale, transition, fade } from "../components/Transition/animation";

const IndexPage = ({ status }) => {
  return (
    <>
      <Background earth className={cn(scale[status], fade[status], transition[status])} />
      <Content>
        <LeftSide className={cn(slideY[status], fade[status], transition[status])}>
          <HorizontalRule />
          <BigH1>
            Новый взгляд на <br /> работу с геоданными
          </BigH1>
          <Link>Подробнее о нас</Link>
        </LeftSide>
      </Content>
    </>
  );
};

export default IndexPage;
