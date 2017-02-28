import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12
};

export default class Form extends Component {
    constructor (props) {
        super(props);
        this.name = this.props.name;
        this.onClick = this.props.onClick;
    }

    render () {
        return (
       <div>
          <TextField hintText="Enter Name" value={this.name}/>
          <RaisedButton label="Update" secondary style={style} onClick={this.onClick(this.name)}/>
       </div>
        );
    }
}


Form.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
