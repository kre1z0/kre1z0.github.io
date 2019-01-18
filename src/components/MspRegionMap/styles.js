import styled, { css } from "astroturf";

export const MspRegionMapContainer = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 38.5714rem;
  margin-top: -3.4rem;
  margin-bottom: 1.4rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const AchievementContainer = styled("div")`
  padding: 0 1rem 1.8rem 1rem;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Achievement = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% / 3);
  padding-bottom: 1.8rem;
  > span {
    white-space: nowrap;
    font-size: 4rem;
    line-height: normal;
    font-weight: 600;
    min-width: 2.8571rem;
    height: 4.8571rem;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 0.4142rem;
  }
  > p {
    padding: 0 1.4rem;
    font-size: 1.1428rem;
    text-align: center;
    margin-bottom: 0;
  }
  &:nth-child(n + 4) {
    padding-bottom: 1rem;
    align-self: flex-start;
  }
`;

export const MapWraper = styled("div")`
  width: 100%;
  height: 84.4%;
  svg {
    width: 100%;
    height: auto;
  }
  path {
    fill: #f0f4f7;
    stroke: #fff;
  }
`;

const styles = css`
  path.isFull {
    fill: #fff;
    stroke: #e6ebf0;
    ~ path {
      fill: #fff;
      stroke: #e6ebf0;
    }
  }
`;

export default styles;
