import React, { Component } from 'react';
import { CELL_SIZE, CELL_EMPTY } from '../constants/App';
import { getCellNameByCode } from '../utils/utils';


export default class Map extends Component {
    render() {
        const { data } = this.props;
        let cells = [];
        let length = data.length;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                let value = data[i][j];
                let cellName = getCellNameByCode(value);

                if (cellName !== CELL_EMPTY) {
                    let left = CELL_SIZE * j;
                    let top = CELL_SIZE * i;

                    cells.push(
                        <div className={`cell cell_${cellName}`}
                             style={{left: left + 'px', top: top + 'px'}}
                             key={length * i + j} />
                    );
                }
            }
        }

        return <div className='map'>
            {cells}
        </div>
    }
}
