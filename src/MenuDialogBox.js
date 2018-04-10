import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as Str_en      from './Strings_en';
import MenuItem from 'material-ui/MenuItem';
import DataIcon from 'material-ui/svg-icons/file/cloud';


const customStyle = {
    width: '50%',
    maxWidth: '300px',
    minWidth: '100px',
};
export default class DialogBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {open: false};
    }

    handleClose = () => this.setState({open: false});
    handleOpen = () => this.setState({open: true});

    render(){
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
            />
        ];

        return(
            <div>
                <MenuItem leftIcon={<DataIcon/>} onClick={this.handleOpen} >{Str_en.NAME_DATA_SOURCES}</MenuItem>

                <Dialog
                    title={Str_en.NAME_DATA_SOURCES}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    contentStyle={customStyle}
                >
                    {/*make this more reusable and pass in a prop with this info*/}
                <p>data.gov.au</p>
                <a href={Str_en.HOMEPAGE_BENDIGO_ASSETS_FOOTPATHS}>{Str_en.NAME_DATA_ASSET_FOOTPATH}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_ASSETS_PUBLIC_ROADS}>{Str_en.NAME_DATA_ASSET_PUBLIC_ROADS}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_ASSETS_ROADS}>{Str_en.NAME_DATA_ASSET_ROADS}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_ASSETS_KERBS}>{Str_en.NAME_DATA_ASSET_KERBS}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_ASSETS_PIPES}>{Str_en.NAME_DATA_ASSET_PIPES}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_ASSETS_PITS}>{Str_en.NAME_DATA_ASSET_PITS}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_REC_BBQS}>{Str_en.NAME_DATA_REC_BBQ}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_REC_PLAYSPACES}>{Str_en.NAME_DATA_REC_PLAYSPACES}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_REC_TREES}>{Str_en.NAME_DATA_ENV_TREES}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_PLAN_BMO}>{Str_en.NAME_DATA_PLAN_BMO_BUSHFIRES}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_ZONE_GARBAGE}>{Str_en.NAME_DATA_ZONE_GARBAGE}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_ZONE_ORGANICS}>{Str_en.NAME_DATA_ZONE_ORGANICS}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_ZONE_ROAD_CLOSURES}>{Str_en.NAME_DATA_ZONE_ROAD_CLOSURES}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_ZONE_FLOOD}>{Str_en.NAME_DATA_ZONE_FLOOD}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_COMM_MACH_ZONE}>{Str_en.NAME_DATA_COMM_MACH_ZONE}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_COMM_MACH_CENTRE}>{Str_en.NAME_DATA_COMM_MACH_CENTRE}</a>
                    <br/>

                </Dialog>
            </div>
        )
    }
}

