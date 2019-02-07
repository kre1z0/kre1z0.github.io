import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "../../components/Background/styles";
import { PreviewContainer } from "../../styles/cms";
import { NewsContainer } from "../../styles/about";
import { News } from "../../components/NewsCard/NewsCard";

const AboutPreview = ({ entry, widgetFor }) => (
  <PreviewContainer className={cn(styles.default, styles.moscow)}>
    <NewsContainer>
      <News
        title={entry.getIn(["data", "title"])}
        date={entry.getIn(["data", "date"])}
        description={entry.getIn(["data", "description"])}
        link={entry.getIn(["data", "link"])}
        logo={entry.getIn(["data", "logo"])}
      />
    </NewsContainer>
  </PreviewContainer>
);

AboutPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPreview;
