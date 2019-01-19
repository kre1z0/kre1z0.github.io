import React, { PureComponent } from "react";

import { Scrollbar } from "../../components/Scrollbar/Scrollbar";
import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import { MspRightSide } from "../../components/MspRightSide/MspRightSide";
import { Header } from "../../components/PortfolioLongread/Header";
import { Paragraph } from "../../components/PortfolioLongread/Paragraph";
import { getProject } from "../../routes";
import { Section, Article, H1 } from "../../components/LongreadAtoms/Longread";
import { TaglineAwards } from "../../components/TaglineAwards/TaglineAwards";
import { MspRegionMap } from "../../components/MspRegionMap/MspRegionMap";
import { MspVideo } from "../../components/MspVideo/MspVideo";
import { VideoContainer } from "../../components/LongreadAtoms/VideoContainer";
import { InViewVideo } from "../../components/Video/InViewVideo";
import { UnorderedList } from "../../components/LongreadAtoms/UnorderedList";
import { Selector } from "../../components/Selector/Selector";
import step2Video from "../../videos/msp/2.webm";
import step3Video from "../../videos/msp/3.webm";
import step4Video from "../../videos/msp/4.webm";
import step5Video from "../../videos/msp/5.webm";

import styles, { Step } from "../../styles/msp";

class Msp extends PureComponent {
  state = {
    selectedVideoIndex: 0,
  };

  render() {
    const { selectedVideoIndex } = this.state;
    const msp = getProject({ projectId: "msp" });
    const { link, achievements, videos } = msp;

    return (
      <div>
        <Header {...msp} rightSide={<MspRightSide />} />
        <Section withoutPaddingBottom>
          <Article>
            <H1 portfolio>Предыстория</H1>
            <Paragraph>
              Развитие малого и среднего бизнеса в России идет очень активно. Для помощи Корпорации
              МСП, занимающейся вопросами поддержки начинающих и действующих предпринимателей, мы
              разработали геомаркетинговый сервис «
              <OutsideLink href={link}>Бизнес-навигатор МСП</OutsideLink>».
            </Paragraph>
            <Paragraph>
              В 2018 году сервис получил премию{" "}
              <OutsideLink href="https://tagline.ru/cases/razrabotka-veb-servisa-dlya-poiska-mesta-dlya-biznesa-i-rascheta-biznes-plana--biznes-navigator-msp/">
                Tagline Awards
              </OutsideLink>{" "}
              - 3 место в категории лучший инновационный сервис и лучший сервис для
              digital-маркетинга.
            </Paragraph>
            <TaglineAwards />
            <Paragraph>
              Сервис абсолютно бесплатный. Он разработан на базе нашей современной
              многофункциональной веб-платформы EverGIS. Сервис помогает найти наиболее
              привлекательное местоположение для открытия бизнеса в конкретном городе и рассчитать
              примерный бизнес-план. Учитывает отраслевую принадлежность бизнеса, рыночную нишу,
              конкурентное окружение, характеристики спроса и предложения на выбранной территории,
              доступные объекты коммерческой, государственной и муниципальной недвижимости для
              размещения бизнеса.
            </Paragraph>
            <MspRegionMap achievements={achievements} />
          </Article>
          <Article>
            <H1 portfolio>Работа в системе «Бизнес-навигатор МСП»</H1>
            <Paragraph>
              Воспользоваться сервисом могут как начинающие предприниматели, так и действующие
              бизнесмены. Работать с «Бизнес-навигатором МСП» можно в браузере и в мобильном
              приложении. Получить детализированный типовой бизнес-план возможно после выполнения 5
              простых шагов.
            </Paragraph>
          </Article>
        </Section>
        <Section withoutPaddingBottom>
          <Article>
            <MspVideo selectedVideoIndex={selectedVideoIndex} videos={videos} />
            <Step>
              <span>Шаг 1</span>Выбор территории для ведения бизнеса
            </Step>
            <UnorderedList aria-label="Сначала пользователь должен выбрать:">
              <li>Город, в котором собирается открывать или развивать бизнес</li>
              <li>Одну из 103 отраслевых концепций бизнеса из каталога сервиса</li>
            </UnorderedList>
            <UnorderedList aria-label="Сначала пользователь должен выбрать:" />
            <Paragraph>
              Карта привлекательности районов города для открытия малого бизнеса покажет начинающим
              предпринимателям, в каком районе, какой вид бизнеса более востребован.
            </Paragraph>
          </Article>
        </Section>
        <Section className={styles.selectorSection}>
          <Scrollbar>
            <Selector
              className={styles.selectorContainer}
              items={videos}
              selectedIndex={selectedVideoIndex}
              onChange={index => this.setState({ selectedVideoIndex: index })}
            />
          </Scrollbar>
        </Section>
        <Section withoutPaddingTop withoutPaddingBottom>
          <Article>
            <Paragraph>
              Карта привлекательности районов города для открытия малого бизнеса покажет начинающим
              предпринимателям, в каком районе, какой вид бизнеса более востребован.
            </Paragraph>
          </Article>
        </Section>
        <Section withoutPaddingBottom>
          <Article>
            <VideoContainer>{/*<InViewVideo source={step2Video} />*/}</VideoContainer>
            <Step>
              <span>Шаг 2</span>Выбор месторасположения бизнеса по параметрам
            </Step>
            <Paragraph>Следующий шаг - выбор месторасположения бизнеса.</Paragraph>
            <Paragraph>
              Пользователь может посмотреть на карте потенциальных конкурентов, предложения по
              продаже и покупке недвижимости: государственной и коммерческой.
            </Paragraph>
          </Article>
        </Section>
        <Section withoutPaddingBottom>
          <Article>
            <VideoContainer>{/*<InViewVideo source={step3Video} />*/}</VideoContainer>
            <Step>
              <span>Шаг 3</span>Расчет зон влияния и конкуренции
            </Step>
            <Paragraph>
              Пользователь выбирает зинтересовавшие его место на карте, оценивает территорию.
            </Paragraph>
            <Paragraph>
              Система строит зоны влияния и конкуренции, оценивает спрос и предложение, показывает
              прямых и косвенных конкурентов, разделяя их на сетевых и несетевых.
            </Paragraph>
            <Paragraph>
              Сервис также предупредит о нерентабельности бизнеса в выбранном месте. На этом этапе
              местоположение можно изменить.
            </Paragraph>
          </Article>
        </Section>
        <Section withoutPaddingBottom>
          <Article>
            <VideoContainer>{/*<InViewVideo source={step4Video} />*/}</VideoContainer>
            <Step>
              <span>Шаг 4</span>Изучение характеристик рыночной ниши
            </Step>
            <Paragraph>
              "Бизнес-навигатор МСП" позволяет изучить характеристики рыночной ниши в выбранной
              локации: структуру постоянно проживающего населения и дневного пешего потока (офисные
              служащие), структуру потребления конкретной услуги или товара.
            </Paragraph>
            <Paragraph>
              Например, показатели среднего чека, количество офичных служащих и бизнес-центров,
              информацию о доходах.
            </Paragraph>
          </Article>
        </Section>
        <Section>
          <Article>
            <VideoContainer>{/*<InViewVideo source={step5Video} />*/}</VideoContainer>
            <Step>
              <span>Шаг 5</span>Расчёт бизнес-плана
            </Step>
            <Paragraph>
              На этом шаге сервис автоматически формирует детальный типовой бизнес-план открытия
              бизнеса в выбранном месте. Его можно скачат в PDF и Excel. Полученный документ в PDF
              можно без изменений направить в "МСП Банк" в составе заявки на кредит на льготных
              условиях.
            </Paragraph>
          </Article>
        </Section>
        <Section className={styles.analyticSection}>
          <Article>ggwp</Article>
        </Section>
      </div>
    );
  }
}

export default Msp;
