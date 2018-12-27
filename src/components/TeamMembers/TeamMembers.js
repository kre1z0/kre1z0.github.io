import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import employees from "../../assets/employees";
import { TeamMembersContainer } from "./styles";
import { TeamMemberCard } from "../../components/TeamMemberCard/TeamMemberCard";

export class TeamMembers extends PureComponent {
  static propTypes = {
    employees: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const top = 160;
    const height = 317;
    const margin = 30;
    const half = Math.round(employees.length / 2);
    const containerHeight = height * half + margin * half + top;

    return (
      <TeamMembersContainer style={{ height: containerHeight + "px" }}>
        {employees.map((item, index) => (
          <TeamMemberCard
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
