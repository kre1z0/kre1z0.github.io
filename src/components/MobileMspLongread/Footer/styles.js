import styled from "astroturf";

export const FooterContainer = styled("div")`
  overflow: hidden;
  position: relative;
  > article:first-child {
    pointer-events: none;
    width: 100%;
    top: 0;
    left: 50%;
    height: 17.8571rem;
    transform: translateX(-50%);
    position: absolute;
    p {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const Mobiles = styled("div")`
  display: flex;
`;

export const Store = styled("div")`
  display: flex;
  > a:first-child {
    margin-right: 1rem;
  }
`;

const Side = styled("div")`
  transition: background-color 200ms ease-in;
  background-color: #e0f0f6;
  width: 50%;
  display: flex;
  height: calc(40.7142rem + 17.8571rem);
  > article {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 17.8571rem;
    width: 100%;
    margin: 0;
    max-width: 42.8571rem;
    img {
      position: absolute;
      bottom: 0;
      left: 50%;
      max-width: 30.5714rem;
      transition: transform 200ms ease-in;
    }
  }
  @media (hover: hover) {
    &:hover {
      background-color: #d2e6ed;
    }
  }
`;

export const LeftSide = styled(Side)`
  justify-content: flex-end;
  img {
    transform: translate(-50%, 28%);
  }
  @media (hover: hover) {
    &:hover {
      img {
        transform: translate(-50%, calc(28% - 5.7142rem));
      }
    }
  }
`;

export const RightSide = styled(Side)`
  justify-content: flex-start;
  img {
    transform: translate(-50%, 59%);
  }
  @media (hover: hover) {
    &:hover {
      img {
        transform: translate(-50%, calc(59% - 5.7142rem));
      }
    }
  }
`;
