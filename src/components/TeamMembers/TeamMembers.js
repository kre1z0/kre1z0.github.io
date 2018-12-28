import React, { Component } from "react";
import PropTypes from "prop-types";

import noVacancy from "../../img/vacancy/no-vacancy.svg";
import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import { TeamMemberCard } from "../../components/TeamMemberCard/TeamMemberCard";
import { getVacancyAvatarByType } from "./getVacancyAvatarByType";
import { TeamMembersContainer, NoVacancyDescription } from "./styles";

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

export class TeamMembers extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string.isRequired,
  };

  static defaultProps = {
    items: [],
  };

  shouldComponentUpdate({ items: nextItems, id: nextId }, nextState) {
    const { items, id } = this.props;

    return items.length !== nextItems.length || id !== nextId;
  }

  render() {
    const { items, id } = this.props;

    const data = getColumns({ items, id });
    const top = 160;
    const height = 320;
    const margin = 30;
    const half = Math.round(data.length / 2);
    const containerHeight = height * half + margin * half + (data.length % 2 ? 0 : 160);

    const noVacancies = id === "vacancy" && items.length === 0;

    return (
      <TeamMembersContainer oneItem={data.length <= 1} style={{ height: containerHeight + "px" }}>
        {noVacancies ? (
          <TeamMemberCard
            height={375}
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
        ) : (
          data.map((item, index) => (
            <TeamMemberCard
              control={id === "vacancy" ? <GoNextLink>Описание вакансии</GoNextLink> : null}
              avatar={item.type ? getVacancyAvatarByType(item.type) : item.avatar}
              withMarginTop={index === half}
              height={height}
              top={top}
              margin={data.length > 1 ? margin : 0}
              key={item.id}
              {...item}
            />
          ))
        )}
      </TeamMembersContainer>
    );
  }
}
