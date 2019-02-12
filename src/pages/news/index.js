import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { PaginationFull } from "../../components/Pagination/Full/PaginationFull";
import { PaginationSimple } from "../../components/Pagination/Simple/PaginationSimple";
import { browser } from "../../utils/browser";
import { rowColumns } from "../../utils/array";
import { H2 } from "../../components/Typography/Headlines";
import { Section as Main } from "../../components/Elements/Section";
import { Header } from "../../components/News/Header/Header";
import { Article } from "../../components/News/Article/Article";
import styles, { Section, Column } from "../../styles/news";

const articlesPerPage = 8;

class News extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  state = {
    columnsCount: 2,
    currentPage: 1,
    columns: [],
    pageCount: 0,
  };

  componentDidMount() {
    this.init();
  }

  init = () => {
    const { parsedResult } = browser();
    const {
      platform: { type },
    } = parsedResult;
    const columnsCount = type === "mobile" ? 1 : 2;
    const { currentPage } = this.state;
    const { data } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;
    const AllNews = allMarkdownRemark ? allMarkdownRemark.edges : [];

    const news = this.pagination(currentPage);
    const pageCount = Math.ceil(AllNews.length / articlesPerPage);
    const columns = rowColumns(news, columnsCount);

    this.setState({ pageCount, columns, columnsCount });
  };

  pagination = page => {
    const { data } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;
    const AllNews = allMarkdownRemark ? allMarkdownRemark.edges : [];

    const from = articlesPerPage * (page - 1);
    const to = from + articlesPerPage;

    return AllNews.slice(from, to);
  };

  onPageChange = currentPage => {
    const { columnsCount } = this.state;

    const items = this.pagination(currentPage);
    const columns = rowColumns(items, columnsCount);

    this.setState({ currentPage, columns });
  };

  render() {
    const { columnsCount, columns, currentPage, pageCount } = this.state;
    const { data } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;

    return (
      <>
        <Header title="СМИ о нас" />
        <Main as="main" withoutPaddingBottom>
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
          <PaginationFull
            className={styles.paginationFull}
            currentPage={currentPage}
            pageCount={pageCount}
            slots={7}
            onPageChange={this.onPageChange}
          />
          <PaginationSimple
            pageCount={pageCount}
            currentPage={currentPage}
            onPageChange={this.onPageChange}
            className={styles.paginationSimple}
          />
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
