import React, { PureComponent } from "react";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";

import { ConstellationPointsContainer, TransformContainer, Point, FakePoint } from "./styles";

export class ConstellationPoints extends PureComponent {
  static propTypes = {
    selectedSectionIndex: PropTypes.number,
    onTransform: PropTypes.func,
    x: PropTypes.number,
    y: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.debouncedTransform = debounce(this.transform, 200);
  }

  static defaultProps = {
    pointsAmount: 5,
    x: 0,
    y: 0,
  };

  points = [];
  fakePoint = null;

  componentDidMount() {
    window.addEventListener("orientationchange", this.debouncedTransform);
  }

  componentWillUnmount() {
    window.removeEventListener("orientationchange", this.debouncedTransform);
  }

  componentDidUpdate({ selectedSectionIndex: prevSelectedSectionIndex }, prevState) {
    const { selectedSectionIndex } = this.props;

    if (
      selectedSectionIndex !== prevSelectedSectionIndex &&
      this.points[selectedSectionIndex] &&
      this.fakePoint
    ) {
      this.transform();
    }
  }

  transform = () => {
    const { selectedSectionIndex, onTransform, x, y } = this.props;
    const { left: fakeLeft, top: fakeTop } = this.fakePoint.getBoundingClientRect();
    const { left, top } = this.points[selectedSectionIndex].getBoundingClientRect();

    onTransform && onTransform({ x: fakeLeft - left + x, y: fakeTop - top + y });
  };

  savePointsRef = ref => {
    const { pointsAmount } = this.props;

    if (ref && this.points.length !== pointsAmount) {
      this.points.push(ref);
    }
  };

  onFakePointRef = ref => {
    if (ref) {
      this.fakePoint = ref;
    }
  };

  render() {
    const { selectedSectionIndex, pointsAmount, x, y } = this.props;

    return (
      <ConstellationPointsContainer>
        <FakePoint ref={this.onFakePointRef} />
        <TransformContainer style={{ transform: `translate(${x}px, ${y}px)` }}>
          {Array.from({ length: pointsAmount }, (_, index) => (
            <Point
              ref={this.savePointsRef}
              key={`point-${index}`}
              isActive={index === selectedSectionIndex}
            />
          ))}
        </TransformContainer>
      </ConstellationPointsContainer>
    );
  }
}
