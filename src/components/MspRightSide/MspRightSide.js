import React, { PureComponent } from "react";

import layer1 from "../../img/portfolio/msp/layer-1.png";
import animation from "../Transition/animation";
import layer2 from "../../img/portfolio/msp/layer-2.png";
import layer3 from "../../img/portfolio/msp/layer-3.png";

import cardLeft1 from "../../img/portfolio/msp/cards/Left-1.png";
import cardLeft2 from "../../img/portfolio/msp/cards/Left-2.png";
import cardLeft3 from "../../img/portfolio/msp/cards/Left-3.png";
import cardLeft4 from "../../img/portfolio/msp/cards/Left-4.png";

import cardRight1 from "../../img/portfolio/msp/cards/Right-1.png";
import cardRight2 from "../../img/portfolio/msp/cards/Right-2.png";
import cardRight3 from "../../img/portfolio/msp/cards/Right-3.png";
import cardRight4 from "../../img/portfolio/msp/cards/Right-4.png";

import styles, { LayersBlock, CardsBlock, LeftCol, RightCol } from "./styles";

export class MspRightSide extends PureComponent {
  render() {
    return (
      <>
        <LayersBlock>
          <img src={layer1} alt="fake-layer" className={styles.fakeLayer} />
          <img src={layer1} alt="layer1" className={animation.fadeIn} />
          <img src={layer2} alt="layer2" className={animation.fadeIn} />
          <img src={layer3} alt="layer3" className={animation.fadeIn} />
        </LayersBlock>
        <CardsBlock>
          <LeftCol>
            <img className={styles.fadeInSlideDown} src={cardLeft1} alt="card-left-1" />
            <img className={styles.fadeInSlideDown} src={cardLeft2} alt="card-left-2" />
            <img className={styles.fadeInSlideDown} src={cardLeft3} alt="card-left-3" />
            <img className={styles.fadeInSlideDown} src={cardLeft4} alt="card-left-4" />
          </LeftCol>
          <RightCol>
            <img className={styles.fadeInSlideUp} src={cardRight1} alt="card-right-1" />
            <img className={styles.fadeInSlideUp} src={cardRight2} alt="card-right-2" />
            <img className={styles.fadeInSlideUp} src={cardRight3} alt="card-right-3" />
            <img className={styles.fadeInSlideUp} src={cardRight4} alt="card-right-4" />
          </RightCol>
        </CardsBlock>
      </>
    );
  }
}
