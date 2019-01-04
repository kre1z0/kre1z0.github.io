import React from "react";
import PropTypes from "prop-types";

import { TeamMemberCard } from "../TeamMemberCard/TeamMemberCard";
import noVacancy from "../../img/vacancy/no-vacancy.svg";
import { NoVacancyDescription } from "./styles";
import { GoNextLink } from "../GoNextLink/GoNextLink";

export const NoVacancyCard = ({ height }) => {
  return (
    <TeamMemberCard
      height={height}
      id="noVacancies"
      avatar={noVacancy}
      name="В настоящее время вакансий нет"
      control={
        <NoVacancyDescription>
          Но если вы отличный специалист, напишите нам в{" "}
          <GoNextLink withArrow={false}>чат</GoNextLink>.<br />
          <br />
          Возможно, мы еще не знаем, что вы нам нужны!
        </NoVacancyDescription>
      }
    />
  );
};

NoVacancyCard.propTypes = {
  cardHeight: PropTypes.number,
};
