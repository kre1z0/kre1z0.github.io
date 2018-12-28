import styled from "astroturf";

export const TeamMembersContainer = styled("div")`
  margin-left: auto;
  width: calc(21.4285rem * 2 + 2.1428rem);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  margin-bottom: 23.8vh;
  min-height: 26.7857rem;
  > article {
    &:first-child {
      margin-right: 2.1428rem;
    }
  }
  &.oneItem {
    align-items: center;
    > article {
      margin-right: 0;
    }
  }
`;

export const NoVacancyDescription = styled("p")`
  font-size: 0.8571rem;
  font-weight: 500;
`;

export const PhotoContainer = styled("div")`
  width: 100%;
  max-width: 21.4285rem;
  text-align: center;
  line-height: normal;
  &:first-child {
    margin-right: 2.1428rem;
  }
`;
