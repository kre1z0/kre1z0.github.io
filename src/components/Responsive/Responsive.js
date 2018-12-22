import React from "react";
import Responsive from "react-responsive";

export const Tablet = props => <Responsive {...props} maxWidth={768} />;

export const Middle = props => <Responsive {...props} maxWidth={576} />;
