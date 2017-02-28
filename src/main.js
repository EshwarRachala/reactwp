import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { cyan500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { changeName } from './store/actions';

injectTapEventPlugin();

import configureStore from './store';
let store = configureStore();

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(changeName('peter'));

unsubscribe();

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
        bold: 'true'
    }
};

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
          <AppBar title={<span style={styles.title}>React Webpack</span>}/>
          <App store={store}/>
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);

