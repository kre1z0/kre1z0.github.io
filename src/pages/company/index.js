import React, { PureComponent } from "react";

import { getPixelRatioPropName } from "../../utils/utils";
import { TelegramButton } from "../../components/Buttons/TelegramButton";
import { Section } from '../../components/Elements/Section';
import { Article } from '../../components/Elements/Article';
import { H2 } from "../../components/Typography/Headlines";
import { Paragraph } from '../../components/Typography/Paragraph';
import { CompanyPhoto } from "../../components/CompanyPhoto/CompanyPhoto";
import employees from "../../assets/employees";
import { OurClients } from "../../components/OurClients/OurClients";
import { Development } from "../../components/Development/Development";
import development from "../../assets/development";
import ourClients from "../../assets/our-clients";

import styles, { CompanyContainer, Footer, ChatRow } from "../../styles/company";

class Company extends PureComponent {
  render() {
    return (
      <CompanyContainer>
        <CompanyPhoto
          title="Everpoint - это мы!"
          // add designer photo
          items={employees
            .filter(({ id }) => id !== "8")
            .map(({ portret, id }) => ({ avatar: portret[getPixelRatioPropName()], id }))}
        />
        <Section>
          <Article>
            <H2>Кто мы</H2>
            <Paragraph>
              Мы создали компанию Everpoint, чтобы помогать нашим клиентам развивать бизнес, города
              и регионы, решать простые повседневные задачи и сложные пространственные головоломки с
              помощью геоаналитики. Наш основной продукт — геоинформационная платформа EverGIS. Она
              предназначена для хранения, отображения и анализа геоданных.
            </Paragraph>
            <Paragraph big>
              Что такое геоданные? Это информация о географическом местоположении объектов -
              координатах, и их дополнительных характеристиках - атрибутах.
            </Paragraph>
            <Paragraph big>
              Различные инструменты пространственного анализа, которые есть в EverGIS, позволяют
              подбирать место для открытия бизнеса; проводить экономический анализ районов, городов,
              стран; анализировать природные явления; планировать развитие городской среды;
              контролировать освоение недр, например, нефтегазовых промыслов, и много другое.
            </Paragraph>
          </Article>
        </Section>
        <Section className={styles.whatAreWeDoing}>
          <Article>
            <H2>Что мы делаем</H2>
            <Paragraph big>
              Платформа EverGIS - это ядро, на базе которого мы разрабатываем и внедряем
              профессиональные корпоративные геоинформационные системы (ГИС), геомаркетинговые
              решения, системы мониторинга геообъектов, публичные геосервисы и геопорталы.
            </Paragraph>
            <Paragraph big>
              Мы убеждены, что за геоаналитикой будущее и она должна быть доступна каждому. В начале
              2019 года мы выпустили собственный открытый геосервис EverGIS Online - абсолютно
              бесплатный, работает в браузере, не требует специальных навыков. С помощью EverGIS
              Online любой человек может создать собственную интерактивную карту и поделиться ею в
              сети.
            </Paragraph>
          </Article>
        </Section>
        <Section className={styles.ourClients}>
          <Article>
            <H2>Наши клиенты</H2>
            <Paragraph big>
              Мы не боимся браться за сложные задачи. Наша команда увлечена веб-картографией и
              геомаркетингом, но мы постоянно исследуем новые сферы применения геоаналитики и
              становимся экспертами в новых областях. Каждый реализованный проект помогает нам
              развивать свою ГИС-платформу и совершенствовать те продукты и решения, которые
              предлагаем клиентам.
            </Paragraph>
            <Paragraph big>
              Наши клиенты - банки, нефтегазовые компании, государственные организации,
              телекоммуникационные корпорации, федеральные сети магазинов, застройщики и агентства
              недвижимости. Среди них Газпром нефть, Сбербанк, Федеральная корпорация по развитию
              малого и среднего предпринимательства, Правительство Москвы, Институт экологического
              проектироваия и изысканий.
            </Paragraph>
          </Article>
        </Section>
        <Section className={styles.ourClientsLogos}>
          <OurClients items={ourClients} />
        </Section>
        <Section className={styles.development}>
          <Article>
            <H2>Развитие</H2>
          </Article>
        </Section>
        <Development items={development} />
        <Footer as="footer">
          <Article>
            <Paragraph big>
              Мы занимаемся картографическими и геомаркетинговыми сервисами уже более 10 лет и за
              это время мы научились масштабу — мыслить горизонтами не на месяц или квартал, а на
              3-5 лет вперед. Everpoint - это профессиональная команда с большим опытом внедрения
              ГИС в разных отраслях. Мы открыты для общения, готовы помочь и рады сотрудничеству.
            </Paragraph>
          </Article>
          <ChatRow>
            <Paragraph big>Есть задача? Напишите нам в чат, отвечаем быстро!</Paragraph>
            <TelegramButton className={styles.companyTelegramBtn} />
          </ChatRow>
        </Footer>
      </CompanyContainer>
    );
  }
}

export default Company;
