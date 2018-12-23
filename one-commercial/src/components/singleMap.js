// exped prpps 
// 1. apikey string
// 2. pin icon
// 3. adresss 

import React from 'react';




class singleMap extends react.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.initMap = this.initMap.bind(this);

    }

    addScript(url) {
        if (url) {
            let s = document.createElement('script');
            s.src = url;
            document.head.appendChild(s);

        }
    }
    initMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
    componentDidMount() {
        const mapScript = `"https://maps.googleapis.com/maps/api/js?key=${this.props.apiKey}&callback=initMap"`
        this.addScript(mapScript)
        this.initMap

    }
    render() {
        return (
            <div style="height 50px" id="map"></div>
        );
    }
}

export default singleMap;