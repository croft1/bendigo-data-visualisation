import React, {Component} from 'react';
import './Map.css';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps'
import * as Strings_en from './Strings_en';
import MapDataItem from './MapDataItem';
//data
class Map extends Component {


    componentDidMount() {
        var s = Strings_en.COUNCIL_FULL_NAME;
        s.toString();
    }


    render() {
        console.log(this.props.mkrs);

        return (

            <div className='map'>
                <GoogleMap
                    defaultZoom={12}
                    defaultCenter={{lat: -36.751502, lng: 144.282406}}>
                    {this.props.mkrs && this.props.isMarkerShown &&
                    this.props.mkrs.map(mkr => (
                        <MapDataItem
                            isLayerShown
                            isMarkerShown
                            mkr={mkr}
                            key={mkr.id}
                            layer={this.props.layerName}
                        />
                        ))}
                </GoogleMap>
            </div>
        )
    }
}


export default Map = withScriptjs(withGoogleMap(Map));

