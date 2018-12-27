import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

//styles
import './button.sass'

//text: placeholder text for the button/link
//link: page name that the button links to such as "contact"
//internal: if true, component uses Gatsby Link, if false,
//component will render a regular a tag and open in new tag

//ex:
//internal:
//text: Contact
//link: contact
//internal: true

//!internal:
//text: See Us On Instagram
//link: http://www.instagram.com/companyinstalink
//internal: false

class Button extends Component {
  renderButton() {
    if (this.props.internal) {
      //if interal, links using gatsby link, interpolates link prop into /${link}/, do not include slashes
      return (
        <Link to={`/${this.props.link}/`}>
          <div className="button__container">
            <button type="button">{this.props.text}</button>
          </div>
        </Link>
      )
    } else {
      //if !internal, renders a normal a tag for external linking
      return (
        <a
          href={this.props.link}
          className="button__container"
          target="__blank"
        >
          <button type="button">{this.props.text}</button>
        </a>
      )
    }
  }
  render() {
    return <div>{this.renderButton()}</div>
  }
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  internal: PropTypes.boolean,
}

export default Button
