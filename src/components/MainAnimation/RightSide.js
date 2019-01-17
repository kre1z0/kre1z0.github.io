import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { RightSide as RightSideBlock } from "../Main/RightSide";
import { WillChange } from "./WillChange";
import { fade, slideUp, transition } from "../../styles/animation";

export class RightSide extends Component {
  static propTypes = {
    status: PropTypes.string,
    willChangeRightSideClassName: PropTypes.string,
    rightSideClassName: PropTypes.string,
    withRightSideAnimation: PropTypes.bool,
    selectedSectionIndex: PropTypes.number,
    transitionEnd: PropTypes.bool,
    x: PropTypes.number,
    y: PropTypes.number,
    base64styles: PropTypes.string,
  };

  shouldComponentUpdate(
    {
      status: nextStatus,
      selectedSectionIndex: nextSelectedSectionIndex,
      transitionEnd: nextTransitionEnd,
      x: nextX,
      y: nextY,
      base64styles: nextBase64styles,
    },
    nextState,
  ) {
    const { status, selectedSectionIndex, transitionEnd, x, y, base64styles } = this.props;

    return (
      status !== nextStatus ||
      selectedSectionIndex !== nextSelectedSectionIndex ||
      transitionEnd !== nextTransitionEnd ||
      x !== nextX ||
      y !== nextY ||
      base64styles !== nextBase64styles
    );
  }

  render() {
    const {
      status,
      willChangeRightSideClassName,
      rightSideClassName,
      withRightSideAnimation,
      children,
    } = this.props;

    return (
      <WillChange className={willChangeRightSideClassName}>
        <RightSideBlock
          className={cn(
            rightSideClassName,
            withRightSideAnimation && slideUp[status],
            withRightSideAnimation && fade[status],
            withRightSideAnimation && transition[status],
          )}
        >
          {children}
        </RightSideBlock>
      </WillChange>
    );
  }
}
