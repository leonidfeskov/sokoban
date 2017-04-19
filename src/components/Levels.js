import React, { Component } from 'react';
import { cloneMap } from '../utils/utils';


export default class Levels extends Component {
    onLevelClick(event) {
        const element = event.target;
        const level = Number(element.innerHTML);

        if (level <= this.props.maxAvailable) {
            const { maps } = this.props;
            const activeLevelData = maps[level - 1].data;

            if (level) {
                this.props.setLevel(level);
                this.props.setData(cloneMap(activeLevelData));
            }
        }
    }

    render() {
        const { active, maxAvailable, maps } = this.props;
        let levels = [];

        levels = maps.map(function(level, index) {
            return (
                <div className={'level' + (index + 1 === active ? ' level_active' : '') + (index >= maxAvailable ? ' level_lock' : '')}
                    key={index}
                    onClick={::this.onLevelClick}>
                    {index + 1}
                </div>
            )
        }.bind(this));


        return <div className='levels'>
            {levels}
        </div>
    }
}
