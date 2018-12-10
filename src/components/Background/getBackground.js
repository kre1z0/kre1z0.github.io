import React from "react";

import { styles } from "./styles";
import { ReactComponent as Russia } from "../../img/russia.svg";
import { ReactComponent as Earth } from "../../img/earth.svg";
import { ReactComponent as Moscow } from "../../img/moscow.svg";
import { ReactComponent as Adress1 } from "../../img/address-1.svg";
// import { ReactComponent as Adress2 } from "../../img/address-2.svg";
// import { ReactComponent as Adress3 } from "../../img/address-3.svg";

export const getSVGBackgroundByIndex = ({
  isPortfolioPage,
  isAboutPage,
  isJobsPage,
  isContactsPage,
  style,
}) => {
  if (isPortfolioPage() || isAboutPage()) return <Russia style={style} />;
  else if (isJobsPage()) return <Moscow style={style} />;
  else if (isContactsPage()) return <Adress1 style={style} />;
  else return <Earth style={style} />;
};

export const getBase64BackgroundByIndex = ({
  isPortfolioPage,
  isAboutPage,
  isJobsPage,
  isContactsPage,
}) => {
  if (isPortfolioPage() || isAboutPage()) return styles.russia;
  else if (isJobsPage()) return styles.moscow;
  else if (isContactsPage()) return styles.metro;
  else return styles.earth;
};
