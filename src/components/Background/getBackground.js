import React from "react";

import { ReactComponent as Russia } from "../../img/russia.svg";
import { ReactComponent as Earth } from "../../img/earth.svg";
import { ReactComponent as Moscow } from "../../img/moscow.svg";
// import { ReactComponent as Adress1 } from "../../img/address-1.svg";
// import { ReactComponent as Adress2 } from "../../img/address-2.svg";
// import { ReactComponent as Adress3 } from "../../img/address-3.svg";

export const getBackgroundByIndex = route => {
  switch (route) {
    case "/portfolio":
      return <Russia />;
    case "/contacts":
      return <Earth />;
    case "/jobs":
      return <Moscow />;
    default:
      return <Earth />;
  }
};
