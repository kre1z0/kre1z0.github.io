import React from "react";
import PropTypes from "prop-types";
import styled from "astroturf";

import { Blank } from "../Blank/Blank";

const Container = styled(Blank)`
  max-width: 28.5714rem;
`;

const Title = styled("h4")`
  font-size: 1.2857rem;
  color: #90c53d;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const Date = styled("span")`
  font-weight: 500;
  color: rgba(38, 44, 55, 0.25);
`;

const Description = styled("p")`
  margin: 1.74rem 0;
`;

const ReadMore = styled("span")`
  cursor: pointer;
  color: #90c53d;
`;

const Logo = styled("img")`
  width: auto;
  height: 1.4285rem;
`;

export const News = ({ title, date, description, logo }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Description>
        {description} <ReadMore>Читать дальше…</ReadMore>
      </Description>
      <Logo src={logo} alt="logo" />
    </Container>
  );
};

News.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.string,
};
