import React, { PureComponent } from "react";

import { BackendComponent } from "../../components/Backend/Backend";
import { Bullets } from "../../components/Bullets/Bullets";
import { News } from "../../components/Cards/News";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H2, Link } from "../../components/Atoms/Atoms";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { ConstellationPoints } from "../../components/ConstellationPoints/ConstellationPoints";
import styles, { NewsContainer } from "../../styles/about";

export class About extends PureComponent {
  state = {
    x: 0,
    y: 0,
  };

  onTransform = coordinates => this.setState(coordinates);

  render() {
    const { x, y } = this.state;

    return (
      <MainLayoutConsumer>
        {({ selectedSectionIndex, sections, onSectionChange, sectionDirection, isSwipeEvent }) => {
          const section = sections[selectedSectionIndex];

          return (
            <MainAnimation
              {...this.props}
              x={x}
              y={y}
              backgroundClassName={styles.isAboutSlide}
              leftSide={
                <>
                  <H2 as="h1">СМИ о нас</H2>
                  <Link>Все комментарии</Link>
                </>
              }
              containerClassName={styles.aboutContainer}
              rightSide={
                <NewsContainer>
                  <ConstellationPoints
                    x={x}
                    y={y}
                    onTransform={this.onTransform}
                    selectedSectionIndex={selectedSectionIndex}
                  />
                  <BackendComponent
                    sections={sections}
                    selectedSectionIndex={selectedSectionIndex}
                  />
                  <News
                    isSwipeEvent={isSwipeEvent}
                    onSectionChange={onSectionChange}
                    direction={sectionDirection}
                    {...section}
                  />
                  <Bullets
                    className={styles.newBullets}
                    sections={sections}
                    selectedSectionIndex={selectedSectionIndex}
                  />
                </NewsContainer>
              }
            />
          );
        }}
      </MainLayoutConsumer>
    );
  }
}

export default About;
