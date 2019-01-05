// https://www.npmjs.com/package/lightbox-react
import React from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import style from "./photoArray.module.sass"
import { array } from 'prop-types';

class photoArray extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
            images: []
        }
        this.buildarray = this.buildarray.bind(this);
    }
    buildarray() {
        const tempArray = []
        this.props.imageArray.forEach(element => {
            tempArray.push(element.file.url)
        });
        tempArray.push(this.props.altImage.file.url)
        this.setState({ images: tempArray })

    }
    componentDidMount() {
        this.buildarray()
    }

    render() {

        const { photoIndex, isOpen } = this.state;
        return (
            this.state.images.map((img, index) => (
                <div>
                    <img key={index} src={img} alt="" onClick={() => this.setState({ isOpen: true })} />
                    {isOpen && (
                        <Lightbox
                            mainSrc={this.state.images[photoIndex]}
                            nextSrc={this.state.images[(photoIndex + 1) % this.state.images.length]}
                            prevSrc={this.state.images[(photoIndex + this.state.images.length - 1) % this.state.images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + this.state.images.length - 1) % this.props.imageArray.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % this.state.images.length,
                                })
                            }
                        />
                    )}
                </div>
            ))
        );
    }
}

export default photoArray;
