import React, { PureComponent } from "react";

import { HeaderRightSide } from "../../components/GeomonitoringLongread/HeaderRightSide/HeaderRightSide";
import { LocalLink } from "../../components/LocalLink/LocalLink";
import { UnorderedList } from "../../components/LongreadAtoms/UnorderedList";
import { Section, Article, H1, H3, Paragraph } from "../../components/LongreadAtoms/Longread";
import { TelegramButton } from "../../components/Buttons/TelegramButton";
import { Header } from "../../components/PortfolioLongread/Header";
import { Figures } from "../../components/Figures/Figures";
import { getProject } from "../../routes";

import { ReactComponent as Ic1 } from "../../img/portfolio/geomonitoring/icons/ic-1.svg";
import { ReactComponent as Ic2 } from "../../img/portfolio/geomonitoring/icons/ic-2.svg";
import { ReactComponent as Ic3 } from "../../img/portfolio/geomonitoring/icons/ic-3.svg";
import { ReactComponent as Ic4 } from "../../img/portfolio/geomonitoring/icons/ic-4.svg";
import { ReactComponent as Ic5 } from "../../img/portfolio/geomonitoring/icons/ic-5.svg";
import { ReactComponent as Ic6 } from "../../img/portfolio/geomonitoring/icons/ic-6.svg";

import screenshot1 from "../../img/portfolio/geomonitoring/bank-1.png";
import screenshot2 from "../../img/portfolio/geomonitoring/bank-2.png";
import screenshot3 from "../../img/portfolio/geomonitoring/bank-3.png";
import screenshot4 from "../../img/portfolio/geomonitoring/bank-4.png";
import screenshot5 from "../../img/portfolio/geomonitoring/bank-5.png";
import screenshot6 from "../../img/portfolio/geomonitoring/bank-6.png";

import layer1 from "../../img/portfolio/geomonitoring/map.png";
import layer2 from "../../img/portfolio/geomonitoring/app.png";
import cardLeft from "../../img/portfolio/geomonitoring/cards/leftCard.png";
import cardRight from "../../img/portfolio/geomonitoring/cards/rightCard.png";
import cardBottom from "../../img/portfolio/geomonitoring/cards/bottomCard.png";

import styles, { GeomonitoringContainer, Screenshot, Footer } from "../../styles/geomonitoring";

const images = [layer1, layer2, cardLeft, cardRight, cardBottom];

const tasks = [
  { Icon: Ic1, text: "Оценка стоимости с помощью подбора аналогов" },
  { Icon: Ic2, text: "Планирование выездного мониторинга с учётом местоположения объектов" },
  { Icon: Ic3, text: "Интерактивная карта объектов со статусами проверок" },
  { Icon: Ic4, text: "Простые формы проверки объектов через планшет" },
  { Icon: Ic5, text: "Контроль работы сотрудников в онлайн-режиме" },
  { Icon: Ic6, text: "Аналитика по залоговому портфелю" },
];

class Geomonitoring extends PureComponent {
  static defaultProps = {
    projectId: "geomonitoring",
  };

  state = {
    animate: false,
  };

  render() {
    const { animate } = this.state;
    const { location, projectId } = this.props;
    const geomonitoring = getProject({ projectId });

    return (
      <>
        <Header
          images={images}
          onLoad={() => this.setState({ animate: true })}
          animate={animate}
          projectId={projectId}
          location={location}
          leftSideClassName={styles.headerLeftSide}
          rightSideClassName={styles.headerRightSide}
          rightSide={<HeaderRightSide animate={animate} images={images} />}
          {...geomonitoring}
        />
        <GeomonitoringContainer>
          <Section withoutPaddingBottom>
            <Article>
              <H1 portfolio>Задачи геомониторинга</H1>
              <Paragraph>
                Кредитование - одна из самых востребованных банковских услуг. С ростом числа
                кредитов увеличивается и объем залогового имущества, отслеживать состояние
                заложенной недвижимости и проводить переоценку ее стоимости становится все сложнее.
              </Paragraph>
              <Paragraph>
                Помочь банкам в этом деле может корпоративное геоинформационное веб-приложение
                «Геомониторинг недвижимости». Эта аналитическая система управления залоговым
                имуществом разработана на базе нашей собственной{" "}
                <LocalLink to="evergis">ГИС-платформы EverGIS</LocalLink>.
              </Paragraph>
            </Article>
          </Section>
          <Section withoutPaddingBottom>
            <Article>
              <Figures figures={tasks} />
            </Article>
          </Section>
          <Section>
            <Article>
              <H1 portfolio>Функции системы</H1>
              <Paragraph>
                Система значительно облегчает работу сотрудников, занимающихся выездным мониторингом
                залоговой недвижимости, и повышает эффективность труда. Единая электронная база
                залогов гарантирует точность и полноту данных. Руководители и сотрудники из разных
                банковских подразделений могут обмениваться информацией онлайн. Система позволяет
                руководству оперативно принимать решения, например, о клиентах, у которых возникли
                проблемы с выплатой кредита.
              </Paragraph>
              <H3>Планирование выездных проверок</H3>
              <Screenshot src={screenshot1} alt="screenshot-1" />
              <Paragraph>
                За несколько секунд система автоматически составляет план выездных проверок,
                учитывая множество факторов:
              </Paragraph>
              <UnorderedList azure>
                <li>Расположение объектов</li>
                <li>Время на дорогу до них и обратно</li>
                <li>Требования к периодичности проверок</li>
                <li>Нормативы выполнения сотрудниками банка различных видов работ</li>
                <li>Характеристики объектов недвижимости, например, тип и площадь</li>
              </UnorderedList>
              <Paragraph>
                Руководство банка получает перечень задач для сотрудников, включая маршруты движения
                между объектами залога, а также сводный график работ с указанием ответственных.
              </Paragraph>
              <H3>Мониторинг объектов и сотрудников</H3>
              <Screenshot style={{ borderRadius: "1.4rem" }} src={screenshot2} alt="screenshot-2" />
              <Paragraph>
                Система позволяет руководителям следить онлайн за тем, как сотрудники банка
                соблюдают предложенный системой график: они должны отмечать свои передвижения в
                веб-приложении. Там же фиксируются и результаты мониторинга объекта недвижимости.
                Для ускорения этого процесса мы разработали краткие чек-листы с ключевыми
                требованиями к эксплуатации объектов залога. Также результаты мониторинга сотрудник
                может дополнить фотографиями объекта и своими комментариями.
              </Paragraph>
              <H3>Оценка стоимости имущества</H3>
              <Screenshot src={screenshot3} alt="screenshot-3" />
              <Paragraph>
                Оценить стоимость имущества поможет функция системы по поиску объектов-аналогов и
                сравнению их с объектом залога. Система ищет аналоги в соответствии с
                местоположением залога и характеристиками объектов. При этом радиус поиска аналогов
                либо задается пользователем, либо определяется системой автоматически в зависимости
                от свойств залога.
              </Paragraph>
              <Paragraph>
                Система сравнивает найденные аналоги с залогом и автоматически рассчитывает
                потенциальную залоговую стоимость. Результаты оценки сохраняются в карточку
                мониторинга объекта и обновляются в базе залогов банка.
              </Paragraph>
              <H3>Все залоги на одной карте</H3>
              <Screenshot src={screenshot4} alt="screenshot-4" />
              <Paragraph>
                В приложении все залоги банка представлены на интерактивной карте. На карте наглядно
                показаны результаты последнего мониторинга по каждому объекту нежвижимости: можно
                увидеть, на каких объектах и с какими клиентами возникли проблемы; оценить работу
                конкретного сотрудника, выведя на карту только его объекты; оценить соотношение
                различных видов недвижимости в залоговом портфеле. Информацию по объектам залога
                можно посмотреть и в виде онлайн-таблицы.
              </Paragraph>
              <H3>Аналитика и отчёты</H3>
              <Screenshot src={screenshot5} alt="screenshot-5" />
              <Paragraph>
                Накапливаемые в системе данные анализируются в различных разрезах, результаты
                анализа можно представить в виде диаграмм и графиков, а также выгрузить в виде
                отчетов в формате Excel. Состав отчётов зависит от потребностей конкретного банка.
                Гибкость базовой ГИС-платформы позволяет подключать новые источники данных и
                наращивать аналитический функционал.
              </Paragraph>
            </Article>
          </Section>
          <Section className={styles.firstExperienceSection}>
            <Article>
              <H1 portfolio>Первый опыт внедрения</H1>
              <Paragraph>
                Система работает в пилотном режиме в отделениях «Сбербанка» в пяти городах и уже
                зарекомендовала себя хорошо. Так, временные затраты значительно сократились.
                Например, на подготовку плана мониторинга у одного территориального отделения банка
                вместо нескольких дней уходит пара секунд, а отчет о проверке веб-приложение
                формирует автоматически. Выездная проверка одного объекта и подготовка документов
                для нее занимает на несколько часов меньше. И конечно, у банка появилась возможность
                контролировать перемещения сотрудников.
              </Paragraph>
              <Screenshot src={screenshot6} alt="screenshot-6" />
            </Article>
          </Section>
          <Section className={styles.whatIsHeDoing}>
            <Article>
              <Paragraph>
                Аналитическая система управления залоговым имуществом «Геомониторинг недвижимости»
                решает сразу несколько задач. Используя программные алгоритмы, она автоматизирует
                работу банков, помогает наладить диалог между клиентом и банком, а также
                контролирует работу сотрудников на выезде. Это повышает эффективность работы банка и
                минимизирует затраты.
              </Paragraph>
            </Article>
          </Section>
          <Footer>
            <H3>Хотите такую систему? Есть похожая задача? Напишите нам в чат, отвечаем быстро!</H3>
            <TelegramButton className={styles.telegramBtn} />
          </Footer>
        </GeomonitoringContainer>
      </>
    );
  }
}

export default Geomonitoring;
