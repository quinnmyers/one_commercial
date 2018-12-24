import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

//components
import Footer from './layout/footer/footer'

import './layout.css'
import './main.sass'
import './base.sass'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: ['Home', 'Listings', 'Services', 'About', 'Contact'],
      open: false,
    }
    this.mobileNav = React.createRef()
  }
  //handles clicks on the hamburger button
  handleClick() {
    console.log('WHADDUP')
    this.setState({
      open: !this.state.open,
    })
    this.expandMobileNav()
  }
  //sets styling of the &__mobilenav div
  expandMobileNav() {
    const el = this.mobileNav.current
    if (!this.state.open) {
      console.log('mobile nav is open!')
      el.style.transform = `translateY(0)`
      this.hamburgerMenu.classList.add('expanded')
    } else {
      console.log('mobile nav is closed')
      el.style.transform = `translateY(-100%)`
      this.hamburgerMenu.classList.remove('expanded')
    }
  }
  render() {
    const { children, data } = this.props
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
          <div className="header" ref={div => (this.siteHeader = div)}>
            <div className="header__container">
              <div
                className="header__container__brand"
                onClick={this.testFunction}
              >
                <img
                  className="company--logo"
                  src={data.contentfulMeta.logo.file.url}
                  alt=""
                />
                {/* <Img fluid={siteLogo} className="company--logo" /> */}
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
                <div className="mobile__hamburger">
                  <div
                    className="mobile__hamburger__hamburger"
                    onClick={this.handleClick.bind(this)}
                    ref={div => (this.hamburgerMenu = div)}
                  >
                    <span
                      className="line lineOne"
                      ref={span => (this.hamburgerLine = span)}
                    />
                    <span
                      className="line lineTwo"
                      ref={span => (this.hamburgerLine = span)}
                    />
                    <span
                      className="line lineThree"
                      ref={span => (this.hamburgerLine = span)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__container__mobilenav" ref={this.mobileNav}>
            <nav>
              {this.state.navItems.map((navitem, index) => (
                <Link
                  to={navitem === 'Home' ? `/` : `/${navitem.toLowerCase()}/`}
                  key={index}
                  activeClassName="active"
                  onClick={this.handleClick.bind(this)}
                >
                  {navitem}
                </Link>
              ))}
            </nav>
          </div>
          <div
            className="page__container"
            ref={div => (this.pageContainer = div)}
          >
            {children}
          </div>
          <div className="footer">
            <Footer
              address={
                this.props.data.contentfulMeta.address.childContentfulRichText
                  .html
              }
              phone={this.props.data.contentfulMeta.phoneNumber}
              logo={data.contentfulMeta.logo.file.url}
              email={this.props.data.contentfulMeta.email}
              socialMedia={this.props.data.contentfulMeta.socialMediaAccounts}
            />
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.stylePageContainer()
    // console.log(this.state)
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
    // console.log(`height of header is: ${headerHeight}`)
    //calls the function styling the hamburger lines after expand
    this.styleHamburgerLines()
  }
  styleHamburgerLines() {
    console.log(this.hamburgerLine)
    this.hamburgerLine.classList.add('hamburgerexpanded')
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
        contentfulMeta {
          logo {
            file {
              url
            }
          }
          email
          phoneNumber
          address {
            childContentfulRichText {
              html
            }
          }
          socialMediaAccounts {
            id
            name
            link
            icon {
              file {
                url
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
