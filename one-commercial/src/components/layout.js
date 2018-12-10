import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import Img from 'gatsby-image'

import './layout.css'
import './main.sass'
import './base.sass'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: ['Home', 'Listings', 'Services', 'About', 'Contact'],
    }
  }
  render() {
    const { children, data } = this.props
    const siteLogo = data.allContentfulAsset.edges[0].node.fluid
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          {console.log(data.allContentfulAsset.edges[0].node.fluid)}
          <div className="header" ref={div => (this.siteHeader = div)}>
            <div className="header__container">
              <div
                className="header__container__brand"
                onClick={this.testFunction}
              >
                <Img fluid={siteLogo} className="company--logo" />
              </div>
              <div className="header__container__nav">
                <nav>
                  {this.state.navItems.map((navitem, index) => (
                    <Link
                      to={
                        navitem === 'Home' ? `/` : `/${navitem.toLowerCase()}/`
                      }
                      key={index}
                      activeClassName="active"
                    >
                      {navitem}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div
            className="page__container"
            ref={div => (this.pageContainer = div)}
          >
            <div className="page__container__content">{children}</div>
          </div>
          <div className="footer">
            <p>this is where your footer goes</p>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.stylePageContainer()
    console.log(this.state)
    console.log('hi, the layout just mounted')
  }
  stylePageContainer() {
    //styles the page container so that the footer is always exactly below
    //the viewport, even if the page doeesn't have enough content
    //gets height of the website's header
    const headerHeight = this.siteHeader.getBoundingClientRect().height
    //gets height of the browser
    const windowHeight = window.innerHeight
    //sets the page container to have minHeight equal to the remaining
    //height of the page
    this.pageContainer.style.minHeight = `${windowHeight - headerHeight}px`
    console.log(`height of header is: ${headerHeight}`)
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allContentfulAsset(
          filter: { contentful_id: { eq: "6XeuaEJpjUAKEomcyauYEg" } }
        ) {
          edges {
            node {
              title
              webp: fixed(width: 100) {
                ...GatsbyContentfulFixed_withWebp_noBase64
              }
              fluid(maxWidth: 613) {
                ...GatsbyContentfulFluid_noBase64
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object,
}

// export default Layout

//this was workign

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//         allContentfulMeta {
//           edges {
//             node {
//               logoAltText
//               logo {
//                 file {
//                   url
//                 }
//               }
//             }
//           }
//         }
//         allContentfulAsset(
//           filter: { contentful_id: { eq: "6XeuaEJpjUAKEomcyauYEg" } }
//         ) {
//           edges {
//             node {
//               title
//               webp: fixed(width: 100) {
//                 ...GatsbyContentfulFixed_withWebp_noBase64
//               }
//               fluid(maxWidth: 613) {
//                 ...GatsbyContentfulFluid_noBase64
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         {/* <Img fluid={data.allContentfulAsset.edges[0].node.fluid} /> */}
//         {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
//         <Header logo={data.allContentfulAsset.edges[0].node.fluid} />
//         {children}
//       </>
//     )}
//   />
// )

// allContentfulMeta {
//   edges {
//     node {
//       logoAltText
//       logo {
//         file {
//           url
//         }
//       }
//     }
//   }
// }
