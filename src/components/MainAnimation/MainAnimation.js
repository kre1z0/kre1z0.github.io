import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import withRouter from "../../hoc/withRouter";
import { getBase64BackgroundByIndex } from "../Background/getBackground";
import styles from "../Background/styles";
import { ScrollConsumer } from "../ScrollProvider/ScrollProvider";
import { WillChange } from "./WillChange";
import { Background } from "../Background/Background";
import { fade, scaleIn, scaleOut, slideY, transition } from "../Transition/animation";
import { Content } from "../Main/Content";
import { LeftSide } from "../Main/LeftSide";
import { RightSide } from "../Main/RightSide";
import { FullViewportContainer } from "../../styles/main";

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
      children,
      ...props
    } = this.props;

    return (
      <ScrollConsumer>
        {({
          scrollTop,
          onRightSideRef,
          direction,
          onTransitionEnd,
          transitionEnd,
          currentRoute,
        }) => {
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
                <WillChange left style={{ transform }}>
                  <LeftSide
                    className={cn(
                      leftSideClassName,
                      slideY[status],
                      fade[status],
                      transition[status],
                    )}
                  >
                    {leftSide}
                  </LeftSide>
                </WillChange>

                {rightSide && (
                  <WillChange style={{ transform: scrollable ? "none" : transform }}>
                    <RightSide
                      ref={onRightSideRef}
                      className={cn(
                        rightSideClassName,
                        slideY[status],
                        fade[status],
                        transition[status],
                      )}
                    >
                      {rightSide}
                    </RightSide>
                  </WillChange>
                )}
                {children}
              </Content>
            </FullViewportContainer>
          );
        }}
      </ScrollConsumer>
    );
  }
}

export const MainAnimation = withRouter(MainAnimationBase);
