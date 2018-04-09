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


        return (

            <div className='map'>
                <GoogleMap
                    defaultZoom={13}
                    defaultCenter={{lat: -36.751502, lng: 144.282406}}>
                    {this.props.isMarkerShown &&
                    this.props.mkrs.map(mkr => (
                        <MapDataItem
                            isLayerShown
                            mkr={mkr}
                            layer={this.props.layerName}
                        />
                        ))}
                </GoogleMap>
            </div>
        )
    }
}


export default Map = withScriptjs(withGoogleMap(Map));

