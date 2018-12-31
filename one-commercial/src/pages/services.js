import React, { Component } from 'react'
import Layout from '../components/layout'
import Content from "../components/content"
import ListingIndexHero from "../components/listingsindex/listingindexhero/listingindexhero"
import ButtonRound from "../components/buttonRound/buttonRound"
import style from "../components/styles/services/services.module.sass"

class Services extends Component {
  state = {}
  render() {
    console.log(this.props);

    const services = this.props.data.allContentfulServices.edges
    const page = this.props.data.contentfulServicesPage

    return (
      <Layout>
        <ListingIndexHero
          bgImage={page.headerImage.file.url}
          header={"Services"}
          content={page.description.childContentfulRichText.html}
          subHeader={"Let's work together"}
          buttonText={"Contact Us"}
          buttonLink="contact"
          color="black"
          innerhtml={true}
        >
        </ListingIndexHero>
        <Content>
          {services.map((service, index) => (
            <div className={style.service} key={index}>
              <h3>{service.node.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: service.node.description.childContentfulRichText.html }}></div>
            </div>
          ))}
          <div className={style.contact}>
            <h4>Let's work together</h4>
            <p>{page.tagLine}</p>
            <ButtonRound
              innerText={`Contact Us`}
              action={`contact`}
              type="gatsbylink"
            ></ButtonRound>

          </div>
        </Content>
      </Layout>
    )
  }
}

export default Services
export const query = graphql`

  query {
    allContentfulServices {
      edges {
        node {
          title
          description {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
    contentfulServicesPage {
      headerImage {
        file {
          url
        }
      }
      tagLine
      description {
        childContentfulRichText {
          html
        }
      }
    }
  }
  
`