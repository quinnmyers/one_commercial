

import React from 'react'
//styles
import style from '../components/styles/buttonround.module.sass'
class ButtonRound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.wraper}>
                <button className={style.buttonRound} >{this.props.innerText}</button>
            </div>

        );
    }
}

export default ButtonRound;
