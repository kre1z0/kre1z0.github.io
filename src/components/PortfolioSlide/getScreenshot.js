import React from "react";
import cn from "classnames";

import { MspMobileScreenshotsBlock } from "./MspMobileScreenshots";
import { fade, slideX } from "../Transition/animation";

import { Screenshot, transition } from "./styles";

export const getScreenshot = props => {
  const { id, screenshot, text, status } = props;

  switch (id) {
    case "mobileMsp":
      return <MspMobileScreenshotsBlock />;
    default:
      return (
        <Screenshot
          className={cn(slideX[status], fade[status], transition[status])}
          src={screenshot}
          alt={text}
        />
      );
  }
};
