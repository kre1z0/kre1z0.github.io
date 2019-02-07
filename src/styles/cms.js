import React, { Component } from "react";
import styled from "astroturf";

const Viewport = styled("div")`
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
  z-index: 4;
`;

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 4.4rem;
  position: relative;
`;

export class PreviewContainer extends Component {
  state = {
    width: 0,
    height: 0,
  };

  componentDidMount() {
    this.updateSize();
    this.interval = setInterval(() => this.updateSize(), 444);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateSize = () => {
    const { width, height } = this.state;
    if (this.container) {
      const { width: w, height: h } = this.container.getBoundingClientRect();
      if (width !== w || height !== h) {
        this.setState({ width: Math.round(w), height: Math.round(h) });
      }
    }
  };

  onRef = ref => {
    if (ref) {
      this.container = ref;
    }
  };

  render() {
    const { width, height } = this.state;
    const { children, ...props } = this.props;

    return (
      <>
        <Viewport>
          {width}x{height}
        </Viewport>
        <Container ref={this.onRef} {...props}>
          {children}
        </Container>
      </>
    );
  }
}
