import styled, { css } from "astroturf";

import { Blank } from "../../components/Blank/Blank";

export const TeamMemberCardContainer = styled(Blank)`
  width: 100%;
  max-width: 21.4285rem;
  text-align: center;
  line-height: normal;
  @media (max-width: 1084px) {
    width: calc(50% - 2.1428rem / 2);
    max-width: none;
  }
  @media (max-width: 940px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Name = styled("div")`
  font-size: 1.2857rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  @media (max-width: 767px) {
    font-size: 1.1428rem;
  }
`;

export const Position = styled("div")`
  font-weight: 500;
  font-size: 0.8571rem;
  color: rgba(33, 34, 36, 0.25);
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    margin-bottom: 0.6rem;
  }
`;

export const Description = styled("div")`
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 0.8571rem;
  }
  @media (max-height: 340px) {
    display: none;
  }
`;

const styles = css`
  .avatarBlock {
    margin: 1.5rem auto;
    @media (max-width: 767px) {
      margin: 0 auto 0.6rem auto;
    }
  }
`;

export default styles;
