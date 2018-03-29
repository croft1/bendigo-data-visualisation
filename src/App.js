import React, { Component } from 'react';
import                              './App.css';
import Map from './Map';
import MTP                  from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme          from 'material-ui/styles/getMuiTheme'
import darkBaseTheme          from 'material-ui/styles/baseThemes/darkBaseTheme'

import AppBar           from './AppBar';
import RaisedLinkButton           from './RaisedLinkButton';
import * as Strings_en      from './Strings_en';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MTP>
              <AppBar/>
          </MTP>
        <Map
          googleMapURL= "https://maps.googleapis.com/maps/api/js?key=AIzaSyDEHhw8Prc-TJfTeEFHfuNGw7eEMYGm-6Y"
          loadingElement= {<div style={{height: '100%'}} />}
          containerElement= {<div style={{height: '500px'}} />}
          mapElement= {<div style={{height: '100%'}} />}
          />

          <footer className="App-footer">
              <MTP muiTheme={getMuiTheme(darkBaseTheme)}>
                <RaisedLinkButton label={ Strings_en.FOOTER_CREDIT } link={ Strings_en.FOOTER_CREDIT_LINK } />
              </MTP>
          </footer>
      </div>
    );
  }

  componentDidMount(){
      document.title = "Bendigo Data Visualiser"
  }

}

export default App;
