const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

const longreadPages = [
  "news",
  "work",
  "company",
  "debug",
  "msp",
  "mobileMsp",
  "evergis",
  "geomonitoring",
  "evertrack",
  "evergisOnline",
];

exports.onCreatePage = ({ page, graphql }) => {
  if (longreadPages.some(route => page.path.match(route))) {
    page.context.layout = "longread";
    if (page.path.match("news")) {
      // return graphql(`
      //   query AllNews {
      //     allMarkdownRemark(sort: { fields: [frontmatter___date], order: [DESC] }) {
      //       totalCount
      //       edges {
      //         node {
      //           frontmatter {
      //             logo
      //             title
      //             date
      //             description
      //             link
      //           }
      //         }
      //       }
      //     }
      //   }
      // `).then(result => {
      //   if (result.errors) {
      //     result.errors.forEach(e => console.error(e.toString()));
      //     return Promise.reject(result.errors);
      //   }
      //
      //   const posts = result.data.allMarkdownRemark.edges;
      //
      //   posts.forEach(edge => {
      //     const id = edge.node.id;
      //     console.info("--> id ggwp", id);
      //   });
      // });
      // const postsPerPage = 2;
      // const numPages = Math.ceil(posts.length / postsPerPage);
      //
      // Array.from({ length: numPages }).forEach((_, i) => {
      //   createPage({
      //     path: i === 0 ? `/` : `/${i + 1}`,
      //     component: path.resolve("./src/pages/news/index.js")
      //   });
      // });
    }
  }
};

exports.onCreateNode = ({ page, node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, getConfig, actions: { replaceWebpackConfig } }) => {
  switch (stage) {
    case "build-javascript":
      // We want to include the babel polyfills before any application code,
      // so we're inserting it as an additional entry point.  Gatsby does not allow
      // this in "setWebpackConfig", so we have to use "replaceWebpackConfig"
      const config = getConfig();

      const app = typeof config.entry.app === "string" ? [config.entry.app] : config.entry.app;

      config.entry.app = ["@babel/polyfill", ...app];
      replaceWebpackConfig(config);
  }
};
