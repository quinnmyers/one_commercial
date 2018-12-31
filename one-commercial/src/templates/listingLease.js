import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ButtonRound from '../components/buttonRound/buttonRound'
import Hero from "../components/listingpage/heroImg"
import PropertyData from "../components/listingpage/PropertyData"
import PhotoArray from "../components/listingpage/photoArray"
import GoogleMap from "../components/listingpage/googleMap/googleMap"
import ShareLinkButtons from "../components/listingpage/shareLinkButtons/shareLinkButtons"
// import ButtonRound from '../components/buttonRound'

import style from "./listing.module.sass"

class listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listingInfo: [],
            pageUrl: ""
        }
        this.availableCheck = this.availableCheck.bind(this)
    }
    availableCheck(ifTrue, ifFalse) {
        if (!this.props.data.contentfulPropertyForLease.available) {
            return ifTrue
        } else {
            return ifFalse
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
                title: "number of spaces",
                value: `${data.minimumNumberOfSpacesAvailable}-${data.maximumNumberOfSpacesAvailable}`
            }, {
                title: "Sf available",
                value: `${data.smallestSquareFootageAvailable}-${data.largestSquareFootageAvailable}`
            },
        ]
        let price = []
        if (data.displayPricePerSquareFoot) {
            price.push({
                title: "Price",
                value: `$${data.pricePerSquareFoot.toLocaleString()}PSF`
            })
        } else {
            price.push({
                title: "Contact Us For Price",
                value: `${window.location.hostname}/contact/`
            })
        }
        return this.setState({ listingInfo: listingArr.concat(price) })


    }

    // life cycle hooks 
    componentDidMount() {
        this.listingData(this.props.data.contentfulPropertyForLease)
        this.setState({ pageUrl: window.location.href })
    }
    render() {
        const listing = this.props.data.contentfulPropertyForLease
        return (
            <Layout>
                <Hero
                    heroBackgroundImage={listing.mainImage.file.url}
                    flag={this.availableCheck("Not Available", "Now Leasing!")}
                ></Hero>
                <div className={style.wraper}>
                    <div className={style.body}>

                        <div className=
                            {style.body__left}>
                            <div className={style.body__left__title}>
                                <h2>{listing.name}</h2>
                                <div className={style.body__left__title__adddress}>
                                    <p dangerouslySetInnerHTML={{ __html: listing.address.childContentfulRichText.html }}></p>
                                    <p>&nbsp;{listing.city} {listing.state}</p>
                                </div>

                            </div>
                            <PropertyData ListingData={this.state.listingInfo}></PropertyData>
                            <p className={style.body__left__description}
                                dangerouslySetInnerHTML={{ __html: listing.propertyDescription.childContentfulRichText.html }}></p>
                            <h3>More Information</h3>
                            <h4>Map</h4>
                            <GoogleMap
                                address={`${listing.address.childContentfulRichText.html} ${listing.city} ${listing.state}`}
                            ></GoogleMap>
                            <h3 className={style.body__left__share}>Share {listing.name}</h3>
                            <ShareLinkButtons
                                url={this.state.pageUrl}
                                icons={[{
                                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMyA3aC0xLjkyNGMtLjYxNSAwLTEuMDc2LjI1Mi0xLjA3Ni44ODl2MS4xMTFoM2wtLjIzOCAzaC0yLjc2MnY4aC0zdi04aC0ydi0zaDJ2LTEuOTIzYzAtMi4wMjIgMS4wNjQtMy4wNzcgMy40NjEtMy4wNzdoMi41Mzl2M3oiLz48L3N2Zz4=",
                                    site: "facebook"
                                }, {
                                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tLjEzOSA5LjIzN2MuMjA5IDQuNjE3LTMuMjM0IDkuNzY1LTkuMzMgOS43NjUtMS44NTQgMC0zLjU3OS0uNTQzLTUuMDMyLTEuNDc1IDEuNzQyLjIwNSAzLjQ4LS4yNzggNC44Ni0xLjM1OS0xLjQzNy0uMDI3LTIuNjQ5LS45NzYtMy4wNjYtMi4yOC41MTUuMDk4IDEuMDIxLjA2OSAxLjQ4Mi0uMDU2LTEuNTc5LS4zMTctMi42NjgtMS43MzktMi42MzMtMy4yNi40NDIuMjQ2Ljk0OS4zOTQgMS40ODYuNDExLTEuNDYxLS45NzctMS44NzUtMi45MDctMS4wMTYtNC4zODMgMS42MTkgMS45ODYgNC4wMzggMy4yOTMgNi43NjYgMy40My0uNDc5LTIuMDUzIDEuMDgtNC4wMyAzLjE5OS00LjAzLjk0MyAwIDEuNzk3LjM5OCAyLjM5NSAxLjAzNy43NDgtLjE0NyAxLjQ1MS0uNDIgMi4wODYtLjc5Ni0uMjQ2Ljc2Ny0uNzY2IDEuNDEtMS40NDMgMS44MTYuNjY0LS4wOCAxLjI5Ny0uMjU2IDEuODg1LS41MTctLjQzOS42NTYtLjk5NiAxLjIzNC0xLjYzOSAxLjY5N3oiLz48L3N2Zz4=",
                                    site: "twitter"
                                },
                                {
                                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg==",
                                    site: "linkedin"
                                }
                                ]} ></ShareLinkButtons>
                            <h3 className={style.body__left__view}>{this.availableCheck("View Other Listings For Lease", "View Listing")}</h3>
                            <ButtonRound
                                type="link"
                                pos="start"
                                action={this.availableCheck("/leaseindex", listing.officialListingLink)}
                                innerText={this.availableCheck("All For Lease Listings", `see ${listing.name} on LoopNet`)}
                            ></ButtonRound>
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
                        <h4>{this.availableCheck(`Intersted In Details on ${listing.name}`, `Intersted In Leasing ${listing.name}`)}</h4>
                        <ButtonRound
                            innerText={`Contact Us About ${listing.name}`}
                            action={`contact`}
                            type="gatsbylink"
                            passedState={listing.name}
                        ></ButtonRound>

                    </div>
                </div>
            </Layout>
        );
    }
}

export default listing;
export const query = graphql`

  query($id: String!) {
    contentfulPropertyForLease(id: { eq: $id }) {
        available
        name
        id
        address {
          childContentfulRichText {
            html
          }
        }
        city
        state
        propertyDescription {
          childContentfulRichText {
            html
          }
        }
        maximumNumberOfSpacesAvailable
        minimumNumberOfSpacesAvailable
        largestSquareFootageAvailable	
        smallestSquareFootageAvailable
        displayPricePerSquareFoot
        pricePerSquareFoot
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