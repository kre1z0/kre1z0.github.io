import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { rowColumns } from "../../utils/array";
import { H2 } from "../../components/Typography/Headlines";
import { Section as Main } from "../../components/Elements/Section";
import { Header } from "../../components/News/Header/Header";
import { Article } from "../../components/News/Article/Article";
import { Section, Column } from "../../styles/news";

class News extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const { data } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;
    const news = allMarkdownRemark ? allMarkdownRemark.edges : [];
    console.info("--> ggwp 4444");
    const ggwp = rowColumns(news, 2);

    return (
      <>
        <Header title="СМИ о нас" />
        <Main as="main">
          <Section as="section">
            {ggwp.map((col, index) => (
              <Column key={index}>
                {!allMarkdownRemark && <H2>Список статей пуст</H2>}
                {col.map(({ node }) => (
                  <Article key={node.id} {...node.frontmatter} />
                ))}
              </Column>
            ))}
            {/*{!allMarkdownRemark && <H2>Список статей пуст</H2>}*/}
            {/*{news.map(({ node }) => (*/}
            {/*<Article key={node.id} {...node.frontmatter} />*/}
            {/*))}*/}
          </Section>
        </Main>
      </>
    );
  }
}

export default News;

export const newsPageQuery = graphql`
  query AllNews {
    allMarkdownRemark(limit: 8, sort: { fields: [frontmatter___date], order: [DESC] }) {
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
