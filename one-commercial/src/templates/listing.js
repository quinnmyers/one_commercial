import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
    const listing = data.contentfulProperties
    return (

        <Layout>

            <div>
                <h1>{listing.name}</h1>

            </div>
        </Layout>
    )
}
export const query = graphql`

  query($id: String!) {
    contentfulProperties(id: { eq: $id }) {
      id
      name

    }
  }
`