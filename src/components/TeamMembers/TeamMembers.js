import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import noVacancy from "../../img/vacancy/no-vacancy.svg";
import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import { TeamMemberCard } from "../../components/TeamMemberCard/TeamMemberCard";
import { getVacancyAvatarByType } from "./getVacancyAvatarByType";
import { TeamMembersContainer, NoVacancyDescription, PhotoContainer } from "./styles";

function getColumns({ items, id, onSectionChange }) {
  const newArray = items.slice();

  if (id === "employees") {
    newArray.push({
      avatar: noVacancy,
      name: "Стать частью </br> команды",
      id: "nobody",
      control: (
        <GoNextLink onClick={() => onSectionChange({ id: "vacancy", isClickEvent: true })}>
          Наши вакансии
        </GoNextLink>
      ),
    });
  }

  const firstCol = [];
  const lastCol = [];
  newArray.forEach((item, i) => (i % 2 ? lastCol.push(item) : firstCol.push(item)));
  return firstCol.concat(lastCol);
}

export class TeamMembers extends PureComponent {
  static propTypes = {
    items: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.arrayOf(PropTypes.string),
    ]),
    id: PropTypes.string.isRequired,
    onSectionChange: PropTypes.func,
    selectedId: PropTypes.string,
    className: PropTypes.string,
  };

  state = {
    cardHeight: 320,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  static defaultProps = {
    items: [],
  };

  onResize = () => {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewportWidth <= 1024) {
      this.setState({ cardHeight: 297 });
    } else {
      this.setState({ cardHeight: 320 });
    }
  };

  render() {
    const { cardHeight } = this.state;
    const { items, id, children, onSectionChange, className, selectedId } = this.props;
    const isVisible = id === selectedId;

    const isPhoto = id === "photo";
    const data = getColumns({ items, id, onSectionChange });
    const height = isPhoto ? 225 : cardHeight;
    const top = height / 2;
    const margin = 30;
    const half = Math.round(data.length / 2);
    const containerHeight = height * half + margin * half + (data.length % 2 ? 0 : 160);

    const noVacancies = id === "vacancy" && items.length === 0;

    if (children) {
      return (
        <TeamMembersContainer className={className} isVisible={isVisible}>
          {children}
        </TeamMembersContainer>
      );
    }

    return (
      <TeamMembersContainer
        isVisible={isVisible}
        oneItem={data.length <= 1}
        style={{ height: containerHeight + "px" }}
      >
        {noVacancies ? (
          <TeamMemberCard
            height={cardHeight * 1.1718}
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
          data.map((item, index) => {
            if (isPhoto) {
              const key = `photo-${index + 1}`;
              return (
                <PhotoContainer
                  style={{ marginTop: index === half && top, height, marginBottom: margin }}
                  key={key}
                >
                  <img src={item} alt={key} />
                </PhotoContainer>
              );
            }

            return (
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
            );
          })
        )}
      </TeamMembersContainer>
    );
  }
}
