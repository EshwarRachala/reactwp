import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import configureStore from './store';
let store = configureStore();

import AppBar from 'material-ui/AppBar';

import App from './App';

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
    <AppBar title="React/Webpack 2 Project Demo" />
      <App />
    </div>
    </MuiThemeProvider>
  </Provider>, document.getElementById('app')
);

