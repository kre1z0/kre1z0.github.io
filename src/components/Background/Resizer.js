import React from "react";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";

import { getSVGBackgroundByIndex } from "./getBackground";

export class Resizer extends React.PureComponent {
  static propTypes = {
    transitionEnd: PropTypes.bool,
    route: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    if (this.svg) {
      const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      );

      const dispRatio = viewportHeight > 0 ? viewportWidth / viewportHeight : 1.0;
      const imgW = this.svg.clientWidth;
      const imgH = this.svg.clientHeight;
      const imgRatio = imgH > 0 ? imgW / imgH : 1.0;

      if (imgRatio > dispRatio) {
        this.svg.style.width = "auto";
        this.svg.style.height = "100%";
      } else {
        this.svg.style.width = "100%";
        this.svg.style.height = "auto";
      }
    }
  };

  onRef = ref => {
    if (ref) {
      this.svg = findDOMNode(ref);
    }
  };

  render() {
    const { route, transitionEnd } = this.props;

    return (
      <>
        {getSVGBackgroundByIndex({
          route,
          ref: this.onRef,
          style: { visibility: transitionEnd ? "visible" : "hidden" },
        })}
      </>
    );
  }
}
