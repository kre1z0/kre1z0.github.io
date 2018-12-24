import styled from "astroturf";

export const Content = styled("main")`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 6rem 1rem 6rem;
  margin: 5.7971rem auto 0 auto;
  width: 100%;
  max-width: 114.2857rem;
  height: calc(100% - 5.7971rem);
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding: 0 3.5714rem 1rem 3.5714rem;
  }
  @media (max-width: 576px) {
    padding: 0 1.7857rem 1rem 1.7857rem;
  }
`;
