import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import { getBackRouteByLocationPathName } from "../../routes";
import animation from "../../components/Transition/animation";
import { ScrollDownButton } from "../../components/Buttons/ScrollDownButton";
import { getLongreadNavbarHeight } from "../../components/LongreadNavbar/LongreadNavbar";
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
    title: PropTypes.string,
    text: PropTypes.string,
    rightSide: PropTypes.element,
    scrollbar: PropTypes.object,
    leftSideClassName: PropTypes.string,
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
    const {
      children,
      bgColor,
      type,
      text,
      title,
      description,
      link,
      rightSide,
      leftSideClassName,
      rightSideClassName,
      containerClassName,
      lightNavy,
      leftSide,
    } = this.props;

    return (
      <HeaderContainer className={containerClassName} style={{ backgroundColor: bgColor }}>
        <HeaderBlock>
          <LeftSide className={cn(animation.fadeIn, leftSideClassName)}>
            {type && <Badge>{type}</Badge>}
            <Title>{title || text}</Title>
            <Description>{description}</Description>
            {link && (
              <OutsideLink className={styles.projectLink} href={link}>
                {link}
              </OutsideLink>
            )}
            {leftSide}
          </LeftSide>
          <RightSide className={rightSideClassName}>{rightSide}</RightSide>
          <ScrollDownButton
            className={cn(styles.scrollDownButton, { [styles.lightNavy]: lightNavy })}
            onClick={this.onScrollDown}
          />
        </HeaderBlock>
        {children}
      </HeaderContainer>
    );
  }
}

export const Header = props => (
  <ScrollbarConsumer>
    {({ scrollbar }) => <HeaderBase scrollbar={scrollbar} {...props} />}
  </ScrollbarConsumer>
);
