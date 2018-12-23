/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const listingTemplate = path.resolve('src/templates/listing.js')
        resolve(
            graphql(`
        {
            allContentfulProperty {
            edges {
              node {
                id
                name

              }
            }
          }
        }
      `).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                // filter the result to is avabale, rent buy and have 3 blocks like the one below 
                result.data.allContentfulProperty.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.name.split(" ").join("-"),
                        component: listingTemplate,
                        context: {
                            id: edge.node.id
                        }
                    })
                })
                return
            })
        )
    })
}