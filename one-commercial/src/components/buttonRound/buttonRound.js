// props
// innerText "what the button should say"
// type "link" or "function"
// action "url" or function

import React from 'react'

import { Link } from 'gatsby'
//styles
import style from './buttonround.module.sass'
class ButtonRound extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static defaultProps = {
    color: 'black',
    pos: 'center',
  }
  render() {
    let button
    if (this.props.type === 'link') {
      button = (
        <button
          className={style.buttonRound}
          style={{ borderColor: this.props.color }}
        >
          <a href={this.props.action} style={{ color: this.props.color }}>
            {this.props.innerText}
          </a>{' '}
        </button>
      )
    } else if (this.props.type === 'function') {
      button = (
        <button
          className={style.buttonRound}
          onClick={this.props.action}
          style={{ color: this.props.color, borderColor: this.props.color }}
        >
          {this.props.innerText}
        </button>
      )
    } else if (this.props.type === 'gatsbylink') {
      button = (
        <Link
          className={style.buttonRound}
          to={`/${this.props.action}`}
          style={{ color: this.props.color, borderColor: this.props.color }}
        >
          <button> {this.props.innerText}</button>
        </Link>
      )
    }
    return (
      <div className={style.wraper} style={{ justifyContent: this.props.pos }}>
        {button}
      </div>
    )
  }
}

export default ButtonRound
