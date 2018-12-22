import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/listingpage/heroImg"

import ButtonRound from '../components/buttonRound'

import style from "./listing.module.sass"

class listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    listingType(data) {
        return "Now Leasing!"
    }
    contactTitle(data) {
        return "Intersted In Purchasing The Charleston?"
    }

    render() {
        const listing = this.props.data.contentfulProperties
        // const listing = "stuff"
        return (
            <Layout>
                <Hero
                    heroBackgroundImage="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-725319.jpg"
                    flag={this.listingType(listing)}
                ></Hero>
                <div className={style.wraper}>
                    <div className={style.body}>

                        <div className=
                            {style.body__left}>
                            <div className={style.body__left__title}>
                                <h2>{listing.name}</h2>
                                <p>201 E. Charleston Blvd Las Vegas NV 89101</p>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, perferendis. Recusandae eaque magnam non iste, nesciunt in debitis et nulla blanditiis aspernatur maxime, nisi quis saepe ratione voluptatum dicta id.</p>
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
    contentfulProperties(id: { eq: $id }) {
      id
      name

    }
  }
`