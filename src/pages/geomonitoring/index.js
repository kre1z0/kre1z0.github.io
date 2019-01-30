import React, { PureComponent } from "react";

import { HeaderRightSide } from "../../components/GeomonitoringLongread/HeaderRightSide/HeaderRightSide";
import { LocalLink } from "../../components/LocalLink/LocalLink";
import { UnorderedList } from "../../components/LongreadAtoms/UnorderedList";
import { Section, Article, H1, H3, Paragraph } from "../../components/LongreadAtoms/Longread";
import { TelegramButton } from "../../components/Buttons/TelegramButton";
import { Header } from "../../components/PortfolioLongread/Header";
import { TasksIconsBlock } from "../../components/GeomonitoringLongread/TasksIconsBlock/TasksIconsBlock";
import { getProject } from "../../routes";
import screenshot1 from "../../img/portfolio/geomonitoring/bank-1.png";
import screenshot2 from "../../img/portfolio/geomonitoring/bank-2.png";
import screenshot3 from "../../img/portfolio/geomonitoring/bank-3.png";
import screenshot4 from "../../img/portfolio/geomonitoring/bank-4.png";
import screenshot5 from "../../img/portfolio/geomonitoring/bank-5.png";
import screenshot6 from "../../img/portfolio/geomonitoring/bank-6.png";

import styles, { GeomonitoringContainer, Screenshot, Footer } from "../../styles/geomonitoring";

class Geomonitoring extends PureComponent {
  static defaultProps = {
    projectId: "geomonitoring",
  };

  render() {
    const { location, projectId } = this.props;
    const geomonitoring = getProject({ projectId });

    return (
      <>
        <Header
          projectId={projectId}
          location={location}
          leftSideClassName={styles.headerLeftSide}
          rightSideClassName={styles.headerRightSide}
          rightSide={<HeaderRightSide />}
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
              <TasksIconsBlock />
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
              <Screenshot src={screenshot1} alt="screenshot-1" />
              <H3>Планирование выездных проверок</H3>
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
              <Screenshot style={{ borderRadius: "1.4rem" }} src={screenshot2} alt="screenshot-2" />
              <H3>Мониторинг объектов и сотрудников</H3>
              <Paragraph>
                Система позволяет руководителям следить онлайн за тем, как сотрудники банка
                соблюдают предложенный системой график: они должны отмечать свои передвижения в
                веб-приложении. Там же фиксируются и результаты мониторинга объекта недвижимости.
                Для ускорения этого процесса мы разработали краткие чек-листы с ключевыми
                требованиями к эксплуатации объектов залога. Также результаты мониторинга сотрудник
                может дополнить фотографиями объекта и своими комментариями.
              </Paragraph>
              <Screenshot src={screenshot3} alt="screenshot-3" />
              <H3>Оценка стоимости имущества</H3>
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
              <Screenshot src={screenshot4} alt="screenshot-4" />
              <H3>Все залоги на одной карте</H3>
              <Paragraph>
                В приложении все залоги банка представлены на интерактивной карте. На карте наглядно
                показаны результаты последнего мониторинга по каждому объекту нежвижимости: можно
                увидеть, на каких объектах и с какими клиентами возникли проблемы; оценить работу
                конкретного сотрудника, выведя на карту только его объекты; оценить соотношение
                различных видов недвижимости в залоговом портфеле. Информацию по объектам залога
                можно посмотреть и в виде онлайн-таблицы.
              </Paragraph>
              <Screenshot src={screenshot5} alt="screenshot-5" />
              <H3>Аналитика и отчёты</H3>
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
