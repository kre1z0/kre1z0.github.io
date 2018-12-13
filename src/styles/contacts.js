import styled, { css } from "astroturf";

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
