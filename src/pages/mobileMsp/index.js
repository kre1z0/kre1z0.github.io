import React, { PureComponent } from "react";

import phones from "../../img/portfolio/mobileMsp/phones.jpg";
import animation from "../../components/Transition/animation";
import { Header } from "../../components/PortfolioLongread/Header";
import { getProject } from "../../routes";
import styles, {
  MobileMspContainer,
  MobileMspStoreContainer,
  Phones,
} from "../../styles/mobileMsp";
import { AndroidStoreLink, IosStoreLink } from "../../components/StoreLinks/StoreLinks";

class MobileMsp extends PureComponent {
  static defaultProps = {
    projectId: "mobileMsp",
  };

  render() {
    const { location, projectId } = this.props;
    const mobileMsp = getProject({ projectId });
    const { ios, android } = mobileMsp;

    return (
      <MobileMspContainer>
        <Header
          projectId={projectId}
          location={location}
          {...mobileMsp}
          lightNavy
          containerClassName={styles.mobileMspContainer}
          leftSideClassName={styles.mobileMspLeftSide}
          rightSideClassName={styles.mobileMspRightSide}
          leftSide={
            <MobileMspStoreContainer>
              <IosStoreLink href={ios} target="_blank" />
              <AndroidStoreLink href={android} target="_blank" />
            </MobileMspStoreContainer>
          }
        >
          <Phones src={phones} className={animation.fadeIn} />
        </Header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
      </MobileMspContainer>
    );
  }
}

export default MobileMsp;
