import React from 'react'
import PropTypes from 'prop-types'

//components
import Content from '../../content'
import Button from '../../general/button/button'
import ButtonRound from '../../buttonRound/buttonRound'

//styles
import './listingindexhero.sass'

const ListingIndexHero = ({
  bgImage,
  header,
  content,
  subHeader,
  buttonText,
  buttonLink,
  color = "white",
  innerhtml = false
}) => (
    <div
      className="listing__index__hero"
      style={{ backgroundImage: `url("${bgImage}")`, color: color }}
    >
      <Content>
        <div className="listing__index__hero__content">
          <div className="listing__index__hero__content__top">
            <h2>{header}</h2>
            {(innerhtml === false) ?
              <p>{content}</p> :
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            }
          </div>
          <div className="listing__index__hero__content__bottom">
            <h3>{subHeader}</h3>
            <ButtonRound
              action={buttonLink}
              type="gatsbylink"
              innerText={buttonText}
              color={color}
              pos="left"
            />
          </div>
        </div>
      </Content>
    </div>
  )

//add is required here later
ListingIndexHero.propTypes = {
  bgImage: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  subHeader: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}

export default ListingIndexHero
