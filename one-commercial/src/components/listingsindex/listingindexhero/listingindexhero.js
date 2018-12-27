import React from 'react'
import PropTypes from 'prop-types'

const ListingIndexHero = ({
  backgroundImage,
  header,
  content,
  subHeader,
  buttonText,
  buttonLink,
}) => (
  <div className="listing__index__hero">
    <div className="listing__index__hero__content">
      <div className="listing__index__hero__content__bottom" />
    </div>
  </div>
)

//add is required here later
ListingIndexHero.propTypes = {
  backgroundImage: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  subHeader: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}

export default ListingIndexHero
