import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Content from '../content.js'

import './hometextblock.sass'

class HomeTextBlock extends Component {
  render() {
    return (
      <Content>
        <div className="home__text__block">
          <div className="home__text__block__content">
            <h3>{this.props.header}</h3>
            <p>{this.props.paragraph}</p>
          </div>
        </div>
      </Content>
    )
  }
}

HomeTextBlock.propTypes = {
  header: PropTypes.string,
  paragraph: PropTypes.string,
}

export default HomeTextBlock
