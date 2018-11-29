import styled from "astroturf";

export const Content = styled("main")`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 6.4285rem;
  margin-top: 3.8392rem;
  width: 100vw;
  height: calc(100vh - 3.8392rem);
  justify-content: space-between;
  > section {
    &:not(:first-child) {
      display: flex;
      width: 100%;
      max-width: 63%;
      padding-left: 10%;
      justify-content: flex-end;
    }
  }
`;
