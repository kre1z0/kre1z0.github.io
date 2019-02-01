import styled from "astroturf";

export const FooterContainer = styled("footer")`
  display: flex;
  height: 34.8571rem;
`;

const Section = styled("section")`
  display: flex;
  text-align: center;
  color: #fff;
  font-size: 1.7142rem;
  line-height: normal;
  width: 50%;
  > figure {
    max-width: 37.8571rem;
  }
`;

export const LeftSide = styled(Section)`
  background-color: #353d46;
  flex-direction: column;
  justify-content: center;
  padding-right: 5rem;
  align-items: flex-end;
  > figure {
    > div {
      margin-top: 2.2857rem;
      font-weight: 600;
    }
  }
`;

export const RightSide = styled(Section)`
  align-items: center;
  background-color: #1b242c;
  padding-left: 5rem;
  justify-content: flex-start;
  > figure {
    a {
      color: #00aaff;
      text-decoration: none;
      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
