import React from 'react'
import PropTypes from 'prop-types'

//components
import Content from '../../content'
import ButtonRound from '../../buttonRound/buttonRound'

//styles
import style from "./hero.module.sass"
import '../../listingsindex/listingindexhero/listingindexhero.sass'

const Hero = ({
    bgImage,
    header,
    content,
    subHeader,
    buttonText,
    buttonLink,
}) => (
        <div
            className="listing__index__hero"
            style={{ backgroundImage: `url("${bgImage}")` }}
        >
            <Content>
                <div className="listing__index__hero__content" className={style.content}>
                    <div className="listing__index__hero__content__top">
                        <h2>{header}</h2>
                        <div className={style.content__tagline} dangerouslySetInnerHTML={{ __html: content }}></div>
                        <ButtonRound
                            action={buttonLink}
                            type="gatsbylink"
                            innerText={buttonText}
                            color="white"
                            pos="left"
                        />
                    </div>
                </div>
            </Content>
        </div >
    )

//add is required here later
Hero.propTypes = {
    bgImage: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.string,
    subHeader: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
}

export default Hero
