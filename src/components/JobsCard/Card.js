import React from "react";

import { getVacancyAvatarByType } from "../../components/TeamMembers/getVacancyAvatarByType";
import { HowWeAreWorking } from "../../components/HowWeAreWorking/HowWeAreWorking";
import { TeamMemberCard } from "../../components/TeamMemberCard/TeamMemberCard";
import { PhotoContainer } from "../../components/TeamMembers/styles";
import { GoNextLink } from "../GoNextLink/GoNextLink";

export const Card = props => {
  const { id, card, className } = props;
  const { photo, type, avatar } = card;

  switch (id) {
    case "employees":
    case "vacancy":
      return (
        <TeamMemberCard
          {...card}
          className={className}
          control={id === "vacancy" ? <GoNextLink>Описание вакансии</GoNextLink> : null}
          height={297}
          avatar={type ? getVacancyAvatarByType(type) : avatar}
        />
      );
    case "photo":
      return (
        <PhotoContainer className={className}>
          <img src={photo} alt="" />
        </PhotoContainer>
      );
    case "process":
      return <HowWeAreWorking className={className} />;
    default:
      return null;
  }
};
