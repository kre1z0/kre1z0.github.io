import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  Background,
  Title,
  Description,
  Screenshot,
  Content,
  ControlBlock,
  PrevBtn,
  NextBtn,
} from "./styles";

export const PortfolioSlide = ({ bgColor, text, description, screenshot }) => {
  return (
    <Container>
      <Background style={{ backgroundColor: bgColor }} />
      <Screenshot src={screenshot} alt={text} />
      <Content>
        <Title>{text}</Title>
        <Description>{description}</Description>
      </Content>
      <ControlBlock>
        <PrevBtn onClick={e => e.stopPropagation()} />
        <NextBtn onClick={e => e.stopPropagation()} />
      </ControlBlock>
    </Container>
  );
};

PortfolioSlide.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
  screenshot: PropTypes.string,
  id: PropTypes.string,
};
