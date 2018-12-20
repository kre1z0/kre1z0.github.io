import React, { PureComponent } from "react";

import { Transition, TransitionGroup } from "react-transition-group";
import { getScreenshot } from "./getScreenshot";

export class Screenshot extends PureComponent {
  render() {
    const { id, screenshot, text } = this.props;
    return (
      <TransitionGroup appear>
        <Transition
          key={`${id}-screenshot`}
          timeout={{
            enter: 100,
            exit: 200,
          }}
        >
          {status => getScreenshot({ status, screenshot, text, id })}
        </Transition>
      </TransitionGroup>
    );
  }
}
