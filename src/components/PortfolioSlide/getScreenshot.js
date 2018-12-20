import React from "react";
import cn from "classnames";

import { MspMobileScreenshotsBlock } from "./MspMobileScreenshots";
import { fade } from "../Transition/animation";

import { Screenshot, transition, slideLeft } from "./styles";

export const getScreenshot = props => {
  const { id, screenshot, text, status } = props;

  switch (id) {
    case "mobileMsp":
      return (
        <MspMobileScreenshotsBlock
          className={cn(slideLeft[status], fade[status], transition[status])}
        />
      );
    default:
      return (
        <Screenshot
          className={cn(slideLeft[status], fade[status], transition[status])}
          src={screenshot}
          alt={text}
        />
      );
  }
};
