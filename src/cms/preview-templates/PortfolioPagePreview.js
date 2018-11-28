import React from "react";
import PropTypes from "prop-types";
import { Portfolio } from "../../templates/portfolio";

export const PortfoliotPreview = ({ entry, widgetFor }) => (
  <Portfolio title={entry.getIn(["data", "title"])} content={widgetFor("body")} />
);

PortfoliotPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};
