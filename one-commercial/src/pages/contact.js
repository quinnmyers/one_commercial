import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/contactPage/hero/hero'
import Layout from '../components/layout'
import FooterClone from '../components/contactPage/footerClone/footerClone'
import ContactForm from '../components/contactPage/contatForm/contactForm'
import ButtonRound from '../components/buttonRound/buttonRound'
import style from '../components/styles/contact/contact.module.sass'
import Content from '../components/content'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fromPage: '',
    }
  }
  fromOtherPage() {
    if (this.props.location.state) {
      console.log(" not null");

      if (this.props.location.state.hasOwnProperty('fromButtonRound')) {
        console.log(true);

        this.setState({ fromPage: this.props.location.state.fromButtonRound })
        // return this.props.location.state.fromButtonRound
      } else {
        this.setState({ fromPage: '' })
      }
    }
  }
  // checkContainerPosition() {

  // }
  componentDidMount() {
    console.log("props", this.props);

    this.fromOtherPage()
    // this.checkContainerPosition()
  }

  render() {
    const contact = this.props.data.contentfulContactPage
    const siteMeta = this.props.data.contentfulMeta
    const leaseListings = this.props.data.contentfulPropertiesOnWebsite
      .propertiesForLease
    const saleListings = this.props.data.contentfulPropertiesOnWebsite
      .propertiesForSale

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {
              'Contact One Commercial, A Las Vegas Commercial Real Estate Company'
            }
          </title>
          <meta
            name="description"
            content={
              'Contact One Commercial, a Las Vegas Commercial Real Estate Company.'
            }
          />
        </Helmet>
        <Hero
          bgImage={contact.headerImage.file.url}
          header={'Contact Us'}
          content={contact.tagLine.childContentfulRichText.html}
          // subHeader={liQuery.heroSubheader}
          buttonText={'Back Home'}
          buttonLink=""
        />

        <div className={style.wraper}>
          <div className={style.left}>
            <ContactForm
              listings={leaseListings.concat(saleListings)}
              email={siteMeta.email}
              contactFrom={this.state.fromPage}
            />
          </div>
          <div className={style.right}>
            <div className={style.right__body}>
              <FooterClone
                address={siteMeta.address.childContentfulRichText.html}
                phone={siteMeta.phoneNumber}
                logo={siteMeta.logo.file.url}
                email={siteMeta.email}
              />
              <h3>Still Haven't Found What You're Looking For?</h3>
              <div className={style.right__body__buttons}>
                <ButtonRound
                  innerText="View Properties for Sale"
                  type="gatsbylink"
                  action="saleindex"
                  pos="start"
                />
                <ButtonRound
                  innerText="View Properties for Lease"
                  type="gatsbylink"
                  action="leaseindex"
                  pos="flex-end"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
export const query = graphql`
  query {
    contentfulPropertiesOnWebsite {
      propertiesForSale {
        displayProperty
        name
      }
      propertiesForLease {
        displayProperty
        name
      }
    }
    contentfulContactPage {
      headerImage {
        file {
          url
        }
      }
      tagLine {
        childContentfulRichText {
          html
        }
      }
    }
    contentfulMeta {
      phoneNumber
      email
      address {
        childContentfulRichText {
          html
        }
      }
      logo {
        file {
          url
        }
      }
    }
  }
`
