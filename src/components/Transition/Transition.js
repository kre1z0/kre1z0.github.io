import React from "react";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";

import { Container } from '../../components/Container/Container';
import { enterTimeout, exitTimeout } from "./animation";

export class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <TransitionGroup appear>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: enterTimeout,
            exit: exitTimeout,
          }}
        >
          {status => <Container>{React.cloneElement(children, { status })}</Container>}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}
