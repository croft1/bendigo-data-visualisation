import React, {Component} from 'react';
import {Marker, Circle, Polygon, Polyline, } from 'react-google-maps'
import * as Strings_en from './Strings_en';

//data
 class MapDataItem extends Component {

     constructor(props){
         super(props);
     }

    componentDidMount() {

    }


    render() {
         return this.buildMapArtifactForDataItem(this.props.mkr);

    }



    buildMapArtifactForDataItem(mkr){
        console.log(mkr.id);
        if (mkr.geometry.type.localeCompare("Point") === 0) {
        console.log(mkr.geometry.type);
            return <Circle
                center={this.getPosition(mkr.geometry.coordinates)}
                key={mkr.id}
                label={Strings_en.COUNCIL_FULL_NAME}
                clickable={true}
                defaultRadius={20}
            />
        }
        if(mkr.geometry.type.localeCompare("LineString") === 0 || mkr.geometry.type.localeCompare("Polyline") == 0){
        console.log(mkr.geometry.type);
            return <Polyline
                path={this.getPositions(mkr.geometry.coordinates)}
                defaultPath={this.getPositions(mkr.geometry.coordinates)}
                key={mkr.id}
                label={Strings_en.COUNCIL_FULL_NAME}
                clickable={true}
                options={{
                    strokeColor: '#ff2343',
                    strokeOpacity: '0.0',
                    strokeWeight: 2
                }}
                visible
            />
        }
        if(mkr.geometry.type.localeCompare("Polygon") === 0){
        console.log(mkr.geometry.type);
            return <Polygon
                path={this.getPositions(mkr.geometry.coordinates)}  //probably need to do an extra layer of processing
                defaultPath={this.getPositions(mkr.geometry.coordinates)}
                key={mkr.id}
                label={Strings_en.COUNCIL_FULL_NAME}
                clickable={true}
            />
        }


    }

    getPositions(coordinates){
        var positions = [];
         for(var point in coordinates){ //weirdly doesnt get array, point just iterates. tried .map too
             positions.push(
                 this.getPosition(coordinates[point])
             );
         }
         console.log(positions);
        return positions;
     }

    getPosition(coords){
         return {lat: this.getLat(coords), lng: this.getLng(coords)};
    }

    getLat(coords){
        return coords[1];
    }

    getLng(coords){
        return coords[0];
    }
}

export default MapDataItem;



