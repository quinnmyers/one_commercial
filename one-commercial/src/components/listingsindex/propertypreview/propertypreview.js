import React, { Component } from 'react'
import { Link } from 'gatsby-link'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

//styles
import './propertypreview.sass'
import Content from '../../content'

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
  <Content>
    <div className="property__preview">
      <div className="property__preview__container">
        <div className="property__preview__container__image">
          <Img fluid={image} />
        </div>
        <div className="property__preview__container__info">
          <div className="property__preview__container__info__left">
            <h3>{name}</h3>
            <div dangerouslySetInnerHTML={{ __html: address }} />
            <div className="property__preview__container__info__left__price">
              $ {salePrice.toLocaleString()}
            </div>
          </div>
          <div className="property__preview__container__info__right">
            <h5>Category</h5>
            <p>{category}</p>
            <h5>Bldg/Lot Size</h5>
            <p>
              {buildinglotSize.toLocaleString()} {measurementUnit}
            </p>
            <h5>In Contract/Pending?</h5>
            <p>{underContractPending ? 'Yes' : 'No'}</p>
          </div>
        </div>
        <div className="property__preview__container__description">
          <div dangerouslySetInnerHTML={{ __html: desc.substring(0, 400) }} />
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <ul>
      <li>{name}</li> --
      <li>{address}</li> --
      {/* <li>{image}</li> */}
      <li>{salePrice}</li> --
      <li>{category}</li> --
      <li>{buildinglotSize}</li>--
      <li>{measurementUnit}</li>--
      <li>{underContractPending ? 'true' : 'false'}</li>--
      <li>{desc}</li>
    </ul>
  </Content>
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
