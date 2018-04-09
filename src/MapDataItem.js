import React, {Component} from 'react';
import { Circle, Polygon, Polyline } from 'react-google-maps'
import * as Strings_en from './Strings_en';

//data
 class MapDataItem extends Component {


    componentDidMount() {

    }


    render() {
         return this.buildMapArtifactForDataItem(this.props.mkr);

    }



    buildMapArtifactForDataItem(mkr){
        console.log(mkr.geometry.type);
        if (mkr.geometry.type.localeCompare("Point") === 0) {
            return <Circle
                center={this.getPosition(mkr.geometry.coordinates)}
                label={Strings_en.COUNCIL_FULL_NAME}
                clickable
                defaultRadius={20}
            />
        }
        if(mkr.geometry.type.localeCompare("LineString") === 0 || mkr.geometry.type.localeCompare("Polyline") === 0){
            var line = <Polyline
                path={this.getLine(mkr.geometry.coordinates)}
                options={{
                    strokeColor: '#3202a5',
                    strokeOpacity: 1,
                    strokeWeight: 8
                }}
                key={mkr.id}
                label={Strings_en.COUNCIL_FULL_NAME}

            />
            return line;
        }
        if(mkr.geometry.type.localeCompare("Polygon") === 0 || mkr.geometry.type.localeCompare("MultiPolygon") === 0){
        var poly = <Polygon
            path={this.getPoly(mkr.geometry.coordinates)}  //probably need to do an extra layer of processing
            defaultPath={this.getPoly(mkr.geometry.coordinates)}
            key={mkr.id}
            label={Strings_en.COUNCIL_FULL_NAME}
            clickable
            options={{
                strokeColor: '#3202a5',
                strokeOpacity: 1,
                strokeWeight: 4
            }}
        />;
            return poly;
        }


    }

    getPoly(coordinates){
        var lines = [];
        for(var i = 0; i < coordinates.length; i++){
            console.log(coordinates[i])
            lines.push(
                this.getLine(coordinates[i][0])
            );
        }
        return lines[0];
    }

    getLine(coordinates){
        var positions = [];
        for(var point = 0; point < coordinates.length; point++){ //weirdly doesnt get array, point just iterates. tried .map too
            console.log(coordinates.length);
             positions.push(
                 this.getPosition(coordinates[point])
             );
         }
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



