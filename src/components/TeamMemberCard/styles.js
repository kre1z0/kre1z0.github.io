import styled, { css } from "astroturf";

import { Blank } from "../../components/Blank/Blank";

export const TeamMemberCardContainer = styled(Blank)`
  width: 100%;
  max-width: 21.4285rem;
  text-align: center;
  line-height: normal;
`;

export const Name = styled("div")`
  font-size: 1.2857rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  @media (max-width: 576px) {
    font-size: 1.1428rem;
  }
`;

export const Position = styled("div")`
  font-weight: 500;
  font-size: 0.8571rem;
  color: rgba(33, 34, 36, 0.25);
  margin-bottom: 1rem;
`;

export const Description = styled("div")`
  font-weight: 500;
`;

const styles = css`
  .avatarBlock {
    margin: 1.4rem auto;
  }
`;

export default styles;
