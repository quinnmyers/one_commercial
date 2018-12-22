import React, { Component } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

//styles
import style from '../../components/styles/listingPage/hero.module.sass'

class Hero extends Component {
    componentDidMount() {
        console.log(`from hero: ${this.props}`)
    }
    render() {
        // const { heroBackgroundImage, heroTextTop, heroTextBottom } = this.props
        return (
            <section className={style.hero}>
                <div className={style.hero__container}>
                    <div className={style.hero__container__img}>

                        <img src={this.props.heroBackgroundImage} alt="" />
                    </div>
                    <div className={style.hero__container__flag}>
                        <div className={style.hero__container__flag__type}>
                            <h2>{this.props.flag}</h2>
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
