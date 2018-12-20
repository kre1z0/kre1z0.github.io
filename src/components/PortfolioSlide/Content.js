import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Content as ContentBlock, Description, slideDown, Title } from "./styles";
import { fade, slideUp } from "../Transition/animation";

import { transition } from "./styles";
import { Transition, TransitionGroup } from "react-transition-group";

export class Content extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    description: PropTypes.string,
    direction: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
  };

  render() {
    const { text, description, className, title, direction, id } = this.props;

    return (
      <TransitionGroup appear>
        <Transition
          key={`${id}-content-${direction}`}
          timeout={{
            enter: 500,
            exit: 1000,
          }}
        >
          {status => (
            <ContentBlock
              className={cn(
                direction > 0 ? slideUp[status] : slideDown[status],
                className,
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
          )}
        </Transition>
      </TransitionGroup>
    );
  }
}
