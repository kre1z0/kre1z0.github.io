import React, { PureComponent } from "react";

import { GoNextLink } from "../components/GoNextLink/GoNextLink";
import { MainAnimation } from "../components/MainAnimation/MainAnimation";
import { HorizontalRule } from "../components/Atoms/Atoms";
import { BigH1 } from "../components/Atoms/Atoms";

export class IndexPage extends PureComponent {
  render() {
    return (
      <MainAnimation
        {...this.props}
        withSvg
        leftSide={
          <>
            <HorizontalRule />
            <BigH1>
              Геосервисы для <br /> принятия решений
            </BigH1>
            <GoNextLink to="/company" gatsby>
              О компании
            </GoNextLink>
          </>
        }
      />
    );
  }
}

export default IndexPage;
