import React from "react";

import { ReactComponent as Ic1 } from "../../../img/portfolio/geomonitoring/icons/ic-1.svg";
import { ReactComponent as Ic2 } from "../../../img/portfolio/geomonitoring/icons/ic-2.svg";
import { ReactComponent as Ic3 } from "../../../img/portfolio/geomonitoring/icons/ic-3.svg";
import { ReactComponent as Ic4 } from "../../../img/portfolio/geomonitoring/icons/ic-4.svg";
import { ReactComponent as Ic5 } from "../../../img/portfolio/geomonitoring/icons/ic-5.svg";
import { ReactComponent as Ic6 } from "../../../img/portfolio/geomonitoring/icons/ic-6.svg";
import { Paragraph } from "../../../components/LongreadAtoms/Longread";
import { TasksIconsBlockContainer, Task } from "./styles";

export const TasksIconsBlock = () => {
  return (
    <TasksIconsBlockContainer>
      <Task>
        <Ic1 />
        <Paragraph>Оценка стоимости с помощью подбора аналогов</Paragraph>
      </Task>
      <Task>
        <Ic2 />
        <Paragraph>Планирование выездного мониторинга с учётом местоположения объектов</Paragraph>
      </Task>
      <Task>
        <Ic3 />
        <Paragraph>Интерактивная карта объектов со статусами проверок</Paragraph>
      </Task>
      <Task>
        <Ic4 />
        <Paragraph>Простые формы проверки объектов через планшет</Paragraph>
      </Task>
      <Task>
        <Ic5 />
        <Paragraph>Контроль работы сотрудников в онлайн-режиме</Paragraph>
      </Task>
      <Task>
        <Ic6 />
        <Paragraph>Аналитика по залоговому портфелю</Paragraph>
      </Task>
    </TasksIconsBlockContainer>
  );
};
