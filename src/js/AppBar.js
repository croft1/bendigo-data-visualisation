import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from './Drawer';
import IconButton from 'material-ui/IconButton';
import * as Str_en from './Strings_en';
import BendigoLogo from '../images/logo_nav.png';


export default class MainAppBar extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            label: props.label,
            styles: {
                title: {
                    cursor: 'pointer',
                },
                position: 'fixed',
                backgroundColor: props.backgroundColor,
            }
        };
    }

    render() {
        return (
            <AppBar
                title={<span style={this.state.styles.title}>{Str_en.COUNCIL_FULL_NAME + ' | '  +  this.props.title   }</span>}
                onTitleClick={this.handleClick()}
                iconElementLeft={
                    <IconButton>
                    <img src={BendigoLogo} alt={Str_en.COUNCIL_FULL_NAME} />
                    </IconButton>
                        }
                iconElementRight={
                <Drawer
                    changeEndpoint={this.props.changeEndpoint}
                    buttonColor={this.props.backgroundColor}
                />}
                style={this.state.styles}
            />

        )
    }



    handleClick(){
        // alert('click triggered');

    }

}

