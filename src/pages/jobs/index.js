import React, { PureComponent } from "react";

import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import { Scrollable } from "../../components/Scrollable/Scrollable";
import { getRouteByLocation } from "../../routes";
import styles from "../../styles/jobs";

export class Jobs extends PureComponent {
  render() {
    const { location } = this.props;
    const currentRoute = getRouteByLocation(location);

    return (
      <MainLayoutConsumer>
        {({ selectedSectionIndex, sections, onSectionChange }) => {
          const section = sections[selectedSectionIndex];
          const selectedId = section && section.id;

          return (
            <MainAnimation
              {...this.props}
              containerClassName={styles.jobsContainer}
              leftSide={
                <AdditionalMenu
                  selectedId={section && section.id}
                  onSectionChange={onSectionChange}
                  leftSide
                  additionalMenu={currentRoute.additionalMenu}
                  isOpen={true}
                />
              }
              rightSide={
                <CenterBlock>
                  <Scrollable
                    selectedId={selectedId}
                    onSectionChange={onSectionChange}
                  />
                </CenterBlock>
              }
            />
          );
        }}
      </MainLayoutConsumer>
    );
  }
}

export default Jobs;
