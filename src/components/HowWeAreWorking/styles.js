import styled from "astroturf";
import { Link as GLink } from "gatsby";

export const HowWeAreWorkingContainer = styled("div")`
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    will-change: opacity, transform;
    padding: 1.7142rem;
    width: 100%;
    height: 100%;
    border-radius: 0.1428rem;
    box-shadow: 0 0.8571rem 0.8571rem 0 rgba(10, 18, 33, 0.1);
    background-color: #fff;
  }
  @media (max-height: 360px) {
    padding: 1.2rem;
  }
`;

export const Title = styled("h4")`
  font-size: 1.2857rem;
  font-weight: 600;
  @media (max-width: 1000px) {
    font-size: 1.1428rem;
    &:nth-child(4) {
      display: none;
    }
  }
  @media (max-height: 360px) {
    margin-bottom: 0.8rem;
  }
`;

export const Paragraph = styled("p")`
  font-size: 1.1428rem;
  line-height: normal;
  @media (max-width: 1000px) {
    font-size: 0.7142rem;
    margin-bottom: 0.8rem;
    ~ br {
      display: none;
    }
  }
  @media (max-height: 360px) {
    margin-bottom: 0.4rem;
  }
`;

export const PrinciplesContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const Principle = styled("section")`
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 4);
  height: 9.4285rem;
  > span {
    white-space: nowrap;
  }
`;

export const Badge = styled("div")`
  width: 4rem;
  height: 4rem;
  box-shadow: 0 8px 8px 0 rgba(10, 18, 33, 0.05);
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.7142rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

export const HowWeAreWorkingLink = styled(GLink)`
  text-decoration: none;
  align-self: flex-end;
  font-size: 1.1428rem;
  font-weight: 500;
  color: #90c53d;
  @media (max-width: 1000px) {
    align-self: flex-start;
    font-size: 0.7142rem;
  }
`;
