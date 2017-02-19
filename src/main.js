/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { cyan500 } from 'material-ui/styles/colors';

import App from './App';

injectTapEventPlugin();
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});



const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme} >
    <div>
      <AppBar title="My AppBar" />
      <App></App>
    </div>
  </MuiThemeProvider >
);


ReactDOM.render(<Main />, document.getElementById('app'));
