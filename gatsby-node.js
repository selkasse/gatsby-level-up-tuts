const path = require('path');


exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
    data.allMarkdownRemark.edges.forEach(edge => {
        const slug = edge.node.frontmatter.slug
        actions.createPage({
            path: `/posts${edge.node.frontmatter.slug}`,
            component: require.resolve(`./src/components/postlayout.js`),
            context: { slug: slug },
        })
    })
}


// Create a page
// exports.createPages = ({ graphql, actions }) =>{
//     const { createPage }  = actions;

//     return new Promise((resolve, reject) => {
//         graphql(`{
//             allMarkdownRemark{
//                 edges{
//                     node{
//                         frontmatter{
//                             slug
//                         }
//                     }
//                 }
//             }
//         }`).then(results => {
//             results.data.allMarkdownRemark.edges.forEach(({node})=> {
//                 createPage({
//                     path: `/posts${node.frontmatter.slug}`,
//                     component: path.resolve('./src/components/postlayout.js'),
//                     context: {
//                         slug: node.frontmatter.slug,
//                     }
//                 });
//             })
//             resolve();
//         })
//     });

// } 