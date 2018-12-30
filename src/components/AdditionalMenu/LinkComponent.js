import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "../Atoms/Atoms";

export class LinkComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
    count: PropTypes.bool,
    little: PropTypes.bool,
    items: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.arrayOf(PropTypes.string),
    ]),
  };

  shouldComponentUpdate({ selectedId: nextSelectedId }, nextState) {
    const { selectedId, id } = this.props;

    return selectedId !== nextSelectedId && (nextSelectedId === id || selectedId === id);
  }

  render() {
    const { text, little = false, items, count, id, selectedId, onSectionChange } = this.props;

    return (
      <Link
        onClick={() => onSectionChange({ id, isClickEvent: true })}
        little={little}
        isActive={selectedId === id}
      >
        {text}
        {items && count && <span>{items.length}</span>}
      </Link>
    );
  }
}
