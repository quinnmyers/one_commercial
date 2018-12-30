import React from 'react'
import PropTypes from 'prop-types'

//components
import Content from '../../content'
import ButtonRound from '../../buttonRound/buttonRound'

//styles
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
                <div className="listing__index__hero__content">
                    <div className="listing__index__hero__content__top">
                        <h2>{header}</h2>
                        <p>{content}</p>
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
        </div>
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
