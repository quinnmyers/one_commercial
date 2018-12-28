// props
// innerText "what the button should say"
// type "link" or "function"
// action "url" or function
// color "black"
// pos "center"
// padding "0px 25px"
// fsize "1"... ".7"

import { Link } from 'gatsby'
import React from 'react'
//styles
import style from './buttonround.module.sass'
class ButtonRound extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    static defaultProps = {
        color: "black",
        pos: "center",
        fsize: ".7",
        padding: "0px 25px"

    }
    render() {
        let button
        if (this.props.type === "link") {
            button = <button className={style.buttonRound} style={{ borderColor: this.props.color, padding: this.props.padding, fontSize: `${this.props.fsize}rem` }} ><a href={this.props.action} style={{ color: this.props.color }}>{this.props.innerText}</a> </button>

        } else if (this.props.type === "function") {
            button = <button className={style.buttonRound} onClick={this.props.action} style={{ color: this.props.color, borderColor: this.props.color, padding: this.props.padding, fontSize: `${this.props.fsize}rem` }}>{this.props.innerText}</button>
        }else if (this.props.type === 'gatsbylink') {
              button = (
                <Link
                  className={style.buttonRound}
                  to={/${this.props.action}}
                  style= color: this.props.color, borderColor: this.props.color 
                >
                  <button> {this.props.innerText}</button>
                </Link>
              )
            }
        return (
            <div className={style.wraper} style={{ justifyContent: this.props.pos }}>
                {button}
            </div >


        );

    }
    return (
      <div className={style.wraper} style={{ justifyContent: this.props.pos }}>
        {button}
      </div>
    )
  }
}

export default ButtonRound
// else if (this.props.type === 'gatsbylink') {
//   button = (
//     <Link
//       className={style.buttonRound}
//       to={`/${this.props.action}`}
//       style={{ color: this.props.color, borderColor: this.props.color }}
//     >
//       <button> {this.props.innerText}</button>
//     </Link>
//   )
// }
