import React, { Component } from 'react'

//components
import Layout from '../components/layout'
import ListingIndexHero from '../components/listingsindex/listingindexhero/listingindexhero'
import PropertyPreview from '../components/listingsindex/propertypreview/propertypreview'

//styles
import '../components/styles/listingindex/listingindex.sass'

class LeaseIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listingType: 'lease',
    }
  }
  render() {
    const { data } = this.props
    const liQuery = data.contentfulForLeaseListingsPage
    const liPQuery = data.contentfulPropertiesOnWebsite
    return (
      <Layout>
        <ListingIndexHero
          bgImage={liQuery.heroBackgroundImage.file.url}
          header={liQuery.heroHeader}
          content={liQuery.heroParagraph.internal.content}
          subHeader={liQuery.heroSubheader}
          buttonText={liQuery.heroButtonText}
          buttonLink="saleindex"
        />
        {liPQuery.propertiesForLease.map(property => (
          <PropertyPreview
            listingType={'lease'}
            id={property.id}
            name={property.name}
            address={property.address.childContentfulRichText.html}
            image={property.mainImage.fluid}
            pricePerSquareFoot={property.pricePerSquareFoot}
            category={property.category}
            buildinglotSize={property.buildinglotSize}
            measurementUnit={property.measurementUnit}
            underContractPending={property.underContractpending}
            desc={property.propertyDescription.childContentfulRichText.html}
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
  query LeaseIndexQuery {
    contentfulForLeaseListingsPage {
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
      propertiesForLease {
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
        pricePerSquareFoot
        category
        buildinglotSize
        measurementUnit
        underContractpending
        propertyDescription {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
`

export default LeaseIndex
