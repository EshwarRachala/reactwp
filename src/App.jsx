import React, { Component } from 'react';
import Form from 'components/Form';
import Display from 'components/Display';
// import { changeName } from './store/actions';

class App extends Component {
    constructor (props) {
        super(props);
    }
    onClick (name) {
        debugger;
    }

    render () {
        return (<div>
          <Form name="eshwar" onClick={this.onClick}/>
          <Display name="eshwar"/>
        </div>);
    }
}
export default App;
