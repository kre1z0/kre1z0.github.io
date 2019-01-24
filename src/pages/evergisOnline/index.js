import React, { PureComponent } from "react";

import { Header } from "../../components/PortfolioLongread/Header";
import { getProject } from "../../routes";

import { EvergisOnlineContainer } from "../../styles/evergisOnline";

class EvergisOnline extends PureComponent {
  static defaultProps = {
    projectId: "evergisOnline",
  };

  render() {
    const { location, projectId } = this.props;
    const evergisOnline = getProject({ projectId });

    return (
      <EvergisOnlineContainer>
        <Header projectId={projectId} location={location} {...evergisOnline} />
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
      </EvergisOnlineContainer>
    );
  }
}

export default EvergisOnline;
