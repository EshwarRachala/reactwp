/*eslint-disable */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class App extends Component {
  render() {
    return (<div>
      <h1>Hi from react Component</h1>
      <RaisedButton label="Submit" secondary={true} style={style} />
    </div>);
  }
}
export default App;
