// props
// flagSize padding
// flagBackground background

import React, { Component } from 'react'

import Content from '../content'
// import Content from '../../content'
import '../listingsindex/listingindexhero/listingindexhero.sass'

//styles
import style from './hero.module.sass'

class Hero extends Component {
  static defaultProps = {
    flagSize: '5px 15px',
    flagBackground: 'rgba(255, 255, 255, 0.40)',
  }
  render() {
    // const { heroBackgroundImage, heroTextTop, heroTextBottom } = this.props
    return (
      <Content>
        <div
          className="listing__index__hero"
          style={{
            backgroundImage: `url("${this.props.heroBackgroundImage}")`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
          }}
        >
          <div
            className="listing__index__hero__content"
            style={{ width: '100%' }}
          >
            <div className="listing__index__hero__content__top" />
            <div className="listing__index__hero__content__bottom">
              <h2
                style={{
                  transform: 'translateY(150%)',
                }}
              >
                {' '}
                <span
                  style={{
                    background: this.props.flagBackground,
                    padding: this.props.flagSize,
                  }}
                >
                  {this.props.flag}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Content>
    )
  }
}

export default Hero
