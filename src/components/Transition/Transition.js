import React from "react";
import cn from "classnames";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";

import { Background } from "../../components/Background/Background";
import { Container } from "../../components/Container/Container";
import { Content } from "../../components/Content/Content";
import { fade, slideY, scale, transition, enterTimeout, exitTimeout } from "./animation";

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
          {status => (
            <Container>
              <Background main className={cn(scale[status], fade[status], transition[status])} />
              <Content className={cn(slideY[status], fade[status], transition[status])}>{children}</Content>
            </Container>
          )}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}
