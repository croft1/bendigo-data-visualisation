import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuItemSnackbar from './MenuItemSnackbar';
import Divider from 'material-ui/Divider';

import MapLayerIcon from 'material-ui/svg-icons/maps/layers';
import MapLayerErrorIcon from 'material-ui/svg-icons/alert/error-outline';
import logo from './logo.png';
import DialogMenuItem from './MenuDialogBox';
import * as Str_en      from './Strings_en';

//these must be at the correct index to each other please
const sources = [
    Str_en.NAME_DATA_BBQ,
    Str_en.NAME_DATA_FOOTPATH,
    Str_en.NAME_DATA_TREES,
    Str_en.NAME_DATA_ROADS,
    Str_en.NAME_DATA_PLAYSPACES
];
const links = [
    Str_en.REST_BENDIGO_REC_BBQS,
    Str_en.REST_BENDIGO_ASSETS_FOOTPATHS,
    Str_en.REST_BENDIGO_REC_TREES,
    Str_en.REST_BENDIGO_ASSETS_ROADS,
    Str_en.REST_BENDIGO_REC_PLAYSPACES
];
const sourceLinkMap = sources.map((sources) => links); //use a js object instead...if ceebs
export default class DrawerUndocked extends React.Component{

    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this)
        this.state = {
            open:false,
            totalActiveDatasets: sourceLinkMap.length
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => {
        this.setState({open: false});
        console.log("open:" + this.state);
    }
    handleDataSwap(endpoint, name){
        this.props.changeEndpoint(endpoint, name);
    }
    handleItemClick(name, endpoint){
        this.handleClose;
        this.handleDataSwap(name, endpoint);
    }

    render(){
        return(
            <div>
                <RaisedButton primary={true} className=" b-center" label="Choose Data Set"
                              onClick={this.handleToggle} />
                <Drawer
                    docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                    <MenuItem href={'https://www.bendigo.vic.gov.au'} onClick={this.handleClose}>
                        <img src={logo} alt={Str_en.COUNCIL_FULL_NAME}/>
                    </MenuItem>
                    <Divider />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_FOOTPATH, Str_en.REST_BENDIGO_ASSETS_FOOTPATHS)}
                              primaryText={Str_en.NAME_DATA_FOOTPATH}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_BBQ, Str_en.REST_BENDIGO_REC_BBQS)}
                              primaryText={Str_en.NAME_DATA_BBQ}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_PLAYSPACES, Str_en.REST_BENDIGO_REC_PLAYSPACES)}
                              primaryText={Str_en.NAME_DATA_PLAYSPACES}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ROADS, Str_en.REST_BENDIGO_ASSETS_ROADS)}
                              primaryText={Str_en.NAME_DATA_ROADS}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_TREES, Str_en.REST_BENDIGO_REC_TREES)}
                              primaryText={Str_en.NAME_DATA_TREES}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_PLN_BMO_BUSHFIRES, Str_en.REST_BENDIGO_PLN_BMO)}
                              primaryText={Str_en.NAME_DATA_PLN_BMO_BUSHFIRES}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_PLN_BMO_BUSHFIRES, Str_en.REST_BENDIGO_PLN_BMO)}
                              primaryText={Str_en.NAME_DATA_PLN_BMO_BUSHFIRES}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ZONE_GARBAGE, Str_en.REST_BENDIGO_ZONE_GARBAGE)}
                              primaryText={Str_en.NAME_DATA_ZONE_GARBAGE}  />

                    <Divider />
                    <MenuItemSnackbar leftIcon={<MapLayerErrorIcon/>} onClick={this.handleClose} text={"Link New Data Set"} message={Str_en.COMING_SOON} />

                    <Divider />
                    <DialogMenuItem/>
                </Drawer>
            </div>
        )
    }
}

