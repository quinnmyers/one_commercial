import React, { Component } from 'react'

import { Helmet } from "react-helmet"
import PropTypes from 'prop-types'


//components
import Layout from '../components/layout'
import ListingIndexHero from '../components/listingsindex/listingindexhero/listingindexhero'
import PropertyPreview from '../components/listingsindex/propertypreview/propertypreview'

//styles
import '../components/styles/listingindex/listingindex.sass'

class SaleIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listingType: 'sale',
    }
  }
  render() {
    const { data } = this.props
    const liQuery = data.contentfulForSaleListingsPage
    const liPQuery = data.contentfulPropertiesOnWebsite
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{"Top Properties For Sale In Las Vegas"}</title>
          <meta name="description" content={liQuery.heroParagraph.internal.content.substring(0, 100)} />
        </Helmet>
        <ListingIndexHero
          bgImage={liQuery.heroBackgroundImage.file.url}
          header={liQuery.heroHeader}
          content={liQuery.heroParagraph.internal.content}
          subHeader={liQuery.heroSubheader}
          buttonText={liQuery.heroButtonText}
          buttonLink="leaseindex"
        />
        {liPQuery.propertiesForSale.map(property => (
          // <p>i am a prop {property.name}</p>
          <PropertyPreview
            listingType={'sale'}
            id={property.id}
            name={property.name}
            address={property.address.childContentfulRichText.html}
            image={property.mainImage.fluid}
            salePrice={property.salePrice}
            category={property.category}
            buildinglotSize={property.buildinglotSize}
            measurementUnit={property.measurementUnit}
            underContractPending={property.underContractpending}
            desc={property.propertyDescription.childContentfulRichText.html}
            salePrice={property.salePrice}
          />
        ))}
      </Layout>
    )
  }
}

// backgroundImage: PropTypes.string,
// header: PropTypes.string,
// content: PropTypes.string,
// subHeader: PropTypes.string,
// buttonText: PropTypes.string,
// buttonLink: PropTypes.string,

export const query = graphql`
  query SaleIndexQuery {
    contentfulForSaleListingsPage {
      heroHeader
      heroParagraph {
        internal {
          content
        }
      }
      heroSubheader
      heroButtonText
      heroBackgroundImage {
        file {
          url
        }
      }
    }
    contentfulPropertiesOnWebsite {
      propertiesForSale {
        id
        name
        address {
          childContentfulRichText {
            html
          }
        }
        mainImage {
          fluid(maxWidth: 300) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
        salePrice
        category
        buildinglotSize
        measurementUnit
        underContractpending
        propertyDescription {
          childContentfulRichText {
            html
          }
        }
        salePrice
      }
    }
  }
`

export default SaleIndex
