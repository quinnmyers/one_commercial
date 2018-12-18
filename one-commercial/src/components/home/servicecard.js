import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ServiceCard = ({ name, icon, alt, description }) => (
  <div className="service__cards__container__card">
    <Link to={`#`}>
      <h4>{name}</h4>
      <Img
        className="service__cards__container__card--image"
        fluid={icon}
        alt={alt}
      />
      <p>{description}</p>
    </Link>
  </div>
)

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ServiceCard
