import React, { PureComponent } from "react";

import { Header } from "../../components/PortfolioLongread/Header";
import { getProject } from "../../routes";

import { GeomonitoringContainer } from "../../styles/geomonitoring";

class Geomonitoring extends PureComponent {
  static defaultProps = {
    projectId: "geomonitoring",
  };

  render() {
    const { location, projectId } = this.props;
    const geomonitoring = getProject({ projectId });

    return (
      <GeomonitoringContainer>
        <Header projectId={projectId} location={location} {...geomonitoring} />
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
      </GeomonitoringContainer>
    );
  }
}

export default Geomonitoring;
