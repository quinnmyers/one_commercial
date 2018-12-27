import React, { Component } from 'react'
import PropTypes from 'prop-types'

//components
import Layout from '../components/layout'
import Content from '../components/content'
import ListingIndexHero from '../components/listingsindex/listingindexhero/listingindexhero'

//styles
import '../components/styles/listingindex/listingindex.sass'

class LeaseIndex extends Component {
  render() {
    const { data } = this.props
    const liQuery = data.contentfulForLeaseListingsPage
    return (
      <Layout>
        <ListingIndexHero
          backgroundImage={liQuery.heroBackgroundImage.file.url}
          content={liQuery.heroParagraph.internal.content}
          subHeader={liQuery.heroSubheader}
          buttonText={liQuery.heroButtonText}
          buttonLink="/saleindex/"
        />
        <p>this is the leasing index page</p>
      </Layout>
    )
  }
}

//YOU WERE GOING TO GO TEST IF THE PROPS FROM CONTENTFUL CAME THROUGH
//IN THE LISTING INDEX HERO

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
  }
`

export default LeaseIndex
