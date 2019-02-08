import React, { PureComponent } from "react";
// import { graphql } from "gatsby";
import cn from "classnames";

import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import { BackendComponent } from "../../components/Backend/Backend";
import { Bullets } from "../../components/Bullets/Bullets";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H2 } from "../../components/Atoms/Atoms";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { ConstellationPoints } from "../../components/ConstellationPoints/ConstellationPoints";
import { fade, slideUp, transition } from "../../components/Transition/animation";
import styles, { NewsContainer, WillChangeNews } from "../../styles/about";
import { getRouteByLocation } from "../../routes";

export class About extends PureComponent {
  state = {
    x: 0,
    y: 0,
  };

  onTransform = coordinates => this.setState(coordinates);

  render() {
    const { location } = this.props;
    const { news, text } = getRouteByLocation(location);

    const { status, disableTransition } = this.props;
    const { x, y } = this.state;

    return (
      <MainLayoutConsumer>
        {({
          selectedSectionIndex,
          onSectionChange,
          sectionDirection,
          isSwipeEvent,
          transitionEnd,
        }) => {
          const section = news[selectedSectionIndex];

          return (
            <MainAnimation
              {...this.props}
              disableTransition={disableTransition}
              withRightSideAnimation={false}
              x={x}
              y={y}
              backgroundClassName={styles.isAboutSlide}
              leftSide={
                <>
                  <H2 as="h1">{text}</H2>
                  <GoNextLink to="/news" gatsby>
                    Все комментарии
                  </GoNextLink>
                </>
              }
              containerClassName={styles.aboutContainer}
              rightSide={
                <NewsContainer>
                  <ConstellationPoints
                    disableTransition={disableTransition}
                    transitionEnd={transitionEnd}
                    status={status}
                    x={x}
                    y={y}
                    onTransform={this.onTransform}
                    selectedSectionIndex={selectedSectionIndex}
                  />
                  <WillChangeNews
                    disableTransition={disableTransition}
                    className={cn(slideUp[status], fade[status], transition[status])}
                  >
                    <BackendComponent sections={news} selectedSectionIndex={selectedSectionIndex} />
                    <NewsCard
                      disableTransition={disableTransition}
                      isSwipeEvent={isSwipeEvent}
                      onSectionChange={onSectionChange}
                      direction={sectionDirection}
                      {...section}
                    />
                    <Bullets
                      sections={news}
                      selectedSectionIndex={selectedSectionIndex}
                      goPrev={() => onSectionChange({ value: -1, isSwipeEvent: true })}
                      goNext={() => onSectionChange({ value: 1, isSwipeEvent: true })}
                    />
                  </WillChangeNews>
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

// export const aboutPageQuery = graphql`
//   query AboutPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         date
//         link
//         title
//         logo
//         isVisible
//         description
//       }
//     }
//   }
// `;
