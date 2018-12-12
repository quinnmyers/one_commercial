import React, { Component } from 'react'
import { Link } from 'gatsby'
// import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Propertyid from '../components/PropertyId'
import { graphql } from 'gatsby'
// import Image from '../components/image'
import heroImg from '../images/hero-image.jpg'
// import Content from '../components/content'

//stles
import '../components/styles/home.sass'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.IndexPage = this.IndexPage.bind(this)
    // homeContentful = HomePageQuery.contentfulHomePage
  }
  render() {
    const { data } = this.props
    return (
      <Layout>
        <section className="hero">
          <div className="hero__container">
            <div className="hero__container__img">
              <img src={heroImg} alt="" />
            </div>
            <div className="hero__container__content">
              <div className="hero__container__content__top">
                <p>this is some test content</p>
              </div>
              <div className="hero__container__content__bottom">
                <h2>{data.contentfulHomePage.heroTextTop}</h2>
              </div>
              <div className="hero__container__content__bottom">
                <h2>{data.contentfulHomePage.heroTextBottom}</h2>
              </div>
            </div>
          </div>
        </section>
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
