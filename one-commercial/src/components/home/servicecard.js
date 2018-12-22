import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ServiceCard = ({ name, icon, alt, description }) => (
  <div className="service__cards__container__card">
    <Link to={`#`}>
      <h4>{name}</h4>
      <img
        className="service__cards__container__card--image"
        src={icon}
        alt={alt}
      />
      <p>{description}</p>
    </Link>
  </div>
)

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ServiceCard

//not using gatsby-image on this page because the SVGs
//do not work well with contentful under any optimization
//category, just using regular images and SVGs from contentful
