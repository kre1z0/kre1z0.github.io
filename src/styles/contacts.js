import styled, { css } from "astroturf";

import { Link as ContactLink } from "../components/Atoms/Atoms";

export const ContactsLeftSide = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Link = styled(ContactLink)`
  @media (max-width: 991px) {
    margin-bottom: 0.2rem;
  }
`;

export const SocialBlock = styled("div")``;

export const BtnGroup = styled("div")`
  display: flex;
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  button {
    &:first-child {
      margin-right: 0.7142rem;
    }
  }
`;

export const SocialLink = styled("a")`
  opacity: 0.25;
  display: inline-block;
  cursor: pointer;
  width: 1.7142rem;
  height: 1.7142rem;
  margin-right: 1rem;
  background-repeat: no-repeat;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 1.14285rem;
    height: 1.14285rem;
  }
  @media (max-width: 991px) {
    margin-top: 1.7142rem;
  }
`;

const styles = css`
  .willChangeContactsLeftSideClassName {
    @media (max-width: 1000px) {
      flex-shrink: 1;
    }
    @media (max-width: 767px) {
      align-self: flex-end;
      padding-bottom: 1rem;
    }
  }
  .contactsRightSide {
    position: relative;
    z-index: 2;
    display: flex;
    height: 15rem;
    align-items: flex-end;
    button {
      &:first-child {
        margin-right: 0.7142rem;
      }
    }
  }
  .address {
    cursor: default;
    &:hover {
      color: #262c37;
    }
    @media (min-width: 992px) {
      br {
        display: none;
      }
    }
    @media (max-width: 991px) {
      margin-bottom: 0.4rem;
    }
  }
  .telegramBtn {
    background-color: #90c53d;
    position: absolute;
    right: 6rem;
    bottom: 4.5714rem;
    @media (max-width: 1024px) {
      right: 3.5714rem;
    }
    @media (max-width: 767px) {
      right: 1.7857rem;
      bottom: 1.4142rem;
    }
  }
`;

export default styles;
