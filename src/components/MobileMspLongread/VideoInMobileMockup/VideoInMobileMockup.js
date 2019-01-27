import React, { Component } from "react";
import PropTypes from "prop-types";

import mockUp from "../../../img/portfolio/mobileMsp/mockUp-test.png";
import { InViewVideo } from "../../../components/Video/InViewVideo";
import { Container, MockUp } from "./styles";

export class VideoInMobileMockup extends Component {
  static propTypes = {
    ratio: PropTypes.string,
  };

  render() {
    const { ratio, ...props } = this.props;

    return (
      <Container>
        <InViewVideo {...props} />
        <MockUp src={mockUp} alt="mockUp" />
      </Container>
    );
  }
}
