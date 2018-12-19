import React, { PureComponent } from "react";

import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import { getRouteByLocation } from "../../routes";
import styles from "../../styles/jobs";

const LoremIpsum = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos est illo in
    ipsum magnam maxime, molestiae officiis optio, quae quaerat, ratione repellendus sit suscipit
    tempore totam ullam voluptates! Possimus?
  </p>
);

export class Jobs extends PureComponent {
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
              rightSideClassName={styles.rightSide}
              rightSide={
                <CenterBlock>
                  <h1>start</h1>
                  {Array.from({ length: 24 }, (_, index) => (
                    <LoremIpsum key={index} />
                  ))}
                  <h1>end</h1>
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
