import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import MenuItem from 'material-ui/MenuItem';
import * as Strings_en from "./Strings_en";

export default class MenuItemSnackbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {open:false};
    }

    handleRequestClose = () => this.setState({open: false});
    handleClick = () => {
        this.props.onClick
        this.setState({open:true});
    }

    render(){
        return(
            <div>
                <MenuItem leftIcon={this.props.leftIcon} onClick={this.handleClick}
                >{this.props.text}</MenuItem>

                <Snackbar
                    open={this.state.open}
                    message={this.props.message}
                    autoHideDuration={3000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

