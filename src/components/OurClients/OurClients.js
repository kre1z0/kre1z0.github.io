import React from "react";
import PropTypes from "prop-types";

import { OurClientsContainer } from "./styles";

export const OurClients = () => {
  return <OurClientsContainer />;
};

OurClients.propTypes = {
  component: PropTypes.bool,
};
