import React, { Component } from "react";
import cn from "classnames";

import animation from "../../Transition/animation";
import styles from "../../Transition/portfolio";
import layer1 from "../../../img/portfolio/geomonitoring/map.png";
import layer2 from "../../../img/portfolio/geomonitoring/app.png";
import cardLeft from "../../../img/portfolio/geomonitoring/cards/leftCard.png";
import cardRight from "../../../img/portfolio/geomonitoring/cards/rightCard.png";
import cardBottom from "../../../img/portfolio/geomonitoring/cards/bottomCard.png";

import { LayersBlock, CardsBlock } from "./styles";

export class HeaderRightSide extends Component {
  state = {
    isVisible: false,
  };

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ isVisible: true });
    });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <>
        <LayersBlock>
          <img src={layer1} alt="fake-layer" className={styles.fakeLayer} />
          <img src={layer1} alt="layer1" className={cn({ [styles.isVisible]: isVisible })} />
          <img src={layer2} alt="layer2" className={animation.fadeIn} />
        </LayersBlock>
        <CardsBlock>
          <img className={styles.fadeInSlideRight} src={cardLeft} alt="card-left" />
          <img className={styles.fadeInSlideLeft} src={cardRight} alt="card-right" />
          <img className={styles.fadeInSlideUp} src={cardBottom} alt="card-botom" />
        </CardsBlock>
      </>
    );
  }
}
