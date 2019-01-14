import React, { PureComponent } from "react";
import Responsive from "react-responsive";

import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { getRouteByLocation, sectionsFromAdditionalMenu } from "../../routes";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import { PortfolioSlide } from "../../components/PortfolioSlide/PortfolioSlide";
import styles from "../../styles/portfolio";
import { MobileTitle } from "../../components/PortfolioSlide/styles";

class Portfolio extends PureComponent {
  render() {
    const { location, navigate } = this.props;
    const currentRoute = getRouteByLocation(location);
    const sections = sectionsFromAdditionalMenu(currentRoute.additionalMenu);

    return (
      <MainLayoutConsumer>
        {({ selectedSectionIndex, onSectionChange, sectionDirection }) => {
          const section = sections[selectedSectionIndex];

          return (
            <MainAnimation
              {...this.props}
              willChangeLeftSideClassName={styles.portfolioLeftSide}
              leftSide={
                <>
                  <Responsive maxWidth={767}>
                    <MobileTitle>{section && section.parentTitle}</MobileTitle>
                  </Responsive>
                  <Responsive minWidth={577}>
                    <AdditionalMenu
                      selectedId={section && section.id}
                      onSectionChange={onSectionChange}
                      leftSide
                      additionalMenu={currentRoute.additionalMenu}
                      isOpen={true}
                    />
                  </Responsive>
                </>
              }
              containerClassName={styles.portfolioContainer}
              rightSide={
                <PortfolioSlide
                  sectionDirection={sectionDirection}
                  sections={sections}
                  selectedSectionIndex={selectedSectionIndex}
                  onSectionChange={onSectionChange}
                  navigate={navigate}
                  {...section}
                />
              }
            />
          );
        }}
      </MainLayoutConsumer>
    );
  }
}

export default Portfolio;
