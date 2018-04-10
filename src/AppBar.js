import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from './Drawer';
import IconButton from 'material-ui/IconButton';
import * as Str_en from './Strings_en';
import BendigoLogo from './logo_nav.png';


export default class MainAppBar extends React.Component {

    const
    styles = {

        titls: {
            cursor: 'pointer',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            label: props.label,
            styles: {
                title: {
                    cursor: 'pointer',
                },
            }
        };
    }

    render() {
        return (
            <AppBar
                title={<span style={this.state.styles.title}>{this.props.title + ' | '  + Str_en.COUNCIL_FULL_NAME  }</span>}
                onTitleClick={this.handleClick()}
                iconElementLeft={
                    <IconButton>
                    <img src={BendigoLogo} alt={Str_en.COUNCIL_FULL_NAME} />
                    </IconButton>
                        }
                iconElementRight={
                <Drawer
                    changeEndpoint={this.props.changeEndpoint}
                />}
            />

        )
    }



    handleClick(){
        // alert('click triggered');

    }

}

