import styled, { css } from "astroturf";

import { Link as ContactLink } from "../components/Atoms/Atoms";

export const Link = styled(ContactLink)``;

export const SocialBlock = styled("div")``;

export const SocialLink = styled("a")`
  opacity: 0.25;
  display: inline-block;
  cursor: pointer;
  width: 1.7142rem;
  height: 1.7142rem;
  margin-right: 1rem;
  background-repeat: no-repeat;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 992px) and (min-width: 769px) {
    width: 1.14285rem;
    height: 1.14285rem;
  }
`;

const styles = css`
  .contactsLeftSide {
  }
  .contactsRightSide {
    display: flex;
    height: 15.2142rem;
    button {
      &:first-child {
        margin-right: 0.7142rem;
      }
    }
  }
  .address {
    cursor: default;
  }
`;

export default styles;
