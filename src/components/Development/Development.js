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

  scrollbar = null;

  state = {
    sectionWidth: 330,
    padding: 30,
  };

  componentDidMount() {
    this.onResize();
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewportWidth <= 576) {
      this.setState({
        sectionWidth: 260,
      });
    }
  };

  onMouseMove = e => {
    const { items } = this.props;
    const { sectionWidth, padding } = this.state;

    const containerWidth = items.length * sectionWidth + padding;
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const ratio = (containerWidth - viewportWidth) / viewportWidth;

    this.scrollbar.scrollTo(e.clientX * ratio, 0, 0);
  };

  onScrollbarRef = ref => {
    if (ref) {
      this.scrollbar = ref.scrollbar;
    }
  };

  render() {
    const { sectionWidth, padding } = this.state;
    const { items } = this.props;
    console.info("--> dev ggwp up");
    return (
      <Scrollbar onScrollbarRef={this.onScrollbarRef}>
        <DevelopmentContainer style={{ width: items.length * sectionWidth + padding }}>
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
                        ? "rgba(53,61,70, 0.15)"
                        : "rgba(144,197,61, 0.25)",
                      color: development ? "#353d46" : "#90c53d",
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
