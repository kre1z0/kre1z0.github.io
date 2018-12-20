import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Content as ContentBlock, Description, slideDown, slideUp, Title } from "./styles";
import { fade } from "../Transition/animation";

import { transition } from "./styles";
import { Transition, TransitionGroup } from "react-transition-group";

export class Crutch extends PureComponent {
  render() {
    const { status, direction, description, title, text } = this.props;
    return (
      <ContentBlock
        className={cn(
          direction > 0 ? slideUp[status] : slideDown[status],
          fade[status],
          transition[status],
        )}
      >
        <Title>{title || text}</Title>
        <Description>
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eligendi iusto labore nisi quas recusandae reiciendis reprehenderit. Ab consectetur enim excepturi facere modi neque, repudiandae rerum soluta. Beatae, consequuntur."}
        </Description>
      </ContentBlock>
    );
  }
}

export class Content extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    description: PropTypes.string,
    direction: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
  };

  render() {
    const { text, description, title, direction, id } = this.props;

    return (
      <TransitionGroup appear>
        <Transition
          key={`${id}-content-${direction}`}
          timeout={{
            enter: 100,
            exit: 200,
          }}
        >
          {status => (
            <Crutch
              {...this.props}
              status={status}
              text={text}
              title={title}
              description={description}
            />
          )}
        </Transition>
      </TransitionGroup>
    );
  }
}
