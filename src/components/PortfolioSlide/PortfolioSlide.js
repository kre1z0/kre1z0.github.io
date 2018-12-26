import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Swiper } from "../../components/Swiper/Swiper";
import Responsive from "react-responsive";

import {
  PortfolioSlideContainer,
  SliderBackground,
  ControlBlock,
  PrevBtn,
  NextBtn,
} from "./styles";
import { Content } from "./Content";
import { Screenshot } from "./Screenshot";
import { BackendComponent } from "../Backend/Backend";
import { Bullets } from "../Bullets/Bullets";

export class PortfolioSlide extends PureComponent {
  static propTypes = {
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    text: PropTypes.string,
    description: PropTypes.string,
    screenshot: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    id: PropTypes.string,
    onSectionChange: PropTypes.func,
    selectedSectionIndex: PropTypes.number,
    sections: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    parentTitle: PropTypes.string,
    sectionDirection: PropTypes.number,
  };

  state = {
    hovered: false,
  };

  onSwiped = ({ isLeft, isRight, xRatio }) => {
    const { onSectionChange } = this.props;

    if (isLeft && xRatio > 25) {
      onSectionChange({ value: 1 });
    } else if (isRight && xRatio > 25) {
      onSectionChange({ value: -1 });
    }
  };

  render() {
    const { hovered } = this.state;
    const {
      bgColor,
      text,
      description,
      textColor,
      onSectionChange,
      selectedSectionIndex,
      sections,
      id,
      title,
      screenshot,
      sectionDirection,
    } = this.props;

    return (
      <Swiper onSwiped={this.onSwiped}>
        <PortfolioSlideContainer
          onMouseOver={() => this.setState({ hovered: true })}
          onMouseOut={() => this.setState({ hovered: false })}
          style={{ color: textColor || "#fff" }}
        >
          <BackendComponent sections={sections} selectedSectionIndex={selectedSectionIndex} />
          <SliderBackground hovered={hovered} style={{ backgroundColor: bgColor }} />
          <Screenshot direction={sectionDirection} id={id} text={text} screenshot={screenshot} />
          <Content
            textColor={textColor}
            direction={sectionDirection}
            id={id}
            title={title}
            text={text}
            description={description}
          />
          <Responsive minWidth={769}>
            <ControlBlock
              onMouseOver={e => e.stopPropagation()}
              onMouseOut={e => e.stopPropagation()}
            >
              <PrevBtn
                disabled={selectedSectionIndex === 0}
                onClick={e => {
                  e.stopPropagation();
                  onSectionChange({ value: -1 });
                }}
              />
              <NextBtn
                disabled={sections.length === selectedSectionIndex + 1}
                onClick={e => {
                  e.stopPropagation();
                  onSectionChange({ value: 1 });
                }}
              />
            </ControlBlock>
          </Responsive>
          <Bullets sections={sections} selectedSectionIndex={selectedSectionIndex} />
        </PortfolioSlideContainer>
      </Swiper>
    );
  }
}
