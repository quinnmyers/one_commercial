import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/listingpage/heroImg"
import PropertyData from "../components/listingpage/PropertyData"
import PhotoArray from "../components/listingpage/photoArray"
import GoogleMap from "../components/listingpage/googleMap/googleMap"


// import ButtonRound from '../components/buttonRound'

import style from "./listing.module.sass"

class listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listingInfo: []
        }

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
        let price = []
        if (data.displaySalePrice) {
            price.push({
                title: "Price",
                value: `$${data.salePrice.toLocaleString()}`
            })
        } else {
            price.push({
                title: "Contact Us For Price",
                value: "http://localhost:8000/contact/"
            })
        } console.log(data.salePrice);
        return this.setState({ listingInfo: listingArr.concat(price) })


    }

    // life cycle hooks 

    componentDidMount() {
        this.listingData(this.props.data.contentfulPropertyForSale)

    }
    render() {
        const listing = this.props.data.contentfulPropertyForSale
        return (
            <Layout>
                <Hero
                    heroBackgroundImage={listing.mainImage.file.url}
                    flag={"For Sale!"}
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
                            <h4>Map</h4>
                            <GoogleMap
                                address={`${listing.address.childContentfulRichText.html} ${listing.city} ${listing.state}`}
                            ></GoogleMap>
                            <h3>Share {listing.name}</h3>
                            <h3>View Listing</h3>
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
                        <h4>{`Intersted In Purchasing ${listing.name}`}</h4>

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
    contentfulPropertyForSale(id: { eq: $id }) {
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
      salePrice
      displaySalePrice
        category
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