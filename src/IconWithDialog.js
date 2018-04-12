import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Icon from 'material-ui/svg-icons/alert/warning';
import * as Str_en      from './Strings_en';




export default class DialogBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {open: false};
    }

    handleClose = () => this.setState({open: false});
    handleOpen = () => this.setState({open: true});

    render(){
        const iconStyle = {
            margin: 5,
            cursor: 'pointer',
            position: 'absolute',
            right: 190,
            top: 15
        }
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
            />
        ];


        return(
            <div>
                <Icon style={iconStyle} onClick={this.handleOpen} color="#fff"/>

                <Dialog
                    title={this.props.title}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    {<p>{this.props.text}</p>}
                </Dialog>
            </div>
        )
    }
}

