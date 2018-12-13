import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { routes } from "../../routes";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";

export class LeftSideMenu extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
  };

  render() {
    const { location } = this.props;
    const currentRoute = routes.find(({ route }) => route === location.pathname);

    return (
      <>
        {currentRoute && (
          <AdditionalMenu big additionalMenu={currentRoute.additionalMenu} isOpen={true} />
        )}
      </>
    );
  }
}
