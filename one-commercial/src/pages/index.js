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
import HomeTextBlock from '../components/home/hometextblock'
import ServiceCards from '../components/home/servicecards'
import FeaturedListing from '../components/home/featuredListing/featuredListing'
import Testimonials from '../components/home/testimonials'

//stles
// import '../components/styles/home.sass'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  render() {
    const { data } = this.props
    const indexAssets = data.contentfulHomePage
    const featuredQuery = data.contentfulPropertiesOnWebsite.featuredProperty
    return (
      <Layout>
        <Hero
          heroBackgroundImage={indexAssets.heroImage.fluid}
          heroTextTop={indexAssets.heroTextTop}
          heroTextBottom={indexAssets.heroTextBottom}
        />
        {/* <ServicesCta
          underHeroHeader={indexAssets.underHeroTextBlockBold}
          underHeroBody={indexAssets.underHeroTextParagraph.internal.content}
        /> */}
        <HomeTextBlock
          header={indexAssets.underHeroTextBlockBold}
          paragraph={indexAssets.underHeroTextParagraph.internal.content}
        />
        <ServiceCards serviceCards={indexAssets.serviceCards} />
        <FeaturedListing
          pageUrl={`${this.props.location.href}${this.props.data.contentfulPropertiesOnWebsite.featuredProperty.name.split(" ").join("-")}`}
          name={featuredQuery.name}
          address={featuredQuery.address.childContentfulRichText.html}
          size={featuredQuery.buildinglotSize}
          unit={featuredQuery.measurementUnit}
          desc={featuredQuery.propertyDescription.childContentfulRichText.html}
          image={featuredQuery.mainImage.fluid}
        />
        <HomeTextBlock
          header={indexAssets.underFeaturedTextBlockBold}
          paragraph={
            indexAssets.underFeaturedTextBlockParagraph.internal.content
          }
        />
        <Testimonials testimonials={indexAssets.testimonials} />
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
      underHeroTextBlockBold
      underHeroTextParagraph {
        id
        internal {
          content
        }
      }
      serviceCards {
        id
        title
        cardDescription {
          internal {
            content
          }
        }
        iconDescription
        cardIcon {
          file {
            url
          }
        }
      }
      underFeaturedTextBlockBold
      underFeaturedTextBlockParagraph {
        id
        internal {
          content
        }
      }
      testimonials {
        id
        testimonialParagraph {
          internal {
            content
          }
        }
        personsPhoto {
          fluid(maxWidth: 150) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
        personsName
        personsTitle
        personsCompany
      }
    }
    contentfulPropertiesOnWebsite {
      featuredProperty {
        name
        address {
          childContentfulRichText {
            html
          }
        }
        buildinglotSize
        measurementUnit
        propertyDescription {
          childContentfulRichText {
            html
          }
        }
        mainImage {
          fluid(maxWidth: 2800) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
      }
    }
  }
`

// serviceCards {
//   id
//   title
//   iconDescription
//   cardDescription {
//     internal {
//       content
//     }
//   }
// }

/* <section className="hero">
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
        </section> */

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
