import styled from "astroturf";

import { Button } from "./Button";

export const RaisedButton = styled(Button)`
  padding: 0.4rem 0.8rem;
  font-weight: 600;
  color: #262c37;
  background-color: transparent;
  border: 2px solid rgba(144, 197, 61, 0.5);
  border-radius: 1.2857rem;
  &.primary {
    color: #fff;
    background-color: #90c53d;
  }
`;
