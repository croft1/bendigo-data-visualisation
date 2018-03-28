import React, { Component } from 'react';
import                              './App.css';
import logo                 from './logo.png';
import Map                  from './Map.js'
import MTP                  from 'material-ui/styles/MuiThemeProvider';
import Drawer           from './Drawer';
import * as Strings_en      from './Strings_en';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo inline" alt="logo" />
            <span className="v-center">
                <h3 className="inline">{Strings_en.COUNCIL_FULL_NAME} Data Visualisation</h3>
            </span>
            <MTP >
                <Drawer/>
            </MTP>

        </header>

        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload. Done!*/}
        {/*</p>*/}
        {/*TODO GENERATE MAP PROPERLY*/}

        <Map />
          <footer className="App-footer">
              <p><a  href="http://www.mewc.info">{Strings_en.FOOTER_CREDIT}</a> </p>
          </footer>
      </div>
    );
  }

  componentDidMount(){
      document.title = "Bendigo Data Visualiser"
  }

}

export default App;
