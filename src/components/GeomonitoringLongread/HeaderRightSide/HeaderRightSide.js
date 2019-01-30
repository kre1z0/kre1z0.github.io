import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "../../PortfolioLongread/animation";

import { LayersBlock, CardsBlock } from "./styles";

export class HeaderRightSide extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    animate: PropTypes.bool,
  };

  render() {
    const { images, animate } = this.props;

    return (
      <>
        <LayersBlock animate={animate}>
          <img src={images[0]} alt="hidden-img" className={styles.hidden} />
          <img src={images[0]} alt="layer1" />
          <img src={images[1]} alt="layer2" />
        </LayersBlock>
        <CardsBlock animate={animate}>
          <img src={images[2]} alt="card-left" />
          <img src={images[3]} alt="card-right" />
          <img src={images[4]} alt="card-botom" />
        </CardsBlock>
      </>
    );
  }
}
