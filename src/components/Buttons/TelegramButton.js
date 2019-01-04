import styled from "astroturf";

import { Button } from "./Buttons";

export const TelegramButton = styled(Button)`
  position: absolute;
  right: 6rem;
  bottom: 4.5714rem;
  width: 3.4285rem;
  height: 3.4285rem;
  border-radius: 0.1428rem;
  background: url(../../img/icons/telegram.svg) #90c53d center center no-repeat;
  background-size: 1.7rem 1.5285rem;
  box-shadow: 0 8px 8px 0 rgba(10, 18, 33, 0.1);
  @media (max-width: 1024px) {
    right: 3.5714rem;
  }
  @media (max-width: 1000px) {
    background-size: 1.25rem 1.1rem;
    width: 2.5714rem;
    height: 2.5714rem;
  }
  @media (max-width: 767px) {
    right: 1.7857rem;
    bottom: 1.4142rem;
  }
`;
