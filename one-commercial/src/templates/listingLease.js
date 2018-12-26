import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/listingpage/heroImg"
import PropertyData from "../components/listingpage/PropertyData"
import PhotoArray from "../components/listingpage/photoArray"

// import ButtonRound from '../components/buttonRound'

import style from "./listing.module.sass"

class listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listingInfo: []
        }
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
                title: "Property Type",
                value: data.propertyType
            },
            {
                title: "Building / Lot Size",
                value: `${data.buildinglotSize} ${data.measurementUnit}`
            },
            {
                title: "Category",
                value: data.category
            }, {
                title: "Under Pending Contract ",
                value: data.underContractpending.toString()
            },
            {
                title: "Official Listing Link",
                value: data.officialListingLink
            },
        ]
        // const leasedListingArr = [
        //     {
        //         title: "number of spaces",
        //         value: `${data.minimumNumberOfSpaces}-${data.maximumNumberOfSpaces}`
        //     }, {
        //         title: "Sf available",
        //         value: `${data.smallestSfAvailable}-${data.largestSfAvailable}`
        //     },
        // ]
        // let leasedListingPrice = []
        // if (data.leasePsf) {
        //     console.log("in the if", data);
        //     leasedListingPrice.push({
        //         title: "rent",
        //         value: `$${data.leasePsf.toLocaleString()} PSF`
        //     })
        // }
        // let salePrice = [{
        //     title: "price",
        //     value: `${data.salePrice.toLocaleString()}`
        // }]

        // if (data.listingType == "Sale") {
        //     if (data.displayPricePerSf) {
        //         salePrice = [{
        //             title: "price",
        //             value: `${(data.salePrice / data.buildinglotSize).toLocaleString()}`
        //         }]
        //     }
        //     return this.setState({ listingInfo: listingArr.concat(salePrice) })
        // }
        // else if (data.listingType == "Lease") {

        //     const rentInfo = leasedListingArr.concat(leasedListingPrice)
        //     console.log(rentInfo);

        //     return this.setState({ listingInfo: listingArr.concat(rentInfo) })
        // } else {
        return this.setState({ listingInfo: listingArr })

        // }

    }

    // life cycle hooks 
    // UNSAFE__componentWillMount()
    componentDidMount() {
        this.listingData(this.props.data.contentfulProperty)
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

                                <p dangerouslySetInnerHTML={{ __html: listing.address.childContentfulRichText.html }}></p>
                            </div>
                            <PropertyData ListingData={this.state.listingInfo}></PropertyData>
                            <p
                                dangerouslySetInnerHTML={{ __html: listing.propertyDescription.childContentfulRichText.html }}></p>
                            <h3>More Information</h3>

                        </div>
                        <div className={style.body__right}>
                            <h4>Additional Photos</h4>
                            <PhotoArray
                                imageArray={listing.propertyPhotos}
                                altImage={listing.mainImage}
                            ></PhotoArray>
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
                childContentfulRichText {
                    html
                  }
        }
        city
        state
      propertyDescription{
        childContentfulRichText {
            html
          }
        
      }
 
        category
        listingType
        displayPricePerSf
        buildinglotSize
        measurementUnit
        propertyType
        underContractpending
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


// query($id: String!) {
//     contentfulProperty(id: { eq: $id }) {
//         name
//         id
//     		address{
//                 childContentfulRichText {
//                     html
//                   }
//         }
//         city
//         state
//       propertyDescription{
//         childContentfulRichText {
//             html
//           }

//       }

//         category
//         listingType
//         salePrice
//         leasePsf
//         displayPricePerSf
//         buildinglotSize
//         measurementUnit
//         propertyType
//         underContractpending
//         minimumNumberOfSpaces
//         maximumNumberOfSpaces
//         smallestSfAvailable
//         largestSfAvailable
//         officialListingLink
//         displayProperty
//         mainImage {
//           file {
//             url
//           }
//         }
//         propertyPhotos {
//           file {
//             url
//           }
//         }


//     }
//   }
// `