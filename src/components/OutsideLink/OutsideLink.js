import React from "react";
import styled from "astroturf";
import PropTypes from "prop-types";

const Link = styled("a")`
  color: #387bc7;
  text-decoration: none;
`;

const openWindow = href => e => {
  e.preventDefault();
  e.stopPropagation();
  window.open(`//${href}`, "new");
};

export const OutsideLink = ({ href, children, ...props }) => (
  <Link href={href} onClick={openWindow(href)} target="_blank" {...props}>
    {children}
  </Link>
);

OutsideLink.propTypes = {
  href: PropTypes.string,
};
