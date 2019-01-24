import React, { PureComponent } from "react";

import { Header } from "../../components/PortfolioLongread/Header";
import { getProject } from "../../routes";

import styles, { MobileMspContainer, MobileMspStoreContainer } from "../../styles/mobileMsp";
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
          location={location}
          {...mobileMsp}
          lightNavy
          containerClassName={styles.mobileMspContainer}
          leftSideClassName={styles.mobileMspLeftSide}
          leftSide={
            <MobileMspStoreContainer>
              <IosStoreLink href={ios} target="_blank" />
              <AndroidStoreLink href={android} target="_blank" />
            </MobileMspStoreContainer>
          }
        />
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
