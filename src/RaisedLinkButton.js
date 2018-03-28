import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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

