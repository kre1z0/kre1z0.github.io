import styled from "astroturf";

export const TeamMembersContainer = styled("div")`
  margin-left: auto;
  width: calc(21.4285rem * 2 + 2.1428rem);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  margin-bottom: 24vh;
  > article {
    &:first-child {
      margin-right: 2.1428rem;
    }
  }
`;
