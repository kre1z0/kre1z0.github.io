import React, { PureComponent } from "react";

import { GoNextLink } from "../components/GoNextLink/GoNextLink";
import { MainAnimation } from "../components/MainAnimation/MainAnimation";
import { HorizontalRule } from "../components/Atoms/Atoms";
import { BigH1 } from "../components/Atoms/Atoms";

import styles from "../styles/index";

export class IndexPage extends PureComponent {
  render() {
    return (
      <MainAnimation
        {...this.props}
        withSvg
        containerClassName={styles.indexContainer}
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
