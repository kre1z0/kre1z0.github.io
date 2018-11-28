import React from "react";
import cn from "classnames";

import { HorizontalRule } from "../components/HorizontalRule/HorizontalRule";
import { BigH1 } from "../components/Headlines/Headlines";
import { Link } from "../components/Link/Link";
import { LeftSide } from "../components/Main/LeftSide";
import { Background, styles } from "../components/Background/Background";
import { transition } from "../components/Transition/Transition";
import { slideY, fade } from "../components/Transition/animation";

const IndexPage = ({ status }) => {
  return (
    <>
      <Background main className={cn(styles[status], fade[status], transition[status])} />
      <LeftSide className={cn(slideY[status], transition[status], fade[status])}>
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
