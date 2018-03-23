import React, { Component } from 'react';
import                              './App.css';
import logo                 from './logo.png';
import Map                  from './Map.js'
import * as Strings_en      from './Strings_en';

import MTP                  from 'material-ui/styles/MuiThemeProvider';
import DataButton           from './DataButton';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="row">
                <img src={logo} className="App-logo" alt="logo" />
                <h3 >{Strings_en.COUNCIL_FULL_NAME}</h3>
                <MTP>
                    <DataButton label={Strings_en.DATA_NAME_FOOTPATH}/>
                </MTP>
            </div>
        </header>
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload. Done!*/}
        {/*</p>*/}

        <Map />
          <footer className="App-footer">
              <p>{Strings_en.FOOTER_CREDIT} </p>
          </footer>
      </div>
    );
  }
}

export default App;
