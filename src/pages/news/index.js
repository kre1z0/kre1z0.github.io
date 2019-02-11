import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { browser } from "../../utils/browser";
import { rowColumns } from "../../utils/array";
import { H2 } from "../../components/Typography/Headlines";
import { Section as Main } from "../../components/Elements/Section";
import { Header } from "../../components/News/Header/Header";
import { Article } from "../../components/News/Article/Article";
import { Section, Column } from "../../styles/news";

class News extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { columnsCount } = prevState;

    if (columnsCount === null && typeof window === "object") {
      const { parsedResult } = browser();
      const {
        platform: { type },
      } = parsedResult;
      return {
        columnsCount: type === "mobile" ? 1 : 2,
      };
    }

    return null;
  }
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  state = {
    columnsCount: null,
  };

  render() {
    const { columnsCount } = this.state;
    const { data } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;

    const news = allMarkdownRemark ? allMarkdownRemark.edges : [];
    const columns = rowColumns(news, columnsCount);

    return (
      <>
        <Header title="СМИ о нас" />
        <Main as="main">
          <Section as="section">
            {!allMarkdownRemark && <H2>Список статей пуст</H2>}
            {columns.map((col, index) => (
              <Column key={index} oneColumn={columnsCount === 1}>
                {!allMarkdownRemark && <H2>Список статей пуст</H2>}
                {col.map(({ node }) => (
                  <Article key={node.id} {...node.frontmatter} />
                ))}
              </Column>
            ))}
          </Section>
        </Main>
      </>
    );
  }
}

export default News;

export const newsPageQuery = graphql`
  query AllNews {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: [DESC] }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            logo
            title
            date(formatString: "DD.MM.YYYY")
            description
            link
          }
        }
      }
    }
  }
`;
