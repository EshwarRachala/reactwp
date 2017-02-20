import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12
};

class App extends Component {
    render () {
        return (<div>
      <h1>Hello from React App Component</h1>
      <RaisedButton label="Submit" secondary style={style} />
    </div>);
    }
}
export default App;
