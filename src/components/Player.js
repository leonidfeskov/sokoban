import React, { Component } from 'react';
import { CELL_SIZE } from '../constants/App';


export default class Player extends Component {
    render() {
        const { position } = this.props;
        const left = position.x * CELL_SIZE;
        const top = position.y * CELL_SIZE;

        return (
            <div className='player'
                tabIndex="0"
                style={{left: left + 'px', top: top + 'px'}} />
        )
    }
}
