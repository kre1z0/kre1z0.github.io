import React, { Component } from "react";
import Helmet from "react-helmet";

import { CloseButton } from "../components/Buttons/CloseButton";
import favicon from "../img/favicon.png";
import { LongreadContainer, LongreadHeader } from "../styles/longread";

class LongredLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <LongreadContainer>
        <Helmet
          title="Everpoint"
          link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
        />
        <LongreadHeader>
          <CloseButton />
        </LongreadHeader>
        {children}
      </LongreadContainer>
    );
  }
}

export default LongredLayout;
