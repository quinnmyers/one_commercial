import React from 'react'
import PropTypes, { string } from 'prop-types'
import { Link } from 'gatsby'

const ServiceCard = ({ name, icon, alt, link, description }) => (
  <div>
    <Link to={`/${link}/`}>
      <h4>{name}</h4>
      <img src={icon} alt={alt} />
      <p>{description}</p>
    </Link>
  </div>
)

ServiceCard.propTypes = {
  name: string.isRequired,
  icon: string.isRequired,
  alt: string.isRequired,
  link: string.isRequired,
  description: string.isRequired,
}

export default ServiceCard
