import React from "react";

import styles from "./styles";
import { ReactComponent as Earth } from "../../img/main-slides/earth.svg";
import { ReactComponent as Bus } from "../../img/main-slides/bus.svg";
import { ReactComponent as Metro } from "../../img/main-slides/metro.svg";
import { ReactComponent as About } from "../../img/main-slides/aboutSlide.svg";

export const getSVGBackgroundByIndex = ({ isContactsPage, isAboutPage, svgIndex, ...props }) => {
  if (isContactsPage()) {
    if (svgIndex) {
      return <Bus {...props} />;
    } else {
      return <Metro {...props} />;
    }
  } else if (isAboutPage()) {
    return <About {...props} />;
  } else {
    return <Earth {...props} />;
  }
};

export const getBase64BackgroundByIndex = ({
  isPortfolioPage,
  isAboutPage,
  isJobsPage,
  isContactsPage,
}) => {
  if (isPortfolioPage()) return styles.portfolio;
  else if (isAboutPage()) return styles.europeRussia;
  else if (isJobsPage()) return styles.moscow;
  else if (isContactsPage()) return styles.bus;
  else return styles.earth;
};
