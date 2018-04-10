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
import * as Strings_en      from './Strings_en';

//these must be at the correct index to each other please
const sources = [
    Strings_en.DATA_NAME_BBQ,
    Strings_en.DATA_NAME_FOOTPATH,
    Strings_en.DATA_NAME_TREES,
    Strings_en.DATA_NAME_ROADS,
    Strings_en.DATA_NAME_PLAYSPACES
];
const links = [
    Strings_en.REST_BENDIGO_REC_BBQS,
    Strings_en.REST_BENDIGO_ASSETS_FOOTPATHS,
    Strings_en.REST_BENDIGO_REC_TREES,
    Strings_en.REST_BENDIGO_ASSETS_ROADS,
    Strings_en.REST_BENDIGO_REC_PLAYSPACES
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
                        <img src={logo} alt={Strings_en.COUNCIL_FULL_NAME}/>
                    </MenuItem>
                    <Divider />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Strings_en.DATA_NAME_FOOTPATH, Strings_en.REST_BENDIGO_ASSETS_FOOTPATHS)}
                              primaryText={Strings_en.DATA_NAME_FOOTPATH}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Strings_en.DATA_NAME_BBQ, Strings_en.REST_BENDIGO_REC_BBQS)}
                              primaryText={Strings_en.DATA_NAME_BBQ}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Strings_en.DATA_NAME_PLAYSPACES, Strings_en.REST_BENDIGO_REC_PLAYSPACES)}
                              primaryText={Strings_en.DATA_NAME_PLAYSPACES}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Strings_en.DATA_NAME_ROADS, Strings_en.REST_BENDIGO_ASSETS_ROADS)}
                              primaryText={Strings_en.DATA_NAME_ROADS}  />

                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={
                        this.handleItemClick.bind(
                            this, Strings_en.DATA_NAME_TREES, Strings_en.REST_BENDIGO_REC_TREES)}
                              primaryText={Strings_en.DATA_NAME_TREES}  />

                    <MenuItemSnackbar leftIcon={<MapLayerErrorIcon/>} onClick={this.handleClose} text={Strings_en.DATA_NAME_PLN_BMO_BUSHFIRES} message={Strings_en.COMING_SOON} />

                    <Divider />
                    <DialogMenuItem/>
                </Drawer>
            </div>
        )
    }
}

