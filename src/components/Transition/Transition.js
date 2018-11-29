import React from "react";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";

import { Consumer } from "../../components/Provider/Provider";
import { Container } from "../../components/Container/Container";
import { enterTimeout, exitTimeout } from "./animation";

export class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <Consumer>
        {({ onEnter, onExited }) => {
          return (
            <TransitionGroup appear>
              <ReactTransition
                key={location.pathname}
                timeout={{
                  enter: enterTimeout,
                  exit: exitTimeout,
                }}
                onExited={onExited}
              >
                {status => <Container>{React.cloneElement(children, { status, location })}</Container>}
              </ReactTransition>
            </TransitionGroup>
          );
        }}
      </Consumer>
    );
  }
}
