import React from "react";

import { styles } from "./styles";
import { ReactComponent as Russia } from "../../img/russia.svg";
import { ReactComponent as Earth } from "../../img/earth.svg";
import { ReactComponent as Moscow } from "../../img/moscow.svg";
// import { ReactComponent as Adress1 } from "../../img/address-1.svg";
// import { ReactComponent as Adress2 } from "../../img/address-2.svg";
// import { ReactComponent as Adress3 } from "../../img/address-3.svg";

export const getSVGBackgroundByIndex = ({ route, ...props }) => {
  switch (route) {
    case "/portfolio":
      return <Russia {...props} />;
    case "/contacts":
      return <Earth {...props} />;
    case "/jobs":
      return <Moscow {...props} />;
    default:
      return <Earth {...props} />;
  }
};

export const getBase64BackgroundByIndex = route => {
  switch (route) {
    case "/portfolio":
      return styles.russia;
    case "/contacts":
      return styles.earth;
    case "/jobs":
      return styles.moscow;
    default:
      return styles.earth;
  }
};
