import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { BigH1 } from "../../components/Atoms/Atoms";
import { HorizontalRule } from "../../components/Atoms/Atoms";
import { getRandomElements } from "../../utils/array";
import { CompanyPhotoContainer, CompanyPhotoBlock, CompanyHeader } from "./styles";

const getNeedElements = () => {
  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (viewportWidth <= 440) {
    return 6;
  } else if (viewportWidth <= 1000) {
    return 12;
  } else {
    return 15;
  }
};

export class CompanyPhoto extends PureComponent {
  static propTypes = {
    needElements: PropTypes.number,
    title: PropTypes.string,
    photo: PropTypes.arrayOf(PropTypes.string),
  };

  static getDerivedStateFromProps(nextProps, { needElements }) {
    if (!needElements) {
      return {
        needElements: getNeedElements(),
      };
    }

    return null;
  }

  state = {
    needElements: null,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    const { needElements } = this.state;
    const nextNeedElements = getNeedElements();

    if (needElements !== nextNeedElements) {
      this.setState({ needElements: nextNeedElements });
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
