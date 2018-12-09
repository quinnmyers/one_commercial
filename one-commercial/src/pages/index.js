import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Propertyid from '../components/PropertyId'
// import Image from '../components/image'

const IndexPage = ({ data }) => (
  <Layout>
    <p>This is a test of Contentful</p>
    <Link to="/page-2/">Go to page 2</Link>
    {data.allContentfulProperty.edges.map(({ node }) => (
      <div>
        <p className="propertyname">Property: {node.name}</p>
        <p>{node.id}</p>
      </div>
    ))}
    <Propertyid data="hello" />
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    allContentfulProperty {
      edges {
        node {
          id
          name
          squareFootage
        }
      }
    }
  }
`

export default IndexPage
