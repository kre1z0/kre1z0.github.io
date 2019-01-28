import { css } from "astroturf";

const styles = css`
  .bnIconsParallax {
    //background-color: rgba(44, 44, 44, 0.4);
    max-width: 38.5714rem;
    height: 90.8%;
    transform: translate(-50%, -50.4%);
    svg {
      position: absolute;
      width: 2.8571rem;
      height: 2.8571rem;
      &:nth-child(1) {
        right: 28%;
        top: 19.5%;
      }
      &:nth-child(2) {
        right: 39%;
        top: 27.5%;
      }
      &:nth-child(3) {
        right: 32%;
        top: 36.5%;
      }
      &:nth-child(4) {
        right: 0;
        top: 41.5%;
      }
      &:nth-child(5) {
        right: 45%;
        top: 42.5%;
      }
      &:nth-child(6) {
        right: 26%;
        top: 44%;
      }
      &:nth-child(7) {
        right: 51%;
        top: 48%;
      }
      &:nth-child(8) {
        right: 73%;
        top: 53%;
      }
      &:nth-child(9) {
        right: 52%;
        top: 55%;
      }
      &:nth-child(10) {
        right: 94%;
        top: 56%;
      }
      &:nth-child(11) {
        right: 65%;
        top: 62%;
      }
      &:nth-child(12) {
        right: 58%;
        top: 69%;
      }
      &:nth-child(13) {
        right: 68.5%;
        top: 76%;
      }
    }
  }
`;

export default styles;
