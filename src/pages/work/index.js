import React from "react";
import PropTypes from "prop-types";

import { InDevelop } from "../../components/InDevelop/InDevelop";

export const Work = () => {
  return (
    <div>
      <InDevelop to="jobs" />
    </div>
  );
};

Work.propTypes = {
  component: PropTypes.bool,
};

export default Work;
