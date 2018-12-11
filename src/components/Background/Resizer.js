import React from "react";
import PropTypes from "prop-types";

import { getElementWidthAndHeight } from "../../utils/dom";
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
    const ref = this.wrapper;
    if (ref) {
      const child = ref.firstElementChild || ref.firstChild;

      const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      );

      const dispRatio = viewportHeight > 0 ? viewportWidth / viewportHeight : 1.0;

      const { width, height } = getElementWidthAndHeight(child);

      const imgRatio = height > 0 ? width / height : 1.0;

      if (imgRatio > dispRatio) {
        child.style.width = "auto";
        child.style.height = "100%";
      } else {
        child.style.width = "100%";
        child.style.height = "auto";
      }
    }
  };

  onRef = ref => {
    if (ref) {
      this.wrapper = ref;
    }
  };

  render() {
    const { transitionEnd, ...props } = this.props;

    return (
      <div ref={this.onRef}>
        {getSVGBackgroundByIndex({
          style: { visibility: transitionEnd ? "visible" : "hidden" },
          ...props,
        })}
      </div>
    );
  }
}
