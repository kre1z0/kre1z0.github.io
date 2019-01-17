import React from "react";
import cn from "classnames";

import { MultiScreenshots } from "./MultiScreenshots";
import { fade } from "../../styles/animation";

import { Screenshot, transition, slideLeft, slideRight } from "./styles";

export const getScreenshot = props => {
  const { screenshot, text, status, direction } = props;

  const animation = direction > 0 ? slideLeft[status] : slideRight[status];

  if (Array.isArray(screenshot)) {
    return (
      <MultiScreenshots
        className={cn(animation, fade[status], transition[status])}
        alt={text}
        screenshot={screenshot}
      />
    );
  } else {
    return (
      <Screenshot
        className={cn(animation, fade[status], transition[status])}
        src={screenshot}
        alt={text}
      />
    );
  }
};
