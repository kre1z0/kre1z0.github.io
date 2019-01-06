import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { BigH1 } from "../../components/Atoms/Atoms";
import { HorizontalRule } from "../../components/Atoms/Atoms";
import { getRandomElements } from "../../utils/array";
import { CompanyPhotoContainer, CompanyPhotoBlock, CompanyHeader } from "./styles";

export class CompanyPhoto extends PureComponent {
  static propTypes = {
    needElements: PropTypes.number,
    title: PropTypes.string,
    photo: PropTypes.arrayOf(PropTypes.string),
  };

  state = {
    needElements: 15,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewportWidth <= 440) {
      this.setState({ needElements: 6 });
    } else if (viewportWidth <= 1000) {
      this.setState({ needElements: 12 });
    } else {
      this.setState({ needElements: 15 });
    }
  };

  render() {
    const { needElements } = this.state;
    const { photo, title } = this.props;

    return (
      <CompanyPhotoContainer>
        {title && (
          <CompanyHeader>
            <HorizontalRule />
            <BigH1>{title}</BigH1>
          </CompanyHeader>
        )}
        {getRandomElements(photo, needElements).map((url, index) => (
          <CompanyPhotoBlock key={`photo-${index}`} style={{ backgroundImage: `url(${url})` }} />
        ))}
      </CompanyPhotoContainer>
    );
  }
}
