import React from "react";

import { BackendComponent } from "../../components/Backend/Backend";
import { Bullets } from "../../components/Bullets/Bullets";
import { News } from "../../components/Cards/News";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H2, Link } from "../../components/Atoms/Atoms";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import styles, { NewsContainer } from "../../styles/about";

export const About = props => {
  return (
    <MainLayoutConsumer>
      {({ selectedSectionIndex, sections, onSectionChange, sectionDirection }) => {
        const section = sections[selectedSectionIndex];

        return (
          <MainAnimation
            withSvg
            {...props}
            leftSide={
              <>
                <H2 as="h1">СМИ о нас</H2>
                <Link>Все комментарии</Link>
              </>
            }
            containerClassName={styles.aboutContainer}
            rightSide={
              <NewsContainer>
                <BackendComponent sections={sections} selectedSectionIndex={selectedSectionIndex} />
                <News onSectionChange={onSectionChange} {...section} direction={sectionDirection} />
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
};

export default About;
