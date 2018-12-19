import React, { PureComponent } from "react";

import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { getRouteByLocation } from "../../routes";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import styles from "../../styles/portfolio";
import { PortfolioSlide } from "../../components/PortfolioSlide/PortfolioSlide";

class Portfolio extends PureComponent {
  render() {
    const { location } = this.props;
    const currentRoute = getRouteByLocation(location);

    return (
      <MainLayoutConsumer>
        {({ selectedSectionIndex, sections, onSectionChange }) => {
          const section = sections[selectedSectionIndex];

          return (
            <MainAnimation
              {...this.props}
              leftSide={
                <AdditionalMenu
                  selectedId={section && section.id}
                  onSectionChange={onSectionChange}
                  leftSide
                  additionalMenu={currentRoute.additionalMenu}
                  isOpen={true}
                />
              }
              containerClassName={styles.portfolioContainer}
              rightSide={<PortfolioSlide onSectionChange={onSectionChange} {...section} />}
            />
          );
        }}
      </MainLayoutConsumer>
    );
  }
}

export default Portfolio;
