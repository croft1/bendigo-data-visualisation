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
                <a href={Str_en.HOMEPAGE_BENDIGO_ASSETS_FOOTPATHS}>{Str_en.NAME_DATA_FOOTPATH}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_ASSETS_ROADS}>{Str_en.NAME_DATA_ROADS}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_REC_BBQS}>{Str_en.NAME_DATA_BBQ}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_REC_PLAYSPACES}>{Str_en.NAME_DATA_PLAYSPACES}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_REC_TREES}>{Str_en.NAME_DATA_TREES}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_PLN_BMO}>{Str_en.NAME_DATA_PLN_BMO_BUSHFIRES}</a>
                    <br/>
                <a href={Str_en.HOMEPAGE_BENDIGO_ZONE_GARBAGE}>{Str_en.NAME_DATA_ZONE_GARBAGE}</a>
                    <br/>

                </Dialog>
            </div>
        )
    }
}

