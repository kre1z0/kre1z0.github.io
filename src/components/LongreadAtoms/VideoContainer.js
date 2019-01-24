import styled from "astroturf";

const ratio = 1.8;
const breakpoint1366 = "8.1428rem";
const breakpoint992 = "7.8571rem";
const breakpoint768 = "3.1428rem";
const breakpoint576 = "1.4285rem";

export const VideoContainer = styled("div")`
  position: relative;
  max-width: 900px;
  max-height: 500px;
  width: calc(100vw - ${breakpoint1366} * 2);
  height: calc((100vw - ${breakpoint1366} * 2) / ${ratio});
  margin-bottom: 1.4rem;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 2.2857rem 2.2857rem 0 rgba(10, 18, 33, 0.15);
  }
  @media (max-width: 992px) {
    width: calc(100vw - ${breakpoint992} * 2);
    height: calc((100vw - ${breakpoint992} * 2) / ${ratio});
  }
  @media (max-width: 768px) {
    width: calc(100vw - ${breakpoint768} * 2);
    height: calc((100vw - ${breakpoint768} * 2) / ${ratio});
    video {
      box-shadow: 0 1.7142rem 1.7142rem 0 rgba(10, 18, 33, 0.15);
    }
  }
  @media (max-width: 576px) {
    width: calc(100vw - ${breakpoint576} * 2);
    height: calc((100vw - ${breakpoint576} * 2) / ${ratio});
    video {
      box-shadow: 0 1.1428rem 1.1428rem 0 rgba(10, 18, 33, 0.15);
    }
  }
  @media (max-width: 440px) {
    width: 100vw;
    height: calc(100vw / ${ratio});
    margin-left: -${breakpoint576};
    video {
      box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.15);
    }
  }
`;
