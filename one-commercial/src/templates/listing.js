import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/listingpage/heroImg"
import PropertyData from "../components/listingpage/PropertyData"

// import ButtonRound from '../components/buttonRound'

import style from "./listing.module.sass"

class listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.typeOfListing = this.typeOfListing.bind(this);
        this.listingType = this.listingType.bind(this);
        this.contactTitle = this.contactTitle.bind(this);
    }

    // this is run at mounted checks to see what kinda of listing it is then all of the other items are based off of that 
    typeOfListing() {
        if (this.props.data.contentfulProperty.listingType === "Lease") {
            this.setState({ type: "lease" })


        } else if (this.props.data.contentfulProperty.listingType === "Sale") {
            this.setState({ type: "sale" })
        } else {
            console.log("somthing has gone wrong with the listing type check contentful");

        }
    }
    // returns a flag message for the corasponding listing type
    listingType(data) {
        let flagMessage
        if (this.state.type === "lease") {
            flagMessage = "Now Leasing!"
        } else if (this.state.type === "sale") {
            flagMessage = "For Sale!"
        } else {
            flagMessage = "Contact Now!"
        }
        return flagMessage
    }
    //returns a contact message depending on the listing type
    contactTitle(data) {
        let contactMessage
        if (this.state.type === "lease") {

            contactMessage = `Intersted In Leasing ${data.name}`
        } else if (this.state.type === "sale") {
            contactMessage = `Intersted In Purchasing ${data.name}`
        } else {
            contactMessage = `Intersted In ${data.name}`
        }
        return contactMessage
    }
    listingData(data) {
        const listingArr = [
            {
                title: "Price",
                value: data.salePrice
            },
            {
                title: "Property Type",
                value: data.propertyType
            },
            {
                title: "Building Lot Size",
                value: data.buildinglotSize
            }
        ]
        return listingArr

    }

    // life cycle hooks 
    componentDidMount() {
        this.typeOfListing()
    }
    render() {
        const listing = this.props.data.contentfulProperty
        return (
            <Layout>
                <Hero
                    heroBackgroundImage={listing.mainImage.file.url}
                    flag={this.listingType(listing)}
                ></Hero>
                <div className={style.wraper}>
                    <div className={style.body}>

                        <div className=
                            {style.body__left}>
                            <div className={style.body__left__title}>
                                <h2>{listing.name}</h2>

                                <p dangerouslySetInnerHTML={{ __html: listing.address.internal.content }}></p>
                            </div>
                            <PropertyData ListingData={this.listingData(listing)}></PropertyData>
                            <p
                                dangerouslySetInnerHTML={{ __html: listing.propertyDescription.internal.content }}></p>
                            <h3>More Information</h3>

                        </div>
                        <div className={style.body__right}>
                            <h4>Additional Photos</h4>
                        </div>
                    </div>
                    <div className={style.contact}>
                        <h4>{this.contactTitle(listing)}</h4>

                    </div>
                </div>
            </Layout>
        );
    }
}

export default listing;
// export default ({ data }) => {
//     const listing = data.contentfulProperties
//     return (


//     )
// }
export const query = graphql`

  query($id: String!) {
    contentfulProperty(id: { eq: $id }) {
        name
        id
    		address{
          internal{content}
        }
        city
        state
      propertyDescription{
        internal{
          content
        }
        
      }
 
        category
        listingType
        salePrice
        displayPricePerSf
        buildinglotSize
        measurementUnit
        propertyType
        underContractpending
        minimumNumberOfSpaces
        maximumNumberOfSpaces
        smallestSfAvailable
        largestSfAvailable
        officialListingLink
        displayProperty
        mainImage {
          file {
            url
          }
        }
        propertyPhotos {
          file {
            url
          }
        }
      

    }
  }
`