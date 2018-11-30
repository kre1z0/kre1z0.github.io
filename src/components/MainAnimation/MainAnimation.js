import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { ScrollConsumer } from "../ScrollProvider/ScrollProvider";
import { WillChange } from "./WillChange";
import { Background } from "../Background/Background";
import { fade, scale, slideY, transition } from "../Transition/animation";
import { Content } from "../Content/Content";
import { LeftSide } from "../Main/LeftSide";
import { RightSide } from "../Main/RightSide";
import { routes } from "../../routes";

import { Resizer } from "../Background/Resizer";

export const MainAnimation = ({ status, leftSide, rightSide, rightSideClassName, location }) => (
  <ScrollConsumer>
    {({ scrollTop, onRightSideRef }) => {
      const currentRoute = routes.find(({ route }) => route === location.pathname);
      const scrollable = currentRoute && currentRoute.scrollable;
      const transform = `translateY(${scrollTop}px)`;

      return (
        <>
          <WillChange style={{ transform }}>
            <Background className={cn(scale[status], fade[status], transition[status])}>
              <Resizer route={currentRoute ? currentRoute.route : ""} />
            </Background>
          </WillChange>
          <Content>
            <WillChange style={{ transform }}>
              <LeftSide className={cn(slideY[status], fade[status], transition[status])}>
                {leftSide}
              </LeftSide>
            </WillChange>
            {rightSide && (
              <WillChange style={{ transform: scrollable ? "none" : transform }}>
                <RightSide
                  ref={onRightSideRef}
                  className={cn(
                    slideY[status],
                    fade[status],
                    transition[status],
                    rightSideClassName,
                  )}
                >
                  {rightSide}
                </RightSide>
              </WillChange>
            )}
          </Content>
        </>
      );
    }}
  </ScrollConsumer>
);

MainAnimation.propTypes = {
  status: PropTypes.string,
  rightSideClassName: PropTypes.string,
  scrollable: PropTypes.bool,
};
