import styled, { css } from "astroturf";

import { H1, Paragraph } from "../../components/LongreadAtoms/Longread";

export const HeaderContainer = styled("header")`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0 6rem 2.4285rem 6rem;
  overflow: hidden;
`;

export const HeaderBlock = styled("div")`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  @media (max-width: 1366px) {
    max-width: 114.2857rem;
  }
`;

const Section = styled("section")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;

export const LeftSide = styled(Section)`
  color: #fff;
`;

export const LeftSideContent = styled("div")`
  max-width: 38.5714rem;
  margin-right: 6.4rem;
`;

export const RightSide = styled(Section)`
  flex-shrink: 0;
  flex-grow: 1;
  width: 50vw;
  position: relative;
`;

export const Title = styled(H1)`
  margin-top: 1rem;
`;

export const Description = styled(Paragraph)``;

export const Badge = styled("div")`
  display: inline-block;
  padding: 0.4285rem 1.5rem;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 0.2857rem;
  background-color: rgba(255, 255, 255, 0.25);
`;

const styles = css`
  .leftSide {
    opacity: 0;
    animation-delay: 200ms;
    animation-fill-mode: forwards;
  }
  .projectLink {
    font-size: 1.2857rem;
    color: rgba(255, 255, 255, 0.5);
  }
  .scrollDownButton {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default styles;
