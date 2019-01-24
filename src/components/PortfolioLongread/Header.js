import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { getBackRouteByLocationPathName } from "../../routes";
import animation from "../../components/Transition/animation";
import { ScrollDownButton } from "../../components/Buttons/ScrollDownButton";
import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import {
  getLongreadNavbarHeight,
  LongreadNavbar,
} from "../../components/LongreadNavbar/LongreadNavbar";
import { ScrollbarConsumer } from "../ScrollbarProvider/ScrollbarProvider";
import styles, {
  HeaderContainer,
  HeaderBlock,
  LeftSide,
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
    leftSideClassName: PropTypes.string,
    scrollTop: PropTypes.number,
    containerClassName: PropTypes.string,
    lightNavy: PropTypes.bool,
    leftSide: PropTypes.element,
    projectId: PropTypes.string,
  };

  componentDidMount() {
    const { location, projectId } = this.props;
    const replacedSlash = getBackRouteByLocationPathName(location.pathname).replace(/\//g, "");
    localStorage.setItem(replacedSlash, projectId);
  }

  onScrollDown = () => {
    const { scrollbar } = this.props;

    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    scrollbar.scrollTo(0, viewportHeight - getLongreadNavbarHeight(), 400);
  };

  render() {
    const {
      bgColor,
      type,
      text,
      description,
      link,
      rightSide,
      leftSideClassName,
      location,
      scrollTop,
      containerClassName,
      lightNavy,
      leftSide,
    } = this.props;

    return (
      <HeaderContainer className={containerClassName} style={{ backgroundColor: bgColor }}>
        <LongreadNavbar
          className={cn({ [styles.lightNavy]: lightNavy })}
          pathname={location.pathname}
          scrollTop={scrollTop}
        />
        <HeaderBlock>
          <LeftSide className={cn(animation.fadeIn, leftSideClassName)}>
            {type && <Badge>{type}</Badge>}
            <Title>{text}</Title>
            <Description>{description}</Description>
            <OutsideLink href={link} className={styles.projectLink}>
              {link}
            </OutsideLink>
            {leftSide}
          </LeftSide>
          <RightSide>{rightSide}</RightSide>
          <ScrollDownButton
            className={cn(styles.scrollDownButton, { [styles.lightNavy]: lightNavy })}
            onClick={this.onScrollDown}
          />
        </HeaderBlock>
      </HeaderContainer>
    );
  }
}

export const Header = props => (
  <ScrollbarConsumer>
    {({ scrollbar, scrollTop }) => (
      <HeaderBase scrollbar={scrollbar} scrollTop={scrollTop} {...props} />
    )}
  </ScrollbarConsumer>
);
