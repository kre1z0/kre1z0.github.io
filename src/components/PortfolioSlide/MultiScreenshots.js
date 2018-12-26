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
      transition: left 500ms cubic-bezier(0.2, 1, 0.6, 1) 0s;
      &:nth-child(2) {
        left: 38%;
      }
      &:nth-child(3) {
        left: 64.4%;
      }
      @media all and (max-height: 777px), (max-width: 1144px) {
        &:nth-child(2) {
          left: 33%;
        }
        &:nth-child(3) {
          left: 55%;
        }
      }
    }
  }
  @media all and (max-height: 777px), (max-width: 1144px) {
    top: 4%;
    left: -14%;
    > img {
      &:nth-child(1) {
        width: 42%;
      }
      &:nth-child(2) {
        width: 34%;
        top: 7%;
      }
      &:nth-child(3) {
        width: 30%;
        top: 10%;
      }
    }
  }
  @media (max-height: 600px), (max-width: 768px) {
    top: 8%;
  }
  @media screen and (min-width: 320px) and (max-width: 840px) and (orientation: landscape) {
    left: auto;
    right: -10vw;
    top: 5%;
    margin: auto 0;
    width: 50vw;
    > img {
      &:nth-child(2) {
        top: 10%;
      }
      &:nth-child(3) {
        top: 13%;
      }
    }
  }
  @media (max-width: 480px) {
    top: auto;
    left: 1.4vw;
    right: auto;
    bottom: 8rem;
    margin: 0;
    width: 100vw;
    > img {
      &:nth-child(1) {
        top: auto;
        bottom: 0;
      }
      &:nth-child(2) {
        top: auto;
        bottom: 1.2rem;
      }
      &:nth-child(3) {
        top: auto;
        bottom: 1.75rem;
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
