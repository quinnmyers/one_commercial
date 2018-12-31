
import React, { Component } from 'react'
import Hero from '../components/contactPage/hero/hero'
import Layout from '../components/layout'
import FooterClone from "../components/contactPage/footerClone/footerClone"
import ContactForm from "../components/contactPage/contatForm/contactForm"
import ButtonRound from "../components/buttonRound/buttonRound"
import style from "../components/styles/contact/contact.module.sass"

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  fromOtherPage() {
    if (this.props.location.state.fromButtonRound) {
      return this.props.location.state.fromButtonRound
    } else {
      return null
    }
  }
  componentDidMount() {
    console.log(this.props);

  }
  render() {
    const contact = this.props.data.contentfulContactPage
    const siteMeta = this.props.data.contentfulMeta
    const leaseListings = this.props.data.contentfulPropertiesOnWebsite.propertiesForLease
    const saleListings = this.props.data.contentfulPropertiesOnWebsite.propertiesForSale

    return (
      <Layout>
        <Hero
          bgImage={contact.headerImage.file.url}
          header={"Contact Us"}
          content={contact.tagLine.childContentfulRichText.html}
          // subHeader={liQuery.heroSubheader}
          buttonText={"Back Home"}
          buttonLink=""
        />
        <div className={style.wraper}>
          <div className={style.left}>
            <ContactForm
              listings={leaseListings.concat(saleListings)}
              email={siteMeta.email}
              contactFrom={this.fromOtherPage()}
            ></ContactForm>
          </div>
          <div className={style.right}>
            <div className={style.right__body}>
              <FooterClone
                address={siteMeta.address.childContentfulRichText.html}
                phone={siteMeta.phoneNumber}
                logo={siteMeta.logo.file.url}
                email={siteMeta.email}
              ></FooterClone>
              <h3>Still Haven't Found What You're Looking For?</h3>
              <div className={style.right__body__buttons}>
                <ButtonRound
                  innerText="view Properties for Sale"
                  type="gatsbylink"
                  action="saleindex"
                  pos="start"
                >
                </ButtonRound>
                <ButtonRound
                  innerText="view Properties for Lease"
                  type="gatsbylink"
                  action="leaseindex"
                  pos="flex-end"
                >
                </ButtonRound>
              </div>
            </div>
          </div>
        </div>
      </Layout >
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