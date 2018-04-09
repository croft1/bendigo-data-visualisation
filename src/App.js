import React, {Component} from 'react';
import './App.css';
import Map from './Map';
import MTP from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

import AppBar from './AppBar';
import RaisedLinkButton from './RaisedLinkButton';
import * as Strings_en from './Strings_en';

class App extends Component {

    constructor(props) {
        super(props);
        document.title = "Bendigo Data Visualiser";
    }


    render() {
        return (
            <div className="App">
                <MTP>
                    <AppBar/>
                </MTP>
                <Map
                    isLayerShown
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEHhw8Prc-TJfTeEFHfuNGw7eEMYGm-6Y"
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '100vh'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}
                    mkrs={this.fetchData()}
                    layerName={
                        //this needs to be changed when data set buttons are pressed
                        Strings_en.DATA_NAME_PLAYGROUND
                    }
                />

                <footer className="App-footer">
                    <MTP muiTheme={getMuiTheme(darkBaseTheme)}>
                        <RaisedLinkButton label={Strings_en.FOOTER_CREDIT}
                                          link={Strings_en.FOOTER_CREDIT_LINK}/>
                    </MTP>
                </footer>
            </div>
        );
    }

    componentDidMount() {


    }

    fetchData() {
        return [
            {
                "type": "Feature",
                "id": "ckan_dfcd7012_576e_40ab_825b_67d5140a4e63.1",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        144.25372566,
                        -36.72930663
                    ]
                },
                "geometry_name": "geom",
                "properties": {
                    "assetid": 49010,
                    "playground": "Truscott Reserve - Playground",
                    "hierarchy": "District",
                    "house_no": "5",
                    "st_name": "Murdock Street",
                    "suburb": "California Gully",
                    "photo_link": null
                }
            },
            {
                "type": "Feature",
                "id": "ckan_dfcd7012_576e_40ab_825b_67d5140a4e63.2",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        144.25178598,
                        -36.73540441
                    ]
                },
                "geometry_name": "geom",
                "properties": {
                    "assetid": 49012,
                    "playground": "Rose/Barker Streets Playground",
                    "hierarchy": "Local",
                    "house_no": "18",
                    "st_name": "Rose Street",
                    "suburb": "California Gully",
                    "photo_link": null
                }
            },
            {
                "type": "Feature",
                "id": "ckan_dfcd7012_576e_40ab_825b_67d5140a4e63.3",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [[
                        144.25178598,
                        -36.73540441
                    ], [
                        144.25178598,
                        -36.73540441
                    ]]
                },
                "geometry_name": "geom",
                "properties": {
                    "assetid": 49012,
                    "playground": "Rose/Barker Streets Playground",
                    "hierarchy": "Local",
                    "house_no": "18",
                    "st_name": "Rose Street",
                    "suburb": "California Gully",
                    "photo_link": null
                }
            }
        ];
    }

}

export default App;
