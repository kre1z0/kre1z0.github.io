import React, { PureComponent } from "react";

import withProvider from "../../hoc/withProvider";
import { LeftSideMenu } from "../../components/LeftSideMenu/LeftSideMenu";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";

class Portfolio extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <MainAnimation
        {...this.props}
        leftSide={<LeftSideMenu location={location} />}
        rightSide={
          <div>
            <h1>rightSide</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos est
              illo in ipsum magnam maxime, molestiae officiis optio, quae quaerat, ratione
              repellendus sit suscipit tempore totam ullam voluptates! Possimus?
            </p>
          </div>
        }
      />
    );
  }
}

export default withProvider(Portfolio);
