import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { getScreenshot } from "./getScreenshot";
import {
  Container,
  Background,
  Title,
  Description,
  Content,
  ControlBlock,
  PrevBtn,
  NextBtn,
} from "./styles";

export class PortfolioSlide extends PureComponent {
  static propTypes = {
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    text: PropTypes.string,
    description: PropTypes.string,
    screenshot: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    id: PropTypes.string,
    onSectionChange: PropTypes.func,
  };

  render() {
    const { bgColor, text, description, textColor, onSectionChange } = this.props;

    return (
      <Container style={{ color: textColor || "#fff" }}>
        <Background style={{ backgroundColor: bgColor }} />
        {getScreenshot(this.props)}
        <Content>
          <Title>{text}</Title>
          <Description>
            {description ||
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eligendi iusto labore nisi quas recusandae reiciendis reprehenderit. Ab consectetur enim excepturi facere modi neque, repudiandae rerum soluta. Beatae, consequuntur."}
          </Description>
        </Content>
        <ControlBlock>
          <PrevBtn
            onClick={e => {
              e.stopPropagation();
              onSectionChange({ value: -1 });
            }}
          />
          <NextBtn
            onClick={e => {
              e.stopPropagation();
              onSectionChange({ value: 1 });
            }}
          />
        </ControlBlock>
      </Container>
    );
  }
}
