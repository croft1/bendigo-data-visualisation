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
        // console.log(mkr.geometry.type);
        //for 1 [] deep
        if (mkr.geometry.type.localeCompare("Point") === 0) {
            return <Circle
                center={this.getPosition(mkr.geometry.coordinates)}
                label={Strings_en.COUNCIL_FULL_NAME}
                clickable
                defaultRadius={3}
            />
        }

        //for 2 [[]] deep
        if(mkr.geometry.type.localeCompare("LineString") === 0
            || mkr.geometry.type.localeCompare("Polyline") === 0){
            var line = <Polyline
                path={this.getLine(mkr.geometry.coordinates)}
                options={{
                    strokeColor: '#3202a5',
                    strokeOpacity: 1,
                    strokeWeight: 8
                }}
                label={Strings_en.COUNCIL_FULL_NAME}

            />
            return line;
        }

        // for 3 [[[][][]]] deep, need to generate multiple lines for single data set
        if(mkr.geometry.type.localeCompare("MultiLineString") === 0) {
            return this.getPolyLines(mkr); //many <PolyLine/> generated from within;
        }

        //for 4 deep [[[[]]]]
        if(mkr.geometry.type.localeCompare("Polygon") === 0 || mkr.geometry.type.localeCompare("MultiPolygon") === 0){
        var poly = <Polygon
            path={this.getPolygon(mkr.geometry.coordinates)}  //probably need to do an extra layer of processing
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

    getPolygon(coordinates){
        var lines = [];
        for(var i = 0; i < coordinates.length; i++){
            lines.push(
                this.getLine(coordinates[i][0])
            );
        }
        return lines[0];
    }


     getPolyLines(mkr){
         var lines = [];
         var coordinates = mkr.geometry.coordinates;
         for(var i = 0; i < coordinates.length; i++){
             lines.push( <Polyline
                 path={this.getLine(coordinates[i])}
                 options={{
                     strokeColor: '#3202a5',
                     strokeOpacity: 1,
                     strokeWeight: 1
                 }}
                 key={mkr.id + i}
                 label={Strings_en.COUNCIL_FULL_NAME}
             />
             );
         }
         return lines;
     }

    getLine(coordinates){
        var positions = [];
        for(var point = 0; point < coordinates.length ; point++){ //weirdly doesnt get array, point just iterates. tried .map too
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



