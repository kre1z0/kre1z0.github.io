import styled, { css } from "astroturf";

import { Section } from "../components/LongreadAtoms/Longread";

export const CompanyContainer = styled("main")``;

export const Footer = styled(Section)`
  padding-top: 5.3571rem;
  padding-bottom: 2.1428rem;
  background-color: #90c53d;
  color: #fff;
`;

const styles = css`
  .whoAreWe {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  .whatAreWeDoing {
    padding-top: 7.4285rem;
    padding-bottom: 6.8571rem;
    color: #fff;
    background-image: linear-gradient(to bottom, #19191d, #3c3b41),
      linear-gradient(to bottom, rgba(0, 170, 255, 0.05), rgba(0, 170, 255, 0.05));
  }
  .ourClients {
    padding-top: 10rem;
    padding-bottom: 3.5714rem;
  }
  .development {
    padding-top: 10rem;
    h2 {
      margin-bottom: 4.2857rem;
    }
  }
`;

export default styles;
