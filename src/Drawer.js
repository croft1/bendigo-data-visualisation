import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuItemSnackbar from './MenuItemSnackbar';
import Divider from 'material-ui/Divider';

import MapLayerIcon from 'material-ui/svg-icons/maps/layers';
import logo from './logo.png';
import DialogMenuItem from './MenuDialogBox';
import * as Strings_en      from './Strings_en';

export default class DrawerUndocked extends React.Component{

    constructor(props){
        super(props);
        this.state = {open:false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render(){
        var comingSoonText
        return(
            <div>
                <RaisedButton primary={true} className=" b-center" label="Choose Data Set"
                              onClick={this.handleToggle} />
                <Drawer
                    docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                    <MenuItem href={'https://www.bendigo.vic.gov.au'} onClick={this.handleClose}><img src={logo} alt={Strings_en.COUNCIL_FULL_NAME}/></MenuItem>
                    <Divider />
                    <MenuItemSnackbar leftIcon={<MapLayerIcon/>} onClick={this.handleClose} text={Strings_en.DATA_NAME_ROADS} message={Strings_en.COMING_SOON} />
                    <MenuItemSnackbar leftIcon={<MapLayerIcon/>} onClick={this.handleClose} text={Strings_en.DATA_NAME_FOOTPATH} message={Strings_en.COMING_SOON} />
                    <MenuItemSnackbar leftIcon={<MapLayerIcon/>} onClick={this.handleClose} text={Strings_en.DATA_NAME_PLAYGROUND} message={Strings_en.COMING_SOON} />
                    <MenuItemSnackbar leftIcon={<MapLayerIcon/>} onClick={this.handleClose} text={Strings_en.DATA_NAME_TREES} message={Strings_en.COMING_SOON} />
                    <MenuItemSnackbar leftIcon={<MapLayerIcon/>} onClick={this.handleClose} text={Strings_en.DATA_NAME_BBQ} message={Strings_en.COMING_SOON} />
                    <Divider />
                    <DialogMenuItem/>
                </Drawer>
            </div>
        )
    }
}

