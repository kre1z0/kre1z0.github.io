import React, { PureComponent } from "react";

import { HeaderRightSide } from "../../components/GeomonitoringLongread/HeaderRightSide/HeaderRightSide";
import { LocalLink } from "../../components/LocalLink/LocalLink";
import { Section, Article, H1, Paragraph } from "../../components/LongreadAtoms/Longread";
import { Header } from "../../components/PortfolioLongread/Header";
import { getProject } from "../../routes";

import styles, { GeomonitoringContainer } from "../../styles/geomonitoring";

class Geomonitoring extends PureComponent {
  static defaultProps = {
    projectId: "geomonitoring",
  };

  render() {
    const { location, projectId } = this.props;
    const geomonitoring = getProject({ projectId });

    return (
      <GeomonitoringContainer>
        <Header
          projectId={projectId}
          location={location}
          leftSideClassName={styles.headerLeftSide}
          rightSide={<HeaderRightSide />}
          {...geomonitoring}
        />
        <Section>
          <Article>
            <H1 portfolio>Задачи геомониторинга</H1>
            <Paragraph small>
              Кредитование - одна из самых востребованных банковских услуг. С ростом числа кредитов
              увеличивается и объем залогового имущества, отслеживать состояние заложенной
              недвижимости и проводить переоценку ее стоимости становится все сложнее.
            </Paragraph>
            <Paragraph small>
              Помочь банкам в этом деле может корпоративное геоинформационное веб-приложение
              «Геомониторинг недвижимости». Эта аналитическая система управления залоговым
              имуществом разработана на базе нашей собственной{" "}
              <LocalLink to="evergis">ГИС-платформы EverGIS</LocalLink>.
            </Paragraph>
          </Article>
        </Section>
      </GeomonitoringContainer>
    );
  }
}

export default Geomonitoring;
