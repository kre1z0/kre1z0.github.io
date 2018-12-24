import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Transition, TransitionGroup } from "react-transition-group";

import { Swiper } from "../../components/Swiper/Swiper";
import { Container, Title, Date, Description, Logo, Read } from "./styles";
import cn from "classnames";
import { slideDown, slideUp, transition } from "../PortfolioSlide/styles";
import { fade } from "../../components/Transition/animation";

export class Crutch extends PureComponent {
  render() {
    const { status, direction, description, title, date, logo } = this.props;
    return (
      <Container
        className={cn(
          direction > 0 ? slideUp[status] : slideDown[status],
          fade[status],
          transition[status],
        )}
      >
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Description>
          {description} <Read>Читать</Read>
        </Description>
        <Logo src={logo} alt="logo" />
      </Container>
    );
  }
}

export class News extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.string,
    id: PropTypes.string,
    direction: PropTypes.number,
  };

  onSwiped = ({ isLeft, isRight, xRatio }) => {
    const { onSectionChange } = this.props;

    if (isLeft && xRatio > 25) {
      onSectionChange({ value: 1 });
    } else if (isRight && xRatio > 25) {
      onSectionChange({ value: -1 });
    }
  };

  render() {
    const { direction, title, date, description, logo, id } = this.props;

    return (
      <Swiper onSwiped={this.onSwiped}>
        <TransitionGroup appear>
          <Transition
            key={`${id}-news-${direction}`}
            timeout={{
              enter: 100,
              exit: 200,
            }}
          >
            {status => (
              <Crutch
                {...this.props}
                status={status}
                date={date}
                logo={logo}
                title={title}
                description={description}
              />
            )}
          </Transition>
        </TransitionGroup>
      </Swiper>
    );
  }
}
