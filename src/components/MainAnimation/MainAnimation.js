import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import withRouter from "../../hoc/withRouter";
import { getBase64BackgroundByIndex } from "../Background/getBackground";
import { mainAnimation } from "./styles";
import styles from "../Background/styles";
import { ScrollConsumer } from "../ScrollProvider/ScrollProvider";
import { WillChange } from "./WillChange";
import { Background } from "../Background/Background";
import { fade, scaleIn, scaleOut, slideY, transition } from "../Transition/animation";
import { Content } from "../Content/Content";
import { LeftSide } from "../Main/LeftSide";
import { RightSide } from "../Main/RightSide";
import { FullViewportContainer } from "../../styles/main";
import { routes } from "../../routes";

import { Resizer } from "../Background/Resizer";

class MainAnimationBase extends PureComponent {
  static propTypes = {
    status: PropTypes.string,
    leftSideClassName: PropTypes.string,
    rightSideClassName: PropTypes.string,
    scrollable: PropTypes.bool,
  };

  render() {
    const {
      status,
      leftSide,
      leftSideClassName,
      rightSide,
      rightSideClassName,
      location,
      ...props
    } = this.props;

    return (
      <ScrollConsumer>
        {({ scrollTop, onRightSideRef, direction, onTransitionEnd, transitionEnd }) => {
          const currentRoute = routes.find(({ route }) => route === location.pathname);
          const scrollable = currentRoute && currentRoute.scrollable;
          const transform = `translateY(${scrollTop}px)`;

          return (
            <FullViewportContainer>
              <WillChange
                fullViewport
                style={{ transform, overflow: transitionEnd ? "hidden" : "visible" }}
              >
                {!transitionEnd && (
                  <Background
                    onTransitionEnd={onTransitionEnd}
                    className={cn(
                      direction > 0 ? scaleIn[status] : scaleOut[status],
                      fade[status],
                      transition[status],
                      styles.default,
                      getBase64BackgroundByIndex({ ...props }),
                    )}
                  />
                )}
                <Background>
                  <Resizer transitionEnd={transitionEnd} {...props} />
                </Background>
              </WillChange>
              <Content>
                <WillChange style={{ transform }} className={leftSideClassName}>
                  <LeftSide className={cn(slideY[status], fade[status], transition[status])}>
                    {leftSide}
                  </LeftSide>
                </WillChange>
                {rightSide && (
                  <WillChange
                    className={cn(mainAnimation.rSide, rightSideClassName)}
                    style={{ transform: scrollable ? "none" : transform }}
                  >
                    <RightSide
                      ref={onRightSideRef}
                      className={cn(slideY[status], fade[status], transition[status])}
                    >
                      {rightSide}
                    </RightSide>
                  </WillChange>
                )}
              </Content>
            </FullViewportContainer>
          );
        }}
      </ScrollConsumer>
    );
  }
}

export const MainAnimation = withRouter(MainAnimationBase);
