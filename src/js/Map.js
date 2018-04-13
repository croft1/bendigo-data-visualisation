import React, {Component} from 'react';
import '../css/Map.css';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps'
import MapDataItem from './MapDataItem';

//data
class Map extends Component {

    constructor(props){
        super(props);
        this.state = {
            mapStyle: props.mapStyle,
            mapItemColor:  props.mapItemColor,
            oldMapDataItemID: null
        };
        this.googleMapRef = React.createRef();

    }

    componentDidMount() {

    }


    mapCallback = (key) => {
        if(this.state.oldMapDataItemID !== null){
            this.refs[this.state.oldMapDataItemID].hideWindow();
        }

        this.setState({oldMapDataItemID: key}, () => {
        });
    };

    static getDerivedStateFromProps(nextProps, prevState){
        return {
            mapStyle: nextProps.mapStyle,
            mapItemColor:  nextProps.mapItemColor,
            oldMapDataItemID: prevState.mapStyle === nextProps.mapStyle ? null : prevState.oldMapDataItemID
        };
    }

    render() {
        // console.log(this.props.mkrs[0]);
        return (
            <div className='map'>
                <GoogleMap
                    defaultZoom={12}
                    defaultCenter={{lat: -36.751502, lng: 144.282406}}
                    ref={this.googleMapRef}
                    options={{
                        "maxZoom":19,
                        "minZoom": 10,
                        "streetViewControl": false,
                        "zoomControl": false,
                        "fullscreenControl": false,
                        "styles":
                            this.props.mapStyle,
                    }}
                >

                    {this.props.mkrs && this.props.visible &&
                    this.props.mkrs.map(mkr => (
                        <MapDataItem
                            isLayerShown
                            isMarkerShown
                            mkr={mkr}
                            key={mkr.id}
                            ref={mkr.id}
                            itemID={mkr.id}
                            mapCallback={this.mapCallback}
                            layer={this.props.layerName}
                            styleColor={this.props.mapItemColor}
                            mkrIcon={this.createSVGCircle(8,8,4)}
                        />

                    ))}

                </GoogleMap>
            </div>
        )
    }
    createSVGCircle(cx, cy, r) {
        return 'M ' + cx + ', ' + cy + ' m ' + r * -1 + ', 0 a ' + r + ', ' + r + ' 0 1, 0 ' + r * 2 + ', 0 a ' + r + ', ' + r + ' 0 1, 0 ' + r * -2 + ', 0'
    }
}

export default Map = withScriptjs(withGoogleMap(Map));

