import React from "react";
import PropTypes from "prop-types";

import {
  HowWeAreWorkingContainer,
  Title,
  Paragraph,
  PrinciplesContainer,
  Principle,
  Badge,
  HowWeAreWorkingLink,
} from "./styles";

export const HowWeAreWorking = ({ items, className }) => {
  return (
    <HowWeAreWorkingContainer className={className}>
      <Title>Как мы работаем</Title>
      <Paragraph>
        Мы считаем, что успех любого дела зависит от команды, поэтому создали атмосферу, комфортную
        для сотрудников.
        <br />
        <br />
        Стараемся давать задачи подходящего уровня, но если сотрудник хочет прыгнуть выше своей
        головы — команда ему поможет.
        <br />
        <br />
        Каждый член команды — это человек, с которым приятно работать.
      </Paragraph>
      <br />
      <Title>Наши принципы:</Title>
      {items && (
        <PrinciplesContainer>
          {items.map(({ icon, title }) => (
            <Principle key={title}>
              <Badge style={{ backgroundImage: `url(${icon})` }} />
              <span>{title}</span>
            </Principle>
          ))}
        </PrinciplesContainer>
      )}
      <HowWeAreWorkingLink to="/work">Подробнее о работе в Everpoint</HowWeAreWorkingLink>
    </HowWeAreWorkingContainer>
  );
};

HowWeAreWorking.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};
