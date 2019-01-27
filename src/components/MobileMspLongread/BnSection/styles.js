import styled, { css } from "astroturf";

export const BnBlock = styled("div")`
  display: flex;
  margin-bottom: 2.2rem;
  img {
    width: 4.6rem;
    height: 4.6rem;
    margin-right: 2.2857rem;
  }
  h2 {
    display: flex;
    align-items: center;
    height: 4.6rem;
    margin-bottom: 0;
  }
  @media (max-width: 991px) {
    img {
      width: 3.8rem;
      height: 3.8rem;
      margin-right: 1rem;
    }
    h2 {
      height: 3.8rem;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 0;
    img {
      width: 3rem;
      height: 3rem;
      margin-right: 0.4rem;
    }
    figure {
      margin: 0 0 -0.4rem 0;
    }
    h2 {
      height: 3rem;
    }
  }
`;

export const WithVideoContent = styled("div")`
  max-width: 38.5714rem;
`;

const styles = css`
  .withVideo {
    @media (min-width: 1200px) {
      padding: 3.4rem 5.7142rem 0 5.7142rem;
    }
    article {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 86.2857rem;
    }
  }
`;

export default styles;
