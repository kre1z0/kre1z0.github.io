import React from "react";
import ReactHelmet from "react-helmet";

import favicon from "../../img/favicon.png";

export const Helmet = () => {
  return (
    <ReactHelmet
      title="Everpoint"
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
      meta={[
        {
          name: "viewport",
          content:
            "width=device-width, height=device-height, initial-scale=1.0, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover",
        },
        { name: "apple-mobile-web-app-capable", content: "yes" },
      ]}
    />
  );
};
