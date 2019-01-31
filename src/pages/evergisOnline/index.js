import React, { PureComponent } from "react";

import { Header } from "../../components/PortfolioLongread/Header";
import { getProject } from "../../routes";
import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import { Section, Article, Paragraph } from "../../components/LongreadAtoms/Longread";
import { Figures } from "../../components/Figures/Figures";

import { ReactComponent as Ic1 } from "../../img/portfolio/evergis-online/features-icons/ic-1.svg";
import { ReactComponent as Ic2 } from "../../img/portfolio/evergis-online/features-icons/ic-2.svg";
import { ReactComponent as Ic3 } from "../../img/portfolio/evergis-online/features-icons/ic-3.svg";
import { ReactComponent as Ic4 } from "../../img/portfolio/evergis-online/features-icons/ic-4.svg";
import { ReactComponent as Ic5 } from "../../img/portfolio/evergis-online/features-icons/ic-5.svg";
import { ReactComponent as Ic6 } from "../../img/portfolio/evergis-online/features-icons/ic-6.svg";

import { EvergisOnlineContainer, FiguresTitle } from "../../styles/evergisOnline";

const justDoIt = [
  { Icon: Ic1, text: "Создавайте веб-карты" },
  { Icon: Ic2, text: "Анализируйте географические данные" },
  { Icon: Ic3, text: "Делитесь результатами с друзьями и коллегами" },
  { Icon: Ic4, text: "Открытый и бесплатный сервис" },
  { Icon: Ic5, text: "Работает через браузер" },
  { Icon: Ic6, text: "Не требует специальных навыков" },
];

class EvergisOnline extends PureComponent {
  static defaultProps = {
    projectId: "evergisOnline",
  };

  render() {
    const { location, projectId } = this.props;
    const evergisOnline = getProject({ projectId });

    return (
      <>
        <Header projectId={projectId} location={location} {...evergisOnline} />
        <EvergisOnlineContainer>
          <Section>
            <Article>
              <Paragraph>
                <OutsideLink>EverGIS Online</OutsideLink> — это картографический сервис, который
                позволяет оценить местность по различным параметрам. Он будет полезен тем, кто хочет
                открыть бизнес и планирует провести экономический анализ территории в масштабах
                района, города или целой страны. Тем, кто проводит социологические исследования и
                заинтересован в гибком анализе социальных изменений конкретных территорий. Тем, кто
                изучает природные явления. И даже для тех, кто занимается развитием и обновлением
                городской среды и заинтересован в детальном изучении транспортной сети перед
                проектированием новой дороги или объектов инфраструктуры у нового жилого дома.
              </Paragraph>
              <FiguresTitle>
                Как использовать возможности карты в сервисе EverGIS Online — решать только вам!
              </FiguresTitle>
              <Figures figures={justDoIt} />
            </Article>
          </Section>
        </EvergisOnlineContainer>
      </>
    );
  }
}

export default EvergisOnline;
