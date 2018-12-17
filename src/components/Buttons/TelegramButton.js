import styled from "astroturf";

import { Button } from "./Button";

export const TelegramButton = styled(Button)`
  transition: none;
  position: absolute;
  right: 6rem;
  bottom: 4.5714rem;
  width: 3.4285rem;
  height: 3.4285rem;
  border-radius: 0.1428rem;
  background: url(../../img/telegram.svg) #90c53d center center no-repeat;
  background-size: 1.7rem 1.5285rem;
  box-shadow: 0 8px 8px 0 rgba(10, 18, 33, 0.1);
  @media (max-width: 992px) {
    right: 3.5714rem;
  }
  @media (max-width: 576px) {
    right: 1.7857rem;
  }
`;
