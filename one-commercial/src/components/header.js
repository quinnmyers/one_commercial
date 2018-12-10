// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import './styles/header.sass'

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="header" ref={div => (this.siteHeader = div)}>
        <div className="header__container">
          <div className="header__container__brand">
            <Img fluid={this.props.logo} className="company--logo" />
          </div>
          <div className="header__container__nav" />
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.siteHeader.getBoundingClientRect().height)
  }
}
// const Header = ({ logo }) => (
//   <div className="header">
//     <div className="header__brand" />
//     {/* <Img fluid={this.props.logo} /> */}
//     {console.log(this.props)}
//     <p>HEADER GOES HERE</p>
//     <div className="header__nav__container" />
//   </div>
// )

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

Header.propTypes = {
  logo: PropTypes.object.isRequired,
}

export default Header
