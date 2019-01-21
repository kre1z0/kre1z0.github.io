import React, { Component } from "react";
import PropTypes from "prop-types";

import { getLongreadNavbarHeight } from "../../LongreadNavbar/LongreadNavbar";
import { ScrollbarConsumer } from "../../ScrollbarProvider/ScrollbarProvider";
import { ReactComponent as SvgMap } from "../../../img/portfolio/msp/RegionMapforBN.svg";
import styles, { MapWraper } from "./styles";

export class MapComponent extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
  };

  regions = 0;

  componentDidMount() {
    const wrapper = this.wrapper;

    if (wrapper) {
      const svg = wrapper.firstElementChild || wrapper.firstChild;
      const paths = svg.getElementsByTagName("path");
      const firstPath = paths[0];
      firstPath.classList.add(styles.isFull);
    }
  }

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop } = this.props;

    if (prevScrollTop !== scrollTop) {
      this.onFillMap();
    }
  }

  onFillMap = () => {
    const wrapper = this.wrapper;

    if (wrapper) {
      const navbarHeight = getLongreadNavbarHeight();
      const svg = wrapper.firstElementChild || wrapper.firstChild;
      const { bottom, height } = svg.getBoundingClientRect();
      const paths = svg.getElementsByTagName("path");

      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      );
      const mapInViewport = bottom - viewportHeight <= 0;

      let regions = 0;

      if (mapInViewport) {
        const totalAmount = viewportHeight - navbarHeight - height;
        const scrolled = Math.abs(bottom - viewportHeight);
        const diff = totalAmount - scrolled;
        const percentageOfTotalAmount = Math.max(100 - (diff * 100) / totalAmount);
        const percent = percentageOfTotalAmount > 100 ? 100 : percentageOfTotalAmount;

        regions = Math.round((paths.length * percent) / 100);
      } else {
        regions = 0;
      }

      if (this.regions !== regions) {
        const prevPath = paths[this.regions];
        const newPath = paths[regions];

        if (newPath) {
          newPath.classList.add(styles.isFull);
        }

        if (prevPath) {
          prevPath.classList.remove(styles.isFull);
        }
      }

      this.regions = regions;
    }
  };

  onMapRef = ref => {
    if (ref) {
      this.wrapper = ref;
    }
  };

  render() {
    return (
      <MapWraper ref={this.onMapRef}>
        <SvgMap />
      </MapWraper>
    );
  }
}

export const Map = () => (
  <ScrollbarConsumer>{({ scrollTop }) => <MapComponent scrollTop={scrollTop} />}</ScrollbarConsumer>
);
