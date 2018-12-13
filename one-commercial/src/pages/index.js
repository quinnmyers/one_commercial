import React, { Component } from 'react'
// import { Link } from 'gatsby'
// import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import Propertyid from '../components/PropertyId'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import Image from '../components/image'
// import heroImg from '../images/hero-image.jpg'
// import Content from '../components/content'

//components
import Hero from '../components/home/hero'

//stles
// import '../components/styles/home.sass'

class IndexPage extends Component {
  render() {
    const { data } = this.props
    const indexAssets = data.contentfulHomePage
    return (
      <Layout>
        <Hero
          heroBackgroundImage={indexAssets.heroImage.fluid}
          heroTextTop={indexAssets.heroTextTop}
          heroTextBottom={indexAssets.heroTextBottom}
        />
        {/* <section className="hero">
          <div className="hero__container">
            <div className="hero__container__img">
              <Img
                fluid={data.contentfulHomePage.heroImage.fluid}
                className="company--logo"
                alt=""
              />
              <img src={heroImg} alt="" />
            </div>
            <div className="hero__container__content">
              <div className="hero__container__content__top">
                <h2>{data.contentfulHomePage.heroTextTop}</h2>
              </div>
              <div className="hero__container__content__bottom">
                <h2>{data.contentfulHomePage.heroTextBottom}</h2>
              </div>

              <div className="hero__container__content__button">
                <Link to="/listings/">
                  <button type="button">See All Listings</button>
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    )
  }
}

export const query = graphql`
  query IndexPageQuery {
    contentfulHomePage {
      heroTextTop
      heroTextBottom
      heroImage {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`

// const IndexPage = ({ data }) => (
//   <Layout>
//     {/* <p>This is a test of Contentful</p> */}
//     {/* <Link to="/page-2/">Go to page 2</Link> */}
//     {/* {data.allContentfulProperties.edges.map(({ node }) => (
//       <div>
//         <p className="propertyname">Property: {node.name}</p>
//         <p>{node.isCurrentlyAvailable}</p>
//       </div>
//     ))} */}
//     {/* <Propertyid data="hello" /> */}
//   </Layout>
// )

// export const query = graphql`
//   query IndexPageQuery {
//     allContentfulProperties {
//       edges {
//         node {
//           name
//           isCurrentlyAvailable
//         }
//       }
//     }
//   }
// `

export default IndexPage
