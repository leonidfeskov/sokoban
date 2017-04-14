import React, { Component } from 'react';
import { CELL_SIZE, CELL_EMPTY, CELL_WALL, CELL_BOX, CELL_TARGET } from '../constants/App';


export default class Map extends Component {
    getCellNameByCode(code) {
        let name;

        switch (code) {
            case 1:
                name = CELL_WALL;
                break;
            case 2:
                name = CELL_BOX;
                break;
            case 3:
                name = CELL_TARGET;
                break;
            default:
                name = CELL_EMPTY;
        }

        return name;
    }

    render() {
        const { data } = this.props;
        let cells = [];
        let length = data.length;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                let value = data[i][j];
                let cellName = this.getCellNameByCode(value);

                if (cellName !== CELL_EMPTY) {
                    let left = CELL_SIZE * j;
                    let top = CELL_SIZE * i;

                    cells.push(
                        <div className={`cell cell_${cellName}`}
                             style={{left: left + 'px', top: top + 'px'}}
                             key={length * i + j}
                        >{value}</div>
                    );
                }
            }
        }

        return <div className='map'>
            {cells}
        </div>
    }
}
