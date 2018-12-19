import React from "react";
import { Screenshot } from "./styles";

import { MspMobileScreenshotsBlock } from "./MspMobileScreenshots";

export const getScreenshot = props => {
  const { id, screenshot, text } = props;

  switch (id) {
    case "mobileMsp":
      return <MspMobileScreenshotsBlock />;
    default:
      return <Screenshot src={screenshot} alt={text} />;
  }
};
