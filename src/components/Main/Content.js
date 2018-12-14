import styled from "astroturf";

export const Content = styled("main")`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 6rem;
  margin-top: 5.7971rem;
  width: 100%;
  height: calc(100% - 5.7971rem);
  justify-content: space-between;
  @media (max-width: 992px) {
    padding: 0 3.5714rem;
  }
  @media (max-width: 576px) {
    padding: 0 1.7857rem;
  }
`;
