import React from "react";
import styled from "astroturf";

import { getLink } from './getLink';
import { Link } from "../../styles/contacts";

const AddressLinkStyled = styled(Link)`
  margin-bottom: 1.4285rem;
`;

export const AddressLink = ({ children, ...props }) => {
  return (
    <AddressLinkStyled href={getLink()} {...props}>
      {children}
    </AddressLinkStyled>
  );
};
