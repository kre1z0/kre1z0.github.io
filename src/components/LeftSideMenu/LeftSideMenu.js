import React, { Component } from "react";
import PropTypes from "prop-types";

import { getRouteByLocation } from "../../routes";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";

export class LeftSideMenu extends Component {
  static propTypes = {
    location: PropTypes.object,
    selectedId: PropTypes.string,
  };

  render() {
    const { location, selectedId } = this.props;
    const currentRoute = getRouteByLocation(location);

    return (
      <>
        {currentRoute && (
          <AdditionalMenu
            selectedId={selectedId}
            leftSide
            additionalMenu={currentRoute.additionalMenu}
            isOpen={true}
          />
        )}
      </>
    );
  }
}
