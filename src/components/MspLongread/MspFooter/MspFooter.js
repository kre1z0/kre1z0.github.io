import React from "react";

import { Article, H1 } from "../../LongreadAtoms/Longread";
import { GoNextLink } from "../../GoNextLink/GoNextLink";
import { AndroidStoreLink, IosStoreLink } from "../../StoreLinks/StoreLinks";
import phones from "../../../img/portfolio/msp/phones.jpg";

import styles, { PhonesContainer, Phones, Footer, Content, StoreContainer } from "./styles";

export const MspFooter = () => {
  return (
    <Footer as="footer">
      <Article>
        <Content>
          <H1 portfolio>
            Бизнес-навигатор МСП <br /> в вашем телефоне!
          </H1>
          <GoNextLink to="/mobileMsp" gatsby className={styles.goToMobileMspLink}>
            Подробнее
          </GoNextLink>
          <StoreContainer>
            <IosStoreLink
              href="https://itunes.apple.com/ru/developer/корпорация-мсп/id1253348895?mt=8"
              target="_blank"
            />
            <AndroidStoreLink
              href="https://play.google.com/store/apps/developer?id=АО+«Корпорация+«МСП»"
              target="_blank"
            />
          </StoreContainer>
        </Content>
      </Article>
      <PhonesContainer>
        <Phones src={phones} />
      </PhonesContainer>
    </Footer>
  );
};
