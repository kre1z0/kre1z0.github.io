import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import throttle from "lodash/throttle";

import { HorizontalRule } from "../../components/Atoms/Atoms";
import { CompanyPhotoContainer, CompanyPhotoBlock, CompanyHeader } from "./styles";

const getNeedElements = () => {
  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (viewportWidth <= 440) {
    return 6;
  } else if (viewportWidth <= 768) {
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

  constructor(props) {
    super(props);
    this.onResize = throttle(this.onResize, 100);
  }

  state = {
    needElements: null,
    visibleItems: [],
    hiddenItems: [],
  };

  getRandomElements = (sourceArray, neededElements) => {
    const copyArray = sourceArray.slice();
    const shuffled = copyArray.sort(() => 0.5 - Math.random());

    return {
      visibleItems: shuffled.slice(0, neededElements),
      hiddenItems: shuffled.slice(neededElements),
    };
  };

  componentDidMount() {
    const { needElements } = this.state;
    const { photo } = this.props;
    window.addEventListener("resize", this.onResize);

    this.setState({ ...this.getRandomElements(photo, needElements) });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    const { photo } = this.props;
    const nextNeedElements = getNeedElements();

    this.setState({ items: this.getRandomElements(photo, nextNeedElements) });
  };

  render() {
    const { visibleItems } = this.state;
    const { title } = this.props;

    return (
      <CompanyPhotoContainer>
        {title && (
          <CompanyHeader>
            <HorizontalRule />
            <h1>{title}</h1>
          </CompanyHeader>
        )}
        {visibleItems.map((url, index) => (
          <CompanyPhotoBlock key={`photo-${index}`} style={{ backgroundImage: `url(${url})` }} />
        ))}
      </CompanyPhotoContainer>
    );
  }
}
