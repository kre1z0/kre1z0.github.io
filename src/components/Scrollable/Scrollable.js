import React, { PureComponent } from "react";
import styled from "astroturf";
import PropTypes from "prop-types";

import { TeamMembers } from "../TeamMembers/TeamMembers";

export const ScrollableContainer = styled("div")`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export class Scrollable extends PureComponent {
  static propTypes = {
    selectedId: PropTypes.string,
    onSectionChange: PropTypes.func,
    scrollToBlock: PropTypes.func.isRequired,
    selectedSectionIndex: PropTypes.number,
    transitionEnd: PropTypes.bool,
    sections: PropTypes.arrayOf(PropTypes.object),
  };

  componentDidUpdate({ transitionEnd: prevTransitionEnd }, prevState) {
    const { transitionEnd, scrollToBlock, selectedSectionIndex } = this.props;
    if (prevTransitionEnd !== transitionEnd && transitionEnd) {
      scrollToBlock(selectedSectionIndex, true);
    }
  }

  render() {
    const { selectedId, onSectionChange, sections } = this.props;

    return (
      <ScrollableContainer>
        {sections.map(item => (
          <TeamMembers
            key={item.id}
            sections={sections}
            selectedId={selectedId}
            onSectionChange={onSectionChange}
            {...item}
          />
        ))}
      </ScrollableContainer>
    );
  }
}
