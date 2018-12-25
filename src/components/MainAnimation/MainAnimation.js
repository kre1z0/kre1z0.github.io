import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import withRouter from "../../hoc/withRouter";
import { getBase64BackgroundByIndex } from "../Background/getBackground";
import styles from "../Background/styles";
import { MainLayoutConsumer } from "../MainLayoutProvider/MainLayoutProvider";
import { WillChange } from "./WillChange";
import { Background } from "../Background/Background";
import { fade, scaleIn, scaleOut, slideUp, transition } from "../Transition/animation";
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
    withSvg: PropTypes.bool,
    base64styles: PropTypes.string,
    containerClassName: PropTypes.string,
    leftSideWillChangeClassName: PropTypes.string,
    willChangeLeftSideClassName: PropTypes.string,
    willChangeRightSideClassName: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    backgroundClassName: PropTypes.string,
    withRightSideAnimation: PropTypes.bool,
  };

  static defaultProps = {
    withRightSideAnimation: true,
  };

  render() {
    const {
      status,
      leftSide,
      leftSideClassName,
      rightSide,
      rightSideClassName,
      children,
      svgClassName,
      withSvg,
      base64styles,
      containerClassName,
      willChangeLeftSideClassName,
      willChangeRightSideClassName,
      backgroundClassName,
      withRightSideAnimation,
      x,
      y,
      ...props
    } = this.props;

    return (
      <MainLayoutConsumer>
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

          // about page slider
          const transformToPoints = `translate(${x}px, ${y}px)`;
          const aboutBgStyle = transitionEnd
            ? {
                transform: transformToPoints,
                transition: "transform 500ms cubic-bezier(0.2, 1, 0.6, 1) 0s",
              }
            : {};
          const withChangeBase64ToSvg = withSvg ? !transitionEnd : true;

          return (
            <FullViewportContainer>
              <WillChange
                fullViewport
                style={{
                  transform,
                  overflow: transitionEnd ? "hidden" : "visible",
                }}
              >
                {withChangeBase64ToSvg && (
                  <Background
                    style={{
                      ...aboutBgStyle,
                    }}
                    onTransitionEnd={onTransitionEnd}
                    className={cn(
                      direction > 0 ? scaleIn[status] : scaleOut[status],
                      fade[status],
                      transition[status],
                      styles.default,
                      base64styles || getBase64BackgroundByIndex({ ...props }),
                      backgroundClassName,
                    )}
                  />
                )}
                {withSvg && (
                  <Background>
                    <Resizer svgClassName={svgClassName} transitionEnd={transitionEnd} {...props} />
                  </Background>
                )}
              </WillChange>
              <Content className={cn(containerClassName)}>
                <WillChange className={willChangeLeftSideClassName} left style={{ transform }}>
                  <LeftSide
                    className={cn(
                      leftSideClassName,
                      slideUp[status],
                      fade[status],
                      transition[status],
                    )}
                  >
                    {leftSide}
                  </LeftSide>
                </WillChange>

                {rightSide && (
                  <WillChange
                    className={willChangeRightSideClassName}
                    style={{ transform: scrollable ? "none" : transform }}
                  >
                    <RightSide
                      ref={onRightSideRef}
                      className={cn(
                        rightSideClassName,
                        withRightSideAnimation && slideUp[status],
                        withRightSideAnimation && fade[status],
                        withRightSideAnimation && transition[status],
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
      </MainLayoutConsumer>
    );
  }
}

export const MainAnimation = withRouter(MainAnimationBase);
