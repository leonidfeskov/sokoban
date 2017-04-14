import React, { Component } from 'react';

export default class Player extends Component {
    render() {
        const { position } = this.props;

        return <div className='player' style={{left: position.x + 'px', top: position.y + 'px'}} />
    }
}
