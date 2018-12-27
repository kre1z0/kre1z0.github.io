import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import noVacancy from "../../img/vacancy/no-vacancy.svg";
import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import { TeamMemberCard } from "../../components/TeamMemberCard/TeamMemberCard";
import { getVacancyAvatarByType } from "./getVacancyAvatarByType";
import { TeamMembersContainer } from "./styles";

function getColumns({ items, id }) {
  const newArray = items.slice();

  if (id === "employees") {
    newArray.push({
      avatar: noVacancy,
      name: "Стать частью </br> команды",
      id: "nobody",
      control: <GoNextLink>Наши вакансии</GoNextLink>,
    });
  }

  const firstCol = [];
  const lastCol = [];
  newArray.forEach((item, i) => (i % 2 ? lastCol.push(item) : firstCol.push(item)));
  return firstCol.concat(lastCol);
}

export class TeamMembers extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string.isRequired,
  };

  static defaultProps = {
    items: [],
  };

  render() {
    const { items, id } = this.props;

    const data = getColumns({ items, id });
    const top = 160;
    const height = 320;
    const margin = 30;
    const half = Math.round(data.length / 2);
    const containerHeight = height * half + margin * half + top;

    return (
      <TeamMembersContainer style={{ height: containerHeight + "px" }}>
        {data.map((item, index) => (
          <TeamMemberCard
            control={id === "vacancy" ? <GoNextLink>Описание вакансии</GoNextLink> : null}
            avatar={item.type ? getVacancyAvatarByType(item.type) : item.avatar}
            withMarginTop={index === half}
            height={height}
            top={top}
            margin={margin}
            key={item.id}
            {...item}
          />
        ))}
      </TeamMembersContainer>
    );
  }
}
