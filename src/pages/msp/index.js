import React, { Component } from "react";

import { MspRightSide } from "../../components/MspRightSide/MspRightSide";
import { Header } from "../../components/PortfolioLongread/Header";
import { getProject } from "../../routes";

// import styles from "../../styles/msp";

class Msp extends Component {
  render() {
    const msp = getProject({ projectId: "msp" });

    return (
      <div>
        <Header {...msp} rightSide={<MspRightSide />} />
      </div>
    );
  }
}

export default Msp;
