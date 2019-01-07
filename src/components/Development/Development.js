import React, { Component } from "react";
import PropTypes from "prop-types";

import { Scrollbar } from "../../components/Scrollbar/Scrollbar";
import {
  DevelopmentContainer,
  DevelopmentItem,
  DevelopmentHeader,
  DevelopmentTitle,
  HorizontalRule,
  DevelopmentDescription,
} from "./styles";

export class Development extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    items: [],
  };

  state = {
    marginLeft: 0,
    sectionWidth: 330,
    padding: 30,
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.onMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove = e => {
    const { items } = this.props;
    const { sectionWidth, padding } = this.state;

    const containerWidth = items.length * sectionWidth + padding;
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const ratio = (containerWidth - viewportWidth) / viewportWidth;
    this.setState({ marginLeft: -e.clientX * ratio });
  };

  render() {
    const { marginLeft, sectionWidth, padding } = this.state;
    const { items } = this.props;

    return (
      <Scrollbar>
        <DevelopmentContainer style={{ marginLeft, width: items.length * sectionWidth + padding }}>
          {items.map(({ title, description, development }, index) => {
            const firstChild = index === 0;
            const additional = firstChild ? padding : 0;

            return (
              <DevelopmentItem
                key={`${title}-${index}`}
                style={{
                  width: sectionWidth + additional,
                  paddingRight: padding,
                  paddingLeft: additional,
                }}
              >
                <DevelopmentHeader>
                  <DevelopmentTitle
                    style={{
                      backgroundColor: development
                        ? "rgba(144,197,61, 0.25)"
                        : "rgba(53,61,70, 0.15)",
                      color: development ? "#90c53d" : "#353d46",
                    }}
                  >
                    {title}
                  </DevelopmentTitle>
                  <HorizontalRule />
                </DevelopmentHeader>
                <DevelopmentDescription>{description}</DevelopmentDescription>
              </DevelopmentItem>
            );
          })}
        </DevelopmentContainer>
      </Scrollbar>
    );
  }
}
