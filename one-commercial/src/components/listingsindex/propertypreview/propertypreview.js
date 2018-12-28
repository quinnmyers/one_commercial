import React, { Component } from 'react'
import { Link } from 'gatsby-link'
import PropTypes from 'prop-types'

//styles
import './propertypreview.sass'

const PropertyPreview = ({
  name,
  address,
  image,
  salePrice,
  category,
  buildinglotSize,
  measurementUnit,
  underContractPending,
  desc,
}) => (
  <ul>
    <li>{name}</li>
    <li>{address}</li>
    {/* <li>{image}</li> */}
    <li>{salePrice}</li>
    <li>{category}</li>
    <li>{buildinglotSize}</li>
    <li>{measurementUnit}</li>
    <li>{underContractPending ? 'true' : 'false'}</li>
    <li>{desc}</li>
  </ul>
)

PropertyPreview.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  salePrice: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  buildinglotSize: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
  underContractPending: PropTypes.bool.isRequired,
  desc: PropTypes.string.isRequired,
  salePrice: PropTypes.number.isRequired,
}

export default PropertyPreview
