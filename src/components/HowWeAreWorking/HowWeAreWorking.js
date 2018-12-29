import React from "react";
import PropTypes from "prop-types";

import { Title, Paragraph } from "./styles";

export const HowWeAreWorking = () => {
  return (
    <div>
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
    </div>
  );
};

HowWeAreWorking.propTypes = {
  component: PropTypes.bool,
};
