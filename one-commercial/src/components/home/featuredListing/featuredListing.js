import React, { Component } from 'react'
import Img from 'gatsby-image'
import Content from '../../content'
import PropTypes from 'prop-types'

//components
import ButtonRound from '../../buttonRound/buttonRound'

//styles
import './featuredListing.sass'

const FeaturedListing = ({ name, address, size, unit, desc, image }) => {
  return (
    <div className="featured__listing">
      <div className="featured__listing__container">
        <div className="featured__listing__container__info">
          <h2>Featured Listing</h2>
          <div className="featured__listint__container__info__nameaddress">
            <h4>{name}</h4>
            <div dangerouslySetInnerHTML={{ __html: address }} />
          </div>
          <div className="featured__listint__container__info__info">
            {size}
            {unit}
          </div>
          <div className="featured__listint__container__info__desc">
            <div dangerouslySetInnerHTML={{ __html: desc.substring(0, 300) }} />
          </div>
          <div className="featured__listint__container__info__links">
            <ButtonRound
              action="#"
              type="gatsbylink"
              innerText="Learn More About THe CHEAKAJDSA"
              color="black"
              pos="left"
            />
          </div>
        </div>
      </div>
      <div className="featured__listing__spacer" />
      <div className="featured__listing__image" />
    </div>
  )
}

// FeaturedListing.propTypes = {
//   name: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   size: PropTypes.integer.isRequired,
//   unit: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
//   image: PropTypes.object.isRequired,
// }
export default FeaturedListing
