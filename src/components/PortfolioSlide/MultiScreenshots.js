import React, { PureComponent } from "react";
import styled from "astroturf";

const MultiScreenshotsContainer = styled("div")`
  will-change: opacity, transform;
  top: 6.4%;
  left: -22%;
  position: absolute;
  width: 100%;
  height: 100%;
  > img {
    height: auto;
    position: absolute;
    &:nth-child(1) {
      width: 50%;
      z-index: 3;
    }
    &:nth-child(2) {
      z-index: 2;
      width: 40%;
      top: 6%;
      left: 0;
    }
    &:nth-child(3) {
      z-index: 1;
      width: 38%;
      top: 7%;
      left: 0;
    }
  }
  &.transitionEnd {
    > img {
      transition: left 140ms cubic-bezier(0.2, 1, 0.6, 1) 0s;
      &:nth-child(2) {
        left: 38%;
      }
      &:nth-child(3) {
        left: 64.4%;
      }
    }
  }
  @media all and (max-height: 777px), (max-width: 1144px) {
    top: -8%;
  }
  @media (max-height: 600px), (max-width: 768px) {
    top: 8%;
  }
  @media screen and (max-width: 576px) and (min-width: 321px) {
    left: auto;
    top: 0;
    right: 40vw;
    margin: auto 0;
    width: 52vw;
    > img {
      &:nth-child(2) {
        top: 10%;
      }
      &:nth-child(3) {
        top: 13%;
      }
    }
  }
  @media (max-width: 414px) {
    top: auto;
    left: 6.4vw;
    right: auto;
    bottom: 6.9rem;
    margin: 0;
    width: 75vw;
    > img {
      &:nth-child(1) {
        top: auto;
        bottom: 0;
      }
      &:nth-child(2) {
        top: auto;
        bottom: 1rem;
      }
      &:nth-child(3) {
        top: auto;
        bottom: 1.55rem;
      }
    }
  }
`;

export class MultiScreenshots extends PureComponent {
  state = {
    transitionEnd: false,
  };

  render() {
    const { transitionEnd } = this.state;
    const { screenshot } = this.props;

    return (
      <MultiScreenshotsContainer
        {...this.props}
        transitionEnd={transitionEnd}
        onTransitionEnd={() => this.setState({ transitionEnd: true })}
      >
        {screenshot.map((img, index) => (
          <img key={`img-${index}`} src={img} alt={`img-${index}`} />
        ))}
      </MultiScreenshotsContainer>
    );
  }
}
