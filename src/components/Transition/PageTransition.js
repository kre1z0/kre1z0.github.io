import React from "react";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";

import { MainLayoutConsumer } from "../MainLayoutProvider/MainLayoutProvider";
import { MainTransitionContainer } from "../Main/MainTransitionContainer";
import { enterTimeout, exitTimeout } from "./animation";

export class PageTransition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <MainLayoutConsumer>
        {({ onExited }) => (
          <TransitionGroup appear>
            <ReactTransition
              key={location.pathname}
              timeout={{
                enter: enterTimeout,
                exit: exitTimeout,
              }}
              onExited={onExited}
            >
              {status => (
                <MainTransitionContainer>
                  {React.cloneElement(children, { status, location })}
                </MainTransitionContainer>
              )}
            </ReactTransition>
          </TransitionGroup>
        )}
      </MainLayoutConsumer>
    );
  }
}
