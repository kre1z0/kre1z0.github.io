import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "../../components/Avatar/Avatar";
import styles, { TeamMemberCardContainer, Name, Position, Description } from "./styles";

export const TeamMemberCard = ({ avatar, height, top, margin, withMarginTop, name, position }) => {
  return (
    <TeamMemberCardContainer
      style={{ height, marginBottom: margin, marginTop: withMarginTop && top }}
    >
      <Avatar
        source={
          avatar ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKiwmc2NEcgZPrLXCtMJsnoK8odjFNXOEfnmO8sH3EQfSqpkc-"
        }
        className={styles.avatarBlock}
      />
      <Name>{name}</Name>
      <Position>{position}</Position>
      <Description>aaaaAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Description>
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
};
