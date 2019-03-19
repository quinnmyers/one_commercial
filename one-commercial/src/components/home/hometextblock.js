import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Content from '../content.js'

import './hometextblock.sass'

class HomeTextBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      secondLoaded: false,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      })
    }, 100)
    setTimeout(() => {
      this.setState({
        secondLoaded: true,
      })
    }, 650)
  }
  render() {
    return (
      <Content>
        <div className="home__text__block">
          <div className="home__text__block__content">
            <h3 className={`${this.state.loaded ? 'loaded' : ''}`}>
              {this.props.header}
            </h3>
            <p className={`${this.state.secondLoaded ? 'loaded' : ''}`}>
              {this.props.paragraph}
            </p>
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
