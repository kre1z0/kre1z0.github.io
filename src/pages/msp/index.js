import React, { PureComponent } from "react";

import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import { MspRightSide } from "../../components/MspRightSide/MspRightSide";
import { Header } from "../../components/PortfolioLongread/Header";
import { getProject } from "../../routes";
import { Section, Article, H1, Paragraph } from "../../components/LongreadAtoms/Longread";
import { TaglineAwards } from "../../components/TaglineAwards/TaglineAwards";
import { MspRegionMap } from "../../components/MspRegionMap/MspRegionMap";

// import styles from "../../styles/msp";

class Msp extends PureComponent {
  render() {
    const msp = getProject({ projectId: "msp" });
    const { link, achievements } = msp;

    return (
      <div>
        <Header {...msp} rightSide={<MspRightSide />} />
        <Section>
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
              </OutsideLink>
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
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolorum
              exercitationem harum, ipsa iste iure iusto magnam molestiae numquam odio quibusdam
              quidem totam vero voluptas? Cupiditate nobis optio soluta.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolorum
              exercitationem harum, ipsa iste iure iusto magnam molestiae numquam odio quibusdam
              quidem totam vero voluptas? Cupiditate nobis optio soluta.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolorum
              exercitationem harum, ipsa iste iure iusto magnam molestiae numquam odio quibusdam
              quidem totam vero voluptas? Cupiditate nobis optio soluta.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolorum
              exercitationem harum, ipsa iste iure iusto magnam molestiae numquam odio quibusdam
              quidem totam vero voluptas? Cupiditate nobis optio soluta.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolorum
              exercitationem harum, ipsa iste iure iusto magnam molestiae numquam odio quibusdam
              quidem totam vero voluptas? Cupiditate nobis optio soluta.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolorum
              exercitationem harum, ipsa iste iure iusto magnam molestiae numquam odio quibusdam
              quidem totam vero voluptas? Cupiditate nobis optio soluta.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolorum
              exercitationem harum, ipsa iste iure iusto magnam molestiae numquam odio quibusdam
              quidem totam vero voluptas? Cupiditate nobis optio soluta.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolorum
              exercitationem harum, ipsa iste iure iusto magnam molestiae numquam odio quibusdam
              quidem totam vero voluptas? Cupiditate nobis optio soluta.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolorum
              exercitationem harum, ipsa iste iure iusto magnam molestiae numquam odio quibusdam
              quidem totam vero voluptas? Cupiditate nobis optio soluta.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolorum
              exercitationem harum, ipsa iste iure iusto magnam molestiae numquam odio quibusdam
              quidem totam vero voluptas? Cupiditate nobis optio soluta.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolorum
              exercitationem harum, ipsa iste iure iusto magnam molestiae numquam odio quibusdam
              quidem totam vero voluptas? Cupiditate nobis optio soluta.
            </Paragraph>
          </Article>
        </Section>
      </div>
    );
  }
}

export default Msp;
