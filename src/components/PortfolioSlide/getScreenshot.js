import React from "react";
import cn from "classnames";

import { MspMobileScreenshotsBlock } from "./MspMobileScreenshots";
import { fade } from "../Transition/animation";

import { Screenshot, transition, slideLeft, slideRight } from "./styles";

export const getScreenshot = props => {
  const { id, screenshot, text, status, direction } = props;

  const animation = direction > 0 ? slideLeft[status] : slideRight[status];

  switch (id) {
    case "mobileMsp":
      return (
        <MspMobileScreenshotsBlock
          className={cn(animation, fade[status], transition[status])}
          alt={text}
        />
      );
    default:
      return (
        <Screenshot
          className={cn(animation, fade[status], transition[status])}
          src={screenshot}
          alt={text}
        />
      );
  }
};
