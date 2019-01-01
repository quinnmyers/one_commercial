import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

//styles
import './propertypreview.sass'
import Content from '../../content'

const PropertyPreview = ({
  id,
  name,
  address,
  image,
  salePrice,
  category,
  buildinglotSize,
  measurementUnit,
  underContractPending,
  desc,
  pricePerSquareFoot,
  listingType,
}) => (
  <Content>
    <Link to={`/${name.split(' ').join('-')}/`}>
      <div className="property__preview" key={id}>
        <div className="property__preview__container">
          <div className="property__preview__container__image">
            <Img fluid={image} />
          </div>
          <div className="property__preview__container__right">
            <div className="property__preview__container__info">
              <div className="property__preview__container__info__left">
                <h3>{name}</h3>
                <div dangerouslySetInnerHTML={{ __html: address }} />
                <div className="property__preview__container__info__left__price">
                  {listingType === 'sale'
                    ? salePrice.toLocaleString()
                    : `PSF $${pricePerSquareFoot.toLocaleString()}`}
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
              <div
                dangerouslySetInnerHTML={{ __html: desc.substring(0, 400) }}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
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
  salePrice: PropTypes.number,
  pricePerSquareFoot: PropTypes.number,
  listingType: PropTypes.string.isRequired,
}

export default PropertyPreview
