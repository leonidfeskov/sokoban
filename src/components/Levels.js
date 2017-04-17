import React, { Component } from 'react';


export default class Levels extends Component {
    onLevelClick(event) {
        const element = event.target;
        const level = Number(element.innerHTML);
        
        if (level) {
            this.props.setLevel(level)
        }
    }

    render() {
        const { active, maps } = this.props;
        let levels = [];

        levels = maps.map(function(level, index) {
            return (
                <div className={'level' + (index + 1 === active ? ' level_active' : '')}
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
