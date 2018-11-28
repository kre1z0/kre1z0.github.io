import React from "react";
import cn from "classnames";
import styled, { css } from "astroturf";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";

import { fade } from "./animation";

const enterTimeout = 500;
const exitTimeout = 1000;

export const transition = css`
  .entered {
    transition-duration: ${enterTimeout}ms;
    transition-timing-function: ease-in-out;
    transition-property: all;
  }
  .exiting {
    transition-duration: ${exitTimeout}ms;
    transition-timing-function: ease-in-out;
    transition-property: all;
  }
`;

const Container = styled("div")`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 5.7142rem;
  height: calc(100vh - 5.7142rem);
  padding: 0 6.4285rem;
`;

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
            <Container
            // className={cn(fade[status], transition[status])}
            >
              {React.cloneElement(children, { status })}
            </Container>
          )}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}
