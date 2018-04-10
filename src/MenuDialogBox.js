import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as Strings_en      from './Strings_en';
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
                <MenuItem leftIcon={<DataIcon/>} onClick={this.handleOpen} >{Strings_en.DATA_NAME_SOURCES}</MenuItem>

                <Dialog
                    title={Strings_en.DATA_NAME_SOURCES}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    contentStyle={customStyle}
                >
                    {/*make this more reusable and pass in a prop with this info*/}
                <p>data.gov.au</p>
                <a href={Strings_en.DATA_BENDIGO_ASSETS_FOOTPATHS}>{Strings_en.DATA_NAME_FOOTPATH}</a>
                    <br/>
                <a href={Strings_en.DATA_BENDIGO_ASSETS_ROADS}>{Strings_en.DATA_NAME_ROADS}</a>
                    <br/>
                <a href={Strings_en.DATA_BENDIGO_REC_BBQS}>{Strings_en.DATA_NAME_BBQ}</a>
                    <br/>
                <a href={Strings_en.DATA_BENDIGO_REC_PLAYSPACES}>{Strings_en.DATA_NAME_PLAYGROUND}</a>
                    <br/>
                <a href={Strings_en.DATA_BENDIGO_REC_TREES}>{Strings_en.DATA_NAME_TREES}</a>
                    <br/>

                </Dialog>
            </div>
        )
    }
}

