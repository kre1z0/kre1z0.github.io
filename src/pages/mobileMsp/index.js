import React, { PureComponent } from "react";

import { SectionWithIcon } from "../../components/MobileMspLongread/SectionWithIcon";
import phones from "../../img/portfolio/mobileMsp/phones.jpg";
import animation from "../../components/Transition/animation";
import { Header } from "../../components/PortfolioLongread/Header";
import { getProject } from "../../routes";
import { Section, Article, H2, Paragraph } from "../../components/LongreadAtoms/Longread";
import { AndroidStoreLink, IosStoreLink } from "../../components/StoreLinks/StoreLinks";
import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import styles, {
  MobileMspContainer,
  MobileMspStoreContainer,
  Phones,
} from "../../styles/mobileMsp";

class MobileMsp extends PureComponent {
  static defaultProps = {
    projectId: "mobileMsp",
  };

  render() {
    const { location, projectId } = this.props;
    const mobileMsp = getProject({ projectId });
    const { ios, android } = mobileMsp;

    return (
      <MobileMspContainer>
        <Header
          projectId={projectId}
          location={location}
          {...mobileMsp}
          lightNavy
          containerClassName={styles.mobileMspContainer}
          leftSideClassName={styles.mobileMspLeftSide}
          rightSideClassName={styles.mobileMspRightSide}
          leftSide={
            <MobileMspStoreContainer>
              <IosStoreLink href={ios} target="_blank" />
              <AndroidStoreLink href={android} target="_blank" />
            </MobileMspStoreContainer>
          }
        >
          <Phones src={phones} className={animation.fadeIn} />
        </Header>
        <Section>
          <Article>
            <H2>Мобильный бизнес-навигатор</H2>
            <Paragraph>
              Когда нужно срочно предоставить краткую информацию о запланированном бизнесе
              потенциальным бизнес-партнерам и инвесторам, на помощь придут мобильные приложения,
              разработанные Everpoint совместно с{" "}
              <OutsideLink href="https://mobileup.ru/business-navigator">MobileUp</OutsideLink> по
              заказу Корпорации по развитию малого и среднего предпринимательства.
            </Paragraph>
            <SectionWithIcon />
          </Article>
        </Section>
      </MobileMspContainer>
    );
  }
}

export default MobileMsp;
