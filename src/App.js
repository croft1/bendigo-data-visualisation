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

    prepData() {
        var json = {
            "features": [
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
                }
            ]
        };

        //TODO - parse this pasted json into an array to put as a prop in map

    }


    render() {
        return (
            <div className="App">
                <MTP>
                    <AppBar/>
                </MTP>
                <Map
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEHhw8Prc-TJfTeEFHfuNGw7eEMYGm-6Y"
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '100vh'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}
                    mkrs={[
                        {lat: -36.751502, lng: 144.281206, key: '0001'},
                        {lat: -36.751502, lng: 144.282206, key: '0002'},

                    ]}
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

    componentDidMount(){
        document.title = "Bendigo Data Visualiser";
        
    }

}

export default App;
