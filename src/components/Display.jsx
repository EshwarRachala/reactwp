import React, { Component, PropTypes } from 'react';

export default class Display extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (<h1>{this.props.name} </h1>);
    }
}

Display.propTypes = {
    name: PropTypes.string.isRequired
};
