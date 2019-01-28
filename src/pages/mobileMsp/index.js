import React, { PureComponent } from "react";

import { getPixelRatioPropName } from "../../utils/utils";
import { isMobile } from "../../utils/browser";
import { SectionWithIcon } from "../../components/MobileMspLongread/SectionWithIcon/SectionWithIcon";
import phones from "../../img/portfolio/mobileMsp/phones.jpg";
import animation from "../../components/Transition/animation";
import { Header } from "../../components/PortfolioLongread/Header";
import { getProject } from "../../routes";
import { Section, Article, H2, Paragraph } from "../../components/LongreadAtoms/Longread";
import { AndroidStoreLink, IosStoreLink } from "../../components/StoreLinks/StoreLinks";
import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import { BnSection } from "../../components/MobileMspLongread/BnSection/BnSection";
import { Footer } from "../../components/MobileMspLongread/Footer/Footer";
import styles, {
  MobileMspContainer,
  MobileMspStoreContainer,
  Phones,
} from "../../styles/mobileMsp";

class MobileMsp extends PureComponent {
  static defaultProps = {
    projectId: "mobileMsp",
  };

  state = {
    ratio: "x1",
    mobilePlatform: false,
  };

  componentDidMount() {
    this.setState({ ratio: getPixelRatioPropName(), mobilePlatform: isMobile() });
  }

  render() {
    const { ratio, mobilePlatform } = this.state;
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
          containerClassName={styles.mobileMspHeader}
          leftSideClassName={styles.mobileMspHeaderLeftSide}
          rightSideClassName={styles.mobileMspHeaderRightSide}
          leftSide={
            <MobileMspStoreContainer>
              <IosStoreLink href={ios} target="_blank" />
              <AndroidStoreLink href={android} target="_blank" />
            </MobileMspStoreContainer>
          }
        >
          <Phones src={phones} className={animation.fadeIn} />
        </Header>
        <Section withoutPaddingBottom>
          <Article>
            <H2 small>Мобильный бизнес-навигатор</H2>
            <Paragraph>
              Когда нужно срочно предоставить краткую информацию о запланированном бизнесе
              потенциальным бизнес-партнерам и инвесторам, на помощь придут мобильные приложения,
              разработанные Everpoint совместно с{" "}
              <OutsideLink href="https://mobileup.ru/business-navigator">MobileUp</OutsideLink> по
              заказу Корпорации по развитию малого и среднего предпринимательства.
            </Paragraph>
            <SectionWithIcon ratio={ratio} />
          </Article>
        </Section>
        <BnSection ratio={ratio} />
        <Footer ratio={ratio} mobilePlatform={mobilePlatform} />
      </MobileMspContainer>
    );
  }
}

export default MobileMsp;
