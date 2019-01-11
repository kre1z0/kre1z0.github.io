import styled, { css } from "astroturf";

import { Section } from "../components/LongreadAtoms/Longread";

export const CompanyContainer = styled("main")``;

export const Footer = styled(Section)`
  padding-top: 5.3571rem;
  padding-bottom: 3.1428rem;
  background-color: #90c53d;
  background-image: url(../img/backgrounds/companyFooter.png);
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  color: #fff;
  @media (max-width: 992px) {
    padding-top: 4.2857rem;
  }
  @media (max-width: 768px) {
    padding-top: 2.1428rem;
    padding-bottom: 1.4428rem;
  }
`;

export const ChatRow = styled("div")`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  p {
    padding: 0;
    margin: 0;
  }
  @media (max-width: 1200px) {
    position: relative;
    left: 4rem;
  }
  @media (max-width: 768px) {
    padding-top: 2rem;
    left: auto;
  }
`;

const styles = css`
  .whoAreWe {
    padding-top: 10rem;
    padding-bottom: 10rem;
    @media (max-width: 992px) {
      padding-top: 7.1428rem;
      padding-bottom: 4.5714rem;
    }
    @media (max-width: 768px) {
      padding-top: 5rem;
    }
    @media (max-width: 576px) {
      padding-top: 3.5714rem;
      padding-bottom: 2.2857rem;
    }
    @media (max-width: 440px) {
      padding-top: 2.5rem;
      padding-bottom: 1.7142rem;
    }
  }
  .whatAreWeDoing {
    padding-top: 7.4285rem;
    padding-bottom: 6.8571rem;
    color: #fff;
    background: url(../img/backgrounds/whatAreWeDoing.png) top no-repeat,
      linear-gradient(to bottom, #19191d, #3c3b41),
      linear-gradient(to bottom, rgba(0, 170, 255, 0.05), rgba(0, 170, 255, 0.05));
    background-size: contain;
    @media (max-width: 992px) {
      padding-top: 4.5714rem;
      padding-bottom: 3.8571rem;
    }
    @media (max-width: 768px) {
      padding-top: 2.8571rem;
      padding-bottom: 2.1428rem;
    }
  }
  .ourClients {
    padding-top: 10rem;
    padding-bottom: 3.5714rem;
    @media (max-width: 992px) {
      padding-top: 6.4285rem;
      padding-bottom: 2.4285rem;
    }
    @media (max-width: 768px) {
      padding-top: 2.8571rem;
      padding-bottom: 2.1428rem;
    }
    @media (max-width: 576px) {
      padding-top: 2.1428rem;
      padding-bottom: 1.4285rem;
    }
  }
  .ourClientsLogos {
    background-color: #f3f4f7;
  }
  .development {
    padding-top: 10rem;
    h2 {
      margin-bottom: 4.2857rem;
    }
    @media (max-width: 992px) {
      padding-top: 5rem;
    }
    @media (max-width: 768px) {
      padding-top: 3.5714rem;
    }
    @media (max-width: 576px) {
      padding-top: 2.4rem;
      h2 {
        margin-bottom: 2rem;
      }
    }
    @media (max-width: 440px) {
      padding-top: 2rem;
    }
  }
  .companyTelegramBtn {
    flex-shrink: 0;
    background-color: #fff;
    margin-left: 1.4285rem;
    svg {
      path {
        fill: #90c53d;
      }
    }
  }
`;

export default styles;
