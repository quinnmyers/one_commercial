import React from 'react';
import style from "../../components/styles/listingPage/photoArray.module.sass"
class photoArray extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        console.log(this.props);
        return (
            this.props.imageArray.map((img, index) => (
                <div>
                    <img src={img.file.url} alt="" />
                </div>
            ))
        );
    }
}

export default photoArray;
