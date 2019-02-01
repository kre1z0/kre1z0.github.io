import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { getPixelRatioPropName } from "../../utils/utils";
import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";
import { Swiper } from "../../components/Swiper/Swiper";
import {
  PortfolioSlideContainer,
  SliderBackground,
  ControlBlock,
  PrevBtn,
  NextBtn,
  LongreadBackground,
} from "./styles";
import { Content } from "./Content";
import { Screenshot } from "./Screenshot";
import { BackendComponent } from "../Backend/Backend";
import { Bullets } from "../Bullets/Bullets";
import { Portal } from "../../components/Portal/Portal";

export class PortfolioSlide extends PureComponent {
  static propTypes = {
    projectBackgroundColor: PropTypes.string,
    text: PropTypes.string,
    description: PropTypes.string,
    screenshots: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
    id: PropTypes.string,
    onSectionChange: PropTypes.func,
    selectedSectionIndex: PropTypes.number,
    sections: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    parentTitle: PropTypes.string,
    sectionDirection: PropTypes.number,
    navigate: PropTypes.func,
    disableTransition: PropTypes.bool,
  };

  state = {
    hovered: false,
    goToLongread: false,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  };

  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    if (this.slide) {
      const { top, left, width, height } = this.slide.getBoundingClientRect();
      this.setState({ top, left, width, height });
    }
  };

  onSwiped = ({ isLeft, isRight, xRatio }) => {
    const { onSectionChange } = this.props;

    if (isLeft && xRatio > 25) {
      onSectionChange({ value: 1 });
    } else if (isRight && xRatio > 25) {
      onSectionChange({ value: -1 });
    }
  };

  goToLongread = () => {
    const { navigate, id } = this.props;
    this.setState(
      {
        goToLongread: true,
      },
      () => {
        setTimeout(() => {
          navigate(`/${id}`);
        }, 200);
      },
    );
  };

  onContainerRef = ref => {
    if (ref) {
      this.slide = ref;
    }
  };

  render() {
    const { hovered, top, left, width, height, goToLongread } = this.state;
    const {
      projectBackgroundColor,
      text,
      description,
      onSectionChange,
      selectedSectionIndex,
      sections,
      id,
      title,
      screenshots,
      sectionDirection,
      disableTransition,
    } = this.props;

    return (
      <Swiper onSwiped={this.onSwiped} onClick={this.goToLongread}>
        <ImagesDownloadListener images={[]} />
        <PortfolioSlideContainer
          ref={this.onContainerRef}
          onMouseOver={() => this.setState({ hovered: true })}
          onMouseOut={() => this.setState({ hovered: false })}
        >
          <BackendComponent sections={sections} selectedSectionIndex={selectedSectionIndex} />
          <SliderBackground hovered={hovered} style={{ background: projectBackgroundColor }} />
          <Screenshot
            disableTransition={disableTransition}
            direction={sectionDirection}
            id={id}
            text={text}
            screenshots={
              Array.isArray(screenshots)
                ? screenshots.map(img => img[getPixelRatioPropName()])
                : screenshots[getPixelRatioPropName()]
            }
          />
          <Content
            disableTransition={disableTransition}
            direction={sectionDirection}
            id={id}
            title={title}
            text={text}
            description={description}
          />
          <ControlBlock
            onMouseOver={e => e.stopPropagation()}
            onMouseOut={e => e.stopPropagation()}
          >
            <PrevBtn
              disabled={selectedSectionIndex === 0}
              onClick={e => {
                e.stopPropagation();
                onSectionChange({ value: -1 });
              }}
            />
            <NextBtn
              disabled={sections.length === selectedSectionIndex + 1}
              onClick={e => {
                e.stopPropagation();
                onSectionChange({ value: 1 });
              }}
            />
          </ControlBlock>
          <Bullets
            sections={sections}
            selectedSectionIndex={selectedSectionIndex}
            goPrev={e => {
              e.stopPropagation();
              onSectionChange({ value: -1, isSwipeEvent: true });
            }}
            goNext={e => {
              e.stopPropagation();
              onSectionChange({ value: 1, isSwipeEvent: true });
            }}
          />
        </PortfolioSlideContainer>
        {typeof window === "object" && (
          <Portal>
            <LongreadBackground
              goToLongread={goToLongread}
              style={{
                backgroundColor: projectBackgroundColor,
                top: goToLongread ? 0 : top,
                left: goToLongread ? 0 : left,
                width: goToLongread ? "100vw" : width,
                height: goToLongread ? "100vh" : height,
              }}
            />
          </Portal>
        )}
      </Swiper>
    );
  }
}
