import React, { Component } from "react";
import PropTypes from "prop-types";

import animation from "../../components/Transition/animation";
import { ScrollDownButton } from "../../components/Buttons/ScrollDownButton";
import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import { getLongreadNavbarHeight } from "../../components/LongreadNavbar/LongreadNavbar";
import { ScrollbarConsumer } from "../ScrollbarProvider/ScrollbarProvider";
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

export class HeaderBase extends Component {
  static propTypes = {
    bgColor: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    rightSide: PropTypes.element,
    scrollbar: PropTypes.object,
  };

  shouldComponentUpdate({ scrollbar: nextScrollbar }, nextState) {
    const { scrollbar } = this.props;

    return scrollbar !== nextScrollbar;
  }

  onScrollDown = () => {
    const { scrollbar } = this.props;

    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    scrollbar.scrollTo(0, viewportHeight - getLongreadNavbarHeight(), 400);
  };

  render() {
    const { bgColor, type, text, description, link, rightSide } = this.props;

    return (
      <HeaderContainer style={{ backgroundColor: bgColor }}>
        <HeaderBlock>
          <LeftSide className={animation.fadeIn}>
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
          <ScrollDownButton className={styles.scrollDownButton} onClick={this.onScrollDown} />
        </HeaderBlock>
      </HeaderContainer>
    );
  }
}

export const Header = props => (
  <ScrollbarConsumer>
    {({ scrollbar }) => <HeaderBase scrollbar={scrollbar} {...props} />}
  </ScrollbarConsumer>
);
