import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import animation from "../../components/Transition/animation";
import { ScrollDownButton } from "../../components/Buttons/ScrollDownButton";
import { OutsideLink } from "../../components/OutsideLink/OutsideLink";

import styles, {
  HeaderContainer,
  HeaderBlock,
  LeftSide,
  LeftSideContent,
  RightSide,
  Badge,
  Title,
  Description,
} from "./styles";

export class Header extends Component {
  static propTypes = {
    bgColor: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    rightSide: PropTypes.element,
  };

  render() {
    const { bgColor, type, text, description, link, rightSide } = this.props;

    return (
      <HeaderContainer style={{ backgroundColor: bgColor }}>
        <HeaderBlock>
          <LeftSide className={cn(animation.fadeIn, styles.leftSide)}>
            <LeftSideContent>
              <Badge>{type}</Badge>
              <Title>{text}</Title>
              <Description>{description}</Description>
              <OutsideLink href={link} className={styles.projectLink}>
                {link}
              </OutsideLink>
            </LeftSideContent>
          </LeftSide>
          <RightSide>{rightSide}</RightSide>
          <ScrollDownButton className={styles.scrollDownButton} />
        </HeaderBlock>
      </HeaderContainer>
    );
  }
}
