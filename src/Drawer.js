import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import MenuItemSnackbar from './MenuItemSnackbar';
import Divider from 'material-ui/Divider';

import PersonIcon from 'material-ui/svg-icons/social/person';
import MapLayerIcon from 'material-ui/svg-icons/maps/layers';
import MapLayerErrorIcon from 'material-ui/svg-icons/alert/error-outline';
import logo from './logo.png';
import DialogMenuItem from './MenuDialogBox';
import * as Str_en      from './Strings_en';

//these must be at the correct index to each other please
const sources = [
    Str_en.NAME_DATA_REC_BBQ,
    Str_en.NAME_DATA_ASSET_FOOTPATH,
    Str_en.NAME_DATA_ENV_TREES,
    Str_en.NAME_DATA_ASSET_ROADS,
    Str_en.NAME_DATA_REC_PLAYSPACES
];
const links = [
    Str_en.REST_BENDIGO_REC_BBQS,
    Str_en.REST_BENDIGO_ASSETS_FOOTPATHS,
    Str_en.REST_BENDIGO_ENV_TREES,
    Str_en.REST_BENDIGO_ASSETS_ROADS,
    Str_en.REST_BENDIGO_REC_PLAYSPACES
];
const sourceLinkMap = sources.map((sources) => links); //use a js object instead...if ceebs
export default class DrawerUndocked extends React.Component{

    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        console.log(props);
        this.state = {
            open:false,
            totalActiveDatasets: sourceLinkMap.length,
            styles: {
                backgroundColor: props.backgroundColor,
            }
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => {
        this.setState({open: false});
    }

    handleToggling(){
        this.setState({open: !this.state.open})
    }
    handleDataSwap(endpoint, name){
        this.props.changeEndpoint(endpoint, name);
    }
    handleItemClick(name, endpoint){
        this.handleToggling()
        this.handleDataSwap(name, endpoint);
    }

    render(){
        return(
            <div>
                <RaisedButton  className=" b-center" label="Choose Data Set"
                              onClick={this.handleToggle}
                              buttonStyle={{backgroundColor: this.props.backgroundColor}}
                            default={true}
                />
                <Drawer
                    docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                    <MenuItem href={'https://www.bendigo.vic.gov.au'} onClick={this.handleClose}>
                        <img src={logo} alt={Str_en.COUNCIL_FULL_NAME}/>
                    </MenuItem>
                    <Divider />
                    <Subheader>Data Sets</Subheader>

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_REC_BBQ, Str_en.REST_BENDIGO_REC_BBQS)}
                              primaryText={Str_en.NAME_BBQ}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_REC_PLAYSPACES, Str_en.REST_BENDIGO_REC_PLAYSPACES)}
                              primaryText={Str_en.NAME_PLAYSPACES}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ASSET_FOOTPATH, Str_en.REST_BENDIGO_ASSETS_FOOTPATHS)}
                              primaryText={Str_en.NAME_FOOTPATH}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ASSET_PUBLIC_ROADS, Str_en.REST_BENDIGO_ASSETS_PUBLIC_ROADS)}
                              primaryText={Str_en.NAME_PUBLIC_ROADS}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ASSET_ROADS, Str_en.REST_BENDIGO_ASSETS_ROADS)}
                              primaryText={Str_en.NAME_ROADS}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ENV_TREES, Str_en.REST_BENDIGO_ENV_TREES)}
                              primaryText={Str_en.NAME_TREES}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_PLAN_BMO_BUSHFIRES, Str_en.REST_BENDIGO_PLAN_BMO)}
                              primaryText={Str_en.NAME_BMO_BUSHFIRES}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ASSET_KERBS, Str_en.REST_BENDIGO_ASSETS_KERBS)}
                              primaryText={Str_en.NAME_KERBS}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ZONE_GARBAGE, Str_en.REST_BENDIGO_ZONE_GARBAGE)}
                              primaryText={Str_en.NAME_GARBAGE}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ASSET_PIPES, Str_en.REST_BENDIGO_ASSETS_PIPES)}
                              primaryText={Str_en.NAME_PIPES}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ASSET_PITS, Str_en.REST_BENDIGO_ASSETS_PITS)}
                              primaryText={Str_en.NAME_PITS}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ZONE_ORGANICS, Str_en.REST_BENDIGO_ZONE_ORGANICS)}
                              primaryText={Str_en.NAME_ORGANICS}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ZONE_ROAD_CLOSURES, Str_en.REST_BENDIGO_ZONE_ROAD_CLOSURES)}
                              primaryText={Str_en.NAME_ROAD_CLOSURES}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_ZONE_FLOOD, Str_en.REST_BENDIGO_ZONE_FLOOD)}
                              primaryText={Str_en.NAME_ROAD_FLOODS}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_COMM_MACH_ZONE, Str_en.REST_BENDIGO_COMM_MACH_ZONE)}
                              primaryText={Str_en.NAME_MACH_ZONES}  />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Str_en.NAME_DATA_COMM_MACH_CENTRE, Str_en.REST_BENDIGO_COMM_MACH_CENTRE)}
                              primaryText={Str_en.NAME_MACH_CENTRE}  />

                    <Divider />
                    <Subheader>New Features</Subheader>
                    <MenuItemSnackbar leftIcon={<MapLayerErrorIcon/>} onClick={this.handleClose} text={"Link New Set"} message={Str_en.COMING_SOON} />

                    <Divider />
                    <Subheader>Credits</Subheader>
                    <DialogMenuItem/>
                    <MenuItem leftIcon={<PersonIcon/>}  primaryText="mewc 2018"  />
                </Drawer>
            </div>
        )
    }
}

