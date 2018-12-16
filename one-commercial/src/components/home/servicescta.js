import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Content from '../content.js'

// import '../styles/home/servicescta.sass'

class ServicesCta extends Component {
  render() {
    return (
      <Content>
        <div className="home__text__block">
          <h3>{this.props.underHeroHeader}</h3>
          <p>{this.props.underHeroBody}</p>
        </div>
      </Content>
    )
  }
}

ServicesCta.propTypes = {
  underHeroHeader: PropTypes.string,
  underHeroBody: PropTypes.string,
}

export default ServicesCta
