// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

const Header = () => (
  <div className="header">
    <div className="header__brand" />
    <p>HEADER GOES HERE</p>
    <div className="header__nav__container" />
  </div>
)

// <Link
//       to="/"
//       style={{
//         color: 'white',
//         textDecoration: 'none',
//       }}
//     >
//       {siteTitle}
//     </Link>

// Header.propTypes = {
//   data: PropTypes.object,
// }

// Header.defaultProps = {
//   siteTitle: '',
// }

export default Header
