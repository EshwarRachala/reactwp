import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from 'components/Form';
import Display from 'components/Display';
import { changeName } from './store/actions';

class App extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
      //  let { dispatch } = this.props;

        // let action = changeName('Use Redux');

      //  dispatch(action);
    }

    render () {
        let { name, dispatch } = this.props;

        let boundActionCreators = bindActionCreators(changeName, dispatch);
        console.log(boundActionCreators);

        return (<div>
          <Form name={name} dispatch={dispatch}/>
          <Display name={name}/>
        </div>);
    }
}

App.propTypes = {
    name: PropTypes.string.isRequired
};


export default connect(
  state => ({ name: state.name })
)(App);
