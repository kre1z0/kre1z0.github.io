import React, { PureComponent } from "react";

import { MainAnimation } from "../components/MainAnimation/MainAnimation";
import { HorizontalRule, GatsbyLink } from "../components/Atoms/Atoms";
import { BigH1 } from "../components/Atoms/Atoms";
import styles from "../styles/index";

export class IndexPage extends PureComponent {
  render() {
    return (
      <MainAnimation
        {...this.props}
        withSvg
        containerClassName={styles.indexPageContainer}
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
  }
}

export default IndexPage;
