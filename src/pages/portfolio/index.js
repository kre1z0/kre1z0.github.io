import React, { PureComponent } from "react";

import styles from "../../styles/portfolio";
import { LeftSideMenu } from "../../components/LeftSideMenu/LeftSideMenu";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { getRouteByLocation } from "../../routes";
import { PortfolioSlide } from "../../components/PortfolioSlide/PortfolioSlide";

class Portfolio extends PureComponent {
  state = {
    selectedId: "msp",
  };

  render() {
    const { selectedId } = this.state;
    const { location } = this.props;
    const currentRoute = getRouteByLocation(location);

    return (
      <MainAnimation
        {...this.props}
        leftSide={<LeftSideMenu selectedId={selectedId} location={location} />}
        containerClassName={styles.portfolioContainer}
        rightSide={
          <>
            {currentRoute &&
              currentRoute.additionalMenu
                .find(({ id }) => id === "solutions")
                .children[0].secondLevel.map(
                  item => item.id === selectedId && <PortfolioSlide {...item} key={item.id} />,
                )}
          </>
        }
      />
    );
  }
}

export default Portfolio;
