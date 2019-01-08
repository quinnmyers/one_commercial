import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Content from '../components/content'
import ListingIndexHero from '../components/listingsindex/listingindexhero/listingindexhero'
import ButtonRound from '../components/buttonRound/buttonRound'
import style from '../components/styles/services/services.module.sass'

class Services extends Component {
  state = {}
  componentDidMount() {
    if (this.props.location.state.hasOwnProperty('toID')) {
      setTimeout(() => {
        document
          .getElementById(this.props.location.state.toID)
          .scrollIntoView({ block: 'end', behavior: 'smooth' })
      }, 150)
    } else {
      return
    }
  }
  render() {
    const services = this.props.data.contentfulServicesPage.servicesDisplayed
    const page = this.props.data.contentfulServicesPage

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {'One Commercial Las Vegas Commercial Real Estate Services'}
          </title>
          <meta
            name="description"
            content={`One Commercial offers services such as ${services.map(
              service => service.title
            )}, learn more about what we can do for you.`}
          />
        </Helmet>
        <ListingIndexHero
          bgImage={page.headerImage.file.url}
          header={'Services'}
          content={page.description.childContentfulRichText.html}
          subHeader={"Let's work together"}
          buttonText={'Contact Us'}
          buttonLink="contact"
          color="black"
          innerhtml={true}
        />
        <Content>
          {services.map((service, index) => (
            <div
              className={style.service}
              id={service.title.split(' ').join('_')}
              key={index}
            >
              <h3>{service.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: service.description.childContentfulRichText.html,
                }}
              />
            </div>
          ))}
          <div className={style.contact}>
            <h4>Let's Work Together</h4>
            <p>{page.tagLine}</p>
            <ButtonRound
              innerText={`Contact Us`}
              action={`contact`}
              type="gatsbylink"
            />
          </div>
        </Content>
      </Layout>
    )
  }
}

export default Services
export const query = graphql`
  query {
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
      servicesDisplayed {
        title
        description {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
`
