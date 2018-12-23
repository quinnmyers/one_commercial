import React, { Component } from 'react'

//styles
import style from '../../components/styles/listingPage/data.module.sass'

class propertyData extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    componentDidMount() {

        console.log(this.props.ListingData
        );

    }

    render() {
        // const { heroBackgroundImage, heroTextTop, heroTextBottom } = this.props
        return (
            <section className={style.data}>
                {this.props.ListingData.map((specs, index) => (
                    <p key={index} className={style.data__line}>
                        <span className={style.data__line__title}>
                            {specs.title}:
                    </span>
                        {specs.value}</p>
                ))}
            </section>
        )
    }
}

export default propertyData
