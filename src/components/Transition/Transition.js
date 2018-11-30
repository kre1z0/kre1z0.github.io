import React from "react";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";

import { ScrollConsumer } from "../ScrollProvider/ScrollProvider";
import { Container } from "../../components/Container/Container";
import { enterTimeout, exitTimeout } from "./animation";

export class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <ScrollConsumer>
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
                <Container>{React.cloneElement(children, { status, location })}</Container>
              )}
            </ReactTransition>
          </TransitionGroup>
        )}
      </ScrollConsumer>
    );
  }
}
