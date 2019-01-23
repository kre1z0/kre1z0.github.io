import React from "react";
import ReactHelmet from "react-helmet";

import favicon from "../../img/favicon.png";

export const Helmet = () => {
  return (
    <ReactHelmet
      title="Everpoint"
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
  );
};
