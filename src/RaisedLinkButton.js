import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import * as Strings_en      from './Strings_en';

export default class RaisedLinkButton extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            label: props.label,
            link: props.link
        };
    }

    render(){
        return(
            <div>
                <RaisedButton
                    className=" b-center"
                    label={this.state.label}
                    href={this.state.link}
                />
            </div>
        )
    }
}

