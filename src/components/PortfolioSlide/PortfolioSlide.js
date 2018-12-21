import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import {
  Container,
  Background,
  ControlBlock,
  PrevBtn,
  NextBtn,
  BulletsContainer,
  Bullet,
} from "./styles";
import { Content } from "./Content";
import { Screenshot } from "./Screenshot";

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
    sectionDirection: PropTypes.number,
  };

  state = {
    hovered: false,
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
      <Container
        onMouseOver={() => this.setState({ hovered: true })}
        onMouseOut={() => this.setState({ hovered: false })}
        style={{ color: textColor || "#fff" }}
      >
        <Background hovered={hovered} style={{ backgroundColor: bgColor }} />
        <Screenshot direction={sectionDirection} id={id} text={text} screenshot={screenshot} />
        <Content
          direction={sectionDirection}
          id={id}
          title={title}
          text={text}
          description={description}
        />
        <ControlBlock onMouseOver={e => e.stopPropagation()} onMouseOut={e => e.stopPropagation()}>
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
        <BulletsContainer />
        <BulletsContainer>
          {sections.map(({ id }, index) => (
            <Bullet key={`${id}-bullet`} isActive={index === selectedSectionIndex} />
          ))}
        </BulletsContainer>
      </Container>
    );
  }
}
