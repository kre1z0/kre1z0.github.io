import styled, { css } from "astroturf";

export const MobileMspContainer = styled("div")``;

export const MobileMspStoreContainer = styled("div")`
  display: flex;
  a {
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

const styles = css`
  .mobileMspContainer {
    .mobileMspLeftSide {
      color: #0a2342;
      align-self: flex-end;
      padding-bottom: 6rem;
      label {
        background-color: rgba(67, 127, 163, 0.25);
      }
    }
  }
`;

export default styles;
