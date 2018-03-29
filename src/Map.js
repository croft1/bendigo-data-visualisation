import React, { Component } from 'react';
import './Map.css';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'


class Map extends Component {


    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render() {

    return (

        <div className='map'>
            <GoogleMap
                defaultZoom={13}
                defaultCenter={{lat: -36.751502, lng: 144.282406}}>
                {this.props.isMarkerShown && <Marker position={{lat: -36.751502, lng: 144.282406}}
                />}
            </GoogleMap>
        </div>
    )
    }
}

export default Map = withScriptjs(withGoogleMap(Map));

