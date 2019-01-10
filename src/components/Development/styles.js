import styled from "astroturf";

export const DevelopmentContainer = styled("div")`
  display: flex;
  margin-bottom: 9.2857rem;
  @media (max-width: 992px) {
    margin-bottom: 6rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 3.6rem;
  }
  @media (max-width: 576px) {
    margin-bottom: 2rem;
  }
`;

export const DevelopmentItem = styled("div")`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
`;

export const DevelopmentHeader = styled("header")`
  display: flex;
`;

export const DevelopmentTitle = styled("div")`
  height: 1.7142rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: normal;
  white-space: nowrap;
  padding: 0.145rem 0.925rem;
  font-weight: bold;
  border-radius: 0.8571rem;
  margin-bottom: 1.4285rem;
  margin-right: 2.1428rem;
  @media (max-width: 576px) {
    height: 1.5rem;
    font-size: 0.7142rem;
    padding: 0 0.925rem;
  }
`;

export const HorizontalRule = styled("hr")`
  margin-top: 0.8rem;
  height: 0.1428rem;
  width: 100%;
  background-color: #f3f4f7;
`;

export const DevelopmentDescription = styled("p")`
  margin: 0;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 0.8571rem;
  }
  @media (max-width: 576px) {
    font-size: 0.7142rem;
  }
`;
