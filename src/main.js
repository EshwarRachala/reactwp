import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { cyan500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import configureStore from './store';
let store = configureStore();

import AppBar from 'material-ui/AppBar';

import App from './App';

const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500
    },
    appBar: {
        height: 50
    }
});

const styles = {
    title: {
        color: 'white'
    }
};

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
          <AppBar title={<span style={styles.title}>React Webpack</span>}/>
          <App />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);

