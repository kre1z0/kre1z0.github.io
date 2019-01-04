import styled, { css } from "astroturf";

import { Blank } from "../../components/Blank/Blank";

export const TeamMemberCardContainer = styled(Blank)`
  width: 100%;
  max-width: 21.4285rem;
  text-align: center;
  line-height: normal;
  @media (max-width: 1024px) {
    width: 20rem;
  }
  @media (max-width: 1000px) {
    height: 21.2142rem;
    will-change: opacity, transform;
  }
  @media (max-width: 440px) {
    width: 19.4285rem;
    height: 100%;
  }
  @media (max-height: 440px) {
    width: 19.4285rem;
    height: 100%;
  }
  @media (max-height: 360px) {
    width: 100%;
    max-width: none;
  }
`;

export const Name = styled("div")`
  font-size: 1.2857rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  @media (max-width: 1024px) {
    font-size: 1.1428rem;
  }
`;

export const Position = styled("div")`
  font-weight: 500;
  font-size: 0.8571rem;
  color: rgba(33, 34, 36, 0.25);
  margin-bottom: 1rem;
  @media (max-width: 440px) {
    margin-bottom: 0.6rem;
  }
`;

export const Description = styled("div")`
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 0.8571rem;
  }
`;

const styles = css`
  .avatarBlock {
    margin: 1.5rem auto;
    @media (max-width: 1024px) {
      margin: 0.5rem auto 1.5rem auto;
    }
    @media (max-width: 440px) {
      margin: 0 auto 1rem auto;
    }
    @media (max-height: 360px) {
      margin: 0 auto 0.6rem auto;
    }
  }
`;

export default styles;
