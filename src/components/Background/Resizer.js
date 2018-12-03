import React, { PureComponent } from "react";
import debounce from "lodash/debounce";

import { getBackgroundByIndex } from "./getBackground";

export class Resizer extends PureComponent {
  constructor(props) {
    super(props);
    this.onResize = debounce(this.onResize, 44);
  }
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
      const imgW = child.clientWidth;
      const imgH = child.clientHeight;
      const imgRatio = imgH > 0 ? imgW / imgH : 1.0;

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
    const { route } = this.props;

    return <div ref={this.onRef}>{getBackgroundByIndex(route)}</div>;
  }
}
