import React, {Component} from 'react';
import './Map.css';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps'
import * as Strings_en from './Strings_en';
import MapDataItem from './MapDataItem';

import AubergineStyle from './map_styles/AUBERGINE_CUSTOM_STYLE';
import DarkStyle from './map_styles/DARK_CUSTOM_STYLE';
import NightStyle from './map_styles/NIGHT_CUSTOM_STYLE';
import RetroStyle from './map_styles/RETRO_CUSTOM_STYLE';
import SilverStyle from './map_styles/SILVER_CUSTOM_STYLE';
import StdStyle from './map_styles/STD_CUSTOM_STYLE';
//data
class Map extends Component {

    constructor(props){
        super(props);

        this.state = {
            mapStyle: AubergineStyle,
            mapItemColor:  "YellowGreen"
        }
        this.state = {
            mapStyle: RetroStyle,
            mapItemColor:  "Maroon"
        }
        this.state = {
            mapStyle: DarkStyle,
            mapItemColor:  "DarkRed"
        }
        this.state = {
            mapStyle: NightStyle,
            mapItemColor:  "LightSeaGreen"
        }
        this.state = {
            mapStyle: SilverStyle,
            mapItemColor:  "Black"
        }
        this.state = {
            mapStyle: StdStyle,
            mapItemColor:  "Sienna"
        }
    }
    componentDidMount() {
    }

    componentWillMount(){
    }

    render() {
        return (
            <div className='map'>
                <GoogleMap
                    defaultZoom={12}
                    defaultCenter={{lat: -36.751502, lng: 144.282406}}
                    options={{
                        "maxZoom":20,
                        "styles":
                            this.state.mapStyle,
                    }}
                >
                    {this.props.mkrs && this.props.visible &&
                    this.props.mkrs.map(mkr => (
                        <MapDataItem
                            isLayerShown
                            isMarkerShown
                            mkr={mkr}
                            key={mkr.id}
                            layer={this.props.layerName}
                            styleColor={this.state.mapItemColor}
                        />
                    ))}
                </GoogleMap>
            </div>
        )
    }
}


export default Map = withScriptjs(withGoogleMap(Map));

