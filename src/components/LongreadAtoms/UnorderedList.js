import styled from "astroturf";

export const UnorderedList = styled("ul")`
  margin: 0 0 1.4rem 0;
  li {
    display: flex;
    font-size: 1rem;
    line-height: normal;
    position: relative;
    list-style-type: none;
    &:before {
      top: 0.4rem;
      display: inline-block;
      position: relative;
      content: "";
      flex-shrink: 0;
      width: 6px;
      height: 6px;
      margin: 0 0.6rem 0 1rem;
      background-color: #387bc7;
      border-radius: 50%;
    }
    @media (max-width: 991px) {
      font-size: 0.8571rem;
    }
    @media (max-width: 767px) and (orientation: landscape) {
      font-size: 0.7142rem;
      &:before {
        top: 0.3rem;
        width: 4px;
        height: 4px;
      }
    }
  }
  &:before {
    display: block;
    content: attr(aria-label);
    font-size: 1.1428rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
    @media (max-width: 991px) {
      font-size: 1rem;
      line-height: 1.43;
    }
    @media (max-width: 767px) {
      font-size: 0.8571rem;
      line-height: 1.5;
      margin-bottom: 0.6rem;
    }
  }
`;
