import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from './Drawer';
import IconButton from 'material-ui/IconButton';
import * as Strings_en from './Strings_en';
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
                title={<span style={this.state.styles.title}>{Strings_en.COUNCIL_FULL_NAME + ' | '  + this.props.title}</span>}
                onTitleClick={this.handleClick()}
                iconElementLeft={
                    <IconButton>
                    <img src={BendigoLogo} alt={Strings_en.COUNCIL_FULL_NAME} />
                    </IconButton>
                        }
                iconElementRight={<Drawer/>}
            />

        )
    }



    handleClick(){
        // alert('click triggered');

    }

}

