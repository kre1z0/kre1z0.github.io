import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import throttle from "lodash/throttle";
import random from "lodash/random";

import { HorizontalRule } from "../../components/Atoms/Atoms";
import { CompanyPhotoTransition } from "./CompanyPhotoTransition";
import { CompanyPhotoContainer, CompanyHeader } from "./styles";

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
    items: PropTypes.arrayOf(PropTypes.object),
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
    item: null,
  };

  componentDidMount() {
    const { needElements } = this.state;
    const { items } = this.props;
    window.addEventListener("resize", this.onResize);

    this.setState({ ...this.getRandomElements(items, needElements) });
    this.interval = setInterval(() => this.updatePhoto(), 1000);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    clearInterval(this.interval);
  }

  getRandomElements = (sourceArray, neededElements) => {
    const copyArray = sourceArray.slice();
    const shuffled = copyArray.sort(() => 0.5 - Math.random());

    return {
      visibleItems: shuffled.slice(0, neededElements),
      hiddenItems: shuffled.slice(neededElements),
    };
  };

  updatePhoto = () => {
    const { visibleItems, hiddenItems } = this.state;
    const newVisibleItems = visibleItems.slice();
    const newHiddenItems = hiddenItems.slice();
    const randomIndex = random(newVisibleItems.length - 1);
    const randomHiddenItemsElement = newHiddenItems.splice(random(newHiddenItems.length - 1), 1)[0];

    const randomVisibleItemsElement = newVisibleItems.splice(
      randomIndex,
      1,
      randomHiddenItemsElement,
    )[0];

    newHiddenItems.push(randomVisibleItemsElement);

    this.setState({
      visibleItems: newVisibleItems,
      hiddenItems: newHiddenItems,
      item: {
        prev: randomVisibleItemsElement,
        next: randomHiddenItemsElement,
      },
    });
  };

  onResize = () => {
    const { items } = this.props;
    const nextNeedElements = getNeedElements();

    this.setState({ ...this.getRandomElements(items, nextNeedElements) });
  };

  render() {
    const { visibleItems, item } = this.state;
    const { title } = this.props;

    return (
      <CompanyPhotoContainer>
        {title && (
          <CompanyHeader>
            <HorizontalRule />
            <h1>{title}</h1>
          </CompanyHeader>
        )}
        <CompanyPhotoTransition visibleItems={visibleItems} item={item} />
      </CompanyPhotoContainer>
    );
  }
}
