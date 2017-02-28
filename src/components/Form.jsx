import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { changeName } from '../store/actions';

const style = {
    margin: 12
};

export default class Form extends Component {
    constructor (props) {
        super(props);
        this.name = this.props.name;
        this.onClick = this.onClick.bind(this);
    }
    onClick () {
        let { dispatch } = this.props;

        let action = changeName('Use Redux');

        dispatch(action);
    }
    render () {
        return (
       <div>
          <TextField hintText="Enter Name" value={this.name}/>
          <RaisedButton label="Update" secondary style={style} onclick={this.onClick}/>
       </div>
        );
    }
}


Form.propTypes = {
    name: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};
