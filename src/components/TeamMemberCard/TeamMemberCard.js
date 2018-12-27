import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "../../components/Avatar/Avatar";
import styles, { TeamMemberCardContainer, Name, Position, Description } from "./styles";

export const TeamMemberCard = ({
  avatar,
  height,
  top,
  margin,
  withMarginTop,
  name,
  position,
  descrition,
  control,
}) => {
  return (
    <TeamMemberCardContainer
      style={{ height, marginBottom: margin, marginTop: withMarginTop && top }}
    >
      <Avatar source={avatar} className={styles.avatarBlock} />
      <Name
        dangerouslySetInnerHTML={{
          __html: name,
        }}
      />
      {control}
      <Position>{position}</Position>
      <Description>{descrition}</Description>
    </TeamMemberCardContainer>
  );
};

TeamMemberCard.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  withMarginTop: PropTypes.bool,
  height: PropTypes.number,
  top: PropTypes.number,
  margin: PropTypes.number,
  avatar: PropTypes.string,
  control: PropTypes.element,
};
