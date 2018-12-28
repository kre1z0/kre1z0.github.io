import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { TeamMembers } from "../TeamMembers/TeamMembers";
import employees from "../../assets/employees";
import vacancy from "../../assets/vacancy";
import photo from "../../assets/photo";

export class Scrollable extends PureComponent {
  static propTypes = {
    selectedId: PropTypes.string,
    onSectionChange: PropTypes.func,
  };

  render() {
    const { selectedId, onSectionChange, sectionDirection } = this.props;

    return (
      <>
        <TeamMembers
          sectionDirection={sectionDirection}
          selectedId={selectedId}
          id="employees"
          items={employees}
          onSectionChange={onSectionChange}
        />
        <TeamMembers
          sectionDirection={sectionDirection}
          selectedId={selectedId}
          id="vacancy"
          items={vacancy}
        />
        <TeamMembers sectionDirection={sectionDirection} selectedId={selectedId} id="process">
          <img
            style={{ margin: "0 auto 30px auto" }}
            src="http://odkb76.ru/pic/userfile/images/razrabotka.png"
            alt="in developing"
          />
        </TeamMembers>
        <TeamMembers
          sectionDirection={sectionDirection}
          selectedId={selectedId}
          id="photo"
          items={photo}
        />
      </>
    );
  }
}
