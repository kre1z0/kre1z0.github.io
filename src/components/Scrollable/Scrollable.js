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
    scrollToBlock: PropTypes.func.isRequired,
    selectedSectionIndex: PropTypes.number,
    transitionEnd: PropTypes.bool,
  };

  componentDidUpdate({ transitionEnd: prevTransitionEnd }, prevState) {
    const { transitionEnd, selectedSectionIndex, scrollToBlock } = this.props;
    if (prevTransitionEnd !== transitionEnd) {
      scrollToBlock(selectedSectionIndex, true);
    }
  }

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
        <TeamMembers id="process" sectionDirection={sectionDirection} selectedId={selectedId}>
          <img
            style={{ margin: "0 auto" }}
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
