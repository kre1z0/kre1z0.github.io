import React from "react";

import styles from "./styles";
import { ReactComponent as Earth } from "../../img/main-slides/earth.svg";
import { ReactComponent as About } from "../../img/main-slides/aboutSlide.svg";

export const getSVGBackgroundByIndex = ({ isContactsPage, isAboutPage, ...props }) => {
  if (isAboutPage()) {
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
