import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Consumer } from "../../components/Provider/Provider";
import { WillChange } from "./WillChange";
import { Background } from "../Background/Background";
import { fade, scale, slideY, transition } from "../Transition/animation";
import { Content } from "../Content/Content";
import { LeftSide } from "../Main/LeftSide";
import { RightSide } from "../Main/RightSide";
import { routes } from "../../routes";

export const MainAnimation = ({ status, leftSide, rightSide, rightSideClassName, location }) => {
  return (
    <Consumer>
      {({ scrollTop, onRightSideRef }) => {
        const currentRoute = routes.find(({ route }) => route === location.pathname);
        const scrollable = currentRoute && currentRoute.scrollable;
        const transform = `translateY(${scrollTop}px)`;

        return (
          <>
            <WillChange style={{ transform }}>
              <Background earth className={cn(scale[status], fade[status], transition[status])} />
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
    </Consumer>
  );
};

MainAnimation.propTypes = {
  status: PropTypes.string,
  rightSideClassName: PropTypes.string,
  scrollable: PropTypes.bool,
};
