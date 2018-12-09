import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import './main.sass'
import Img from 'gatsby-image'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allContentfulMeta {
          edges {
            node {
              logoAltText
              logo {
                file {
                  url
                }
              }
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allContentfulAsset(filter: { title: { eq: "One Commercial Logo" } }) {
          edges {
            node {
              title
              fluid(maxWidth: 613) {
                sizes
                src
                srcSet
                aspectRatio
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {/* {console.log(data.placeholderImage.childImageSharp.fluid)} */}
        {console.log(data.allContentfulAsset.edges[0].node.fluid)}
        {/* {console.log(data.allContentfulAsset.edges[0].node.resize.aspectRatio)} */}
        <img
          src={data.allContentfulMeta.edges[0].node.logo.file.url}
          alt="test alt text"
        />
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <Img fluid={data.allContentfulAsset.edges[0].node.fluid} />
        <Header />
        {children}
      </>
    )}
  />
)

// export const query = graphql`
//   query LayoutQuery {
//     allContentfulMeta {
//       edges {
//         node {
//           logoAltText
//         }
//       }
//     }
//   }
// `

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object,
}

export default Layout
