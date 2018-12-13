import React, { Component } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

//styles
import '../../components/styles/hero.sass'

class Hero extends Component {
  render() {
    // const { heroBackgroundImage, heroTextTop, heroTextBottom } = this.props
    return (
      <section className="hero">
        <div className="hero__container">
          <div className="hero__container__img">
            <Img
              fluid={this.props.heroBackgroundImage}
              className="company--logo"
              alt=""
            />
            {/* <img src={this.heroBackgroundImage} alt="" /> */}
          </div>
          <div className="hero__container__content">
            <div className="hero__container__content__top">
              <h2>{this.props.heroTextTop}</h2>
            </div>
            <div className="hero__container__content__bottom">
              <h2>{this.props.heroTextBottom}</h2>
            </div>

            <div className="hero__container__content__button">
              <Link to="/listings/">
                <button type="button">See All Listings</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

// export const query = graphql`
//   query HeroPageQuery {
//     contentfulHomePage {
//       heroTextTop
//       heroTextBottom
//       heroImage {
//         fluid(maxWidth: 2000) {
//           ...GatsbyContentfulFluid_noBase64
//         }
//       }
//     }
//   }
// `
export default Hero
