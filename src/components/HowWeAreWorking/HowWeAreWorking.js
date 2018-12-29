import React from "react";
import PropTypes from "prop-types";

import principles from "../../assets/principles";
import { Title, Paragraph, PrinciplesContainer, Principle, Badge, Link } from "./styles";

export const HowWeAreWorking = () => {
  return (
    <>
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
      <PrinciplesContainer>
        {principles.map(({ icon, title }) => (
          <Principle key={title}>
            <Badge style={{ backgroundImage: `url(${icon})` }} />
            <span>{title}</span>
          </Principle>
        ))}
      </PrinciplesContainer>
      <Link to="/work">Подробнее о работе в Everpoint</Link>
    </>
  );
};

HowWeAreWorking.propTypes = {
  component: PropTypes.bool,
};
