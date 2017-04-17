import React, { Component } from 'react';
import { KEY_CODES } from '../constants/App';
import { CELL_SIZE, CELL_TYPES } from '../constants/Map';


export default class Map extends Component {
    getPlayerPosition(){
        const { data } = this.props;

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                if (data[i][j] === CELL_TYPES.player || data[i][j] === CELL_TYPES.targetPlayer) {
                    return {
                        y: i,
                        x: j
                    }
                }
            }
        }
    }

    componentDidMount() {
        const { setData } = this.props;

        window.addEventListener('keydown', function(event) {
            const { data } = this.props;

            console.log(data);
            
            // координаты игрока
            let { x, y } = this.getPlayerPosition();
            // координаты первой ячейки перед игроком
            let nextX = x;
            let nextY = y;
            // координаты второй ячейки перед игроком
            let nextNextX = x;
            let nextNextY = y;

            switch (event.keyCode) {
                case KEY_CODES.arrowUp:
                    nextY -= 1;
                    nextNextY -= 2;
                    break;
                case KEY_CODES.arrowDown:
                    nextY += 1;
                    nextNextY += 2;
                    break;
                case KEY_CODES.arrowLeft:
                    nextX -= 1;
                    nextNextX -= 2;
                    break;
                case KEY_CODES.arrowRight:
                    nextX += 1;
                    nextNextX += 2;
                    break;
            }

            if (data[nextY] !== undefined && data[nextY][nextX] !== undefined) {
                let nextCell = data[nextY][nextX];

                // если перед игроком свободная клетка, то просто перемещаемся на нее
                if (nextCell === CELL_TYPES.empty || nextCell === CELL_TYPES.target) {
                    data[y][x] -= CELL_TYPES.player;
                    data[nextY][nextX] += CELL_TYPES.player;
                    
                    setData(data);
                    return;
                }

                // если перед игроком ящик, то толкаем его
                if (nextCell === CELL_TYPES.box || nextCell === CELL_TYPES.targetBox) {
                    if (data[nextNextY] !== undefined && data[nextNextY][nextNextX] !== undefined) {
                        let nextNextCell = data[nextNextY][nextNextX]

                        if (nextNextCell === CELL_TYPES.empty || nextNextCell === CELL_TYPES.target) {
                            data[y][x] -= CELL_TYPES.player;
                            data[nextY][nextX] = data[nextY][nextX] - CELL_TYPES.box + CELL_TYPES.player;
                            data[nextNextY][nextNextX] += CELL_TYPES.box;

                            setData(data);
                        }
                    }
                }
            }
        }.bind(this));
    }

    render() {
        const { data } = this.props;
        const height = data.length * CELL_SIZE;
        const width = data[0].length * CELL_SIZE;

        let cells = [];
        let length = data.length;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                let cellType = data[i][j];

                if (cellType !== CELL_TYPES.empty) {
                    let left = CELL_SIZE * j;
                    let top = CELL_SIZE * i;

                    cells.push(
                        <div className={`cell cell_${cellType}`}
                             style={{left: left + 'px', top: top + 'px'}}
                             key={length * i + j} />
                    );
                }
            }
        }

        return <div className='map' style={{width: width + 'px', height: height + 'px'}}>
            {cells}
        </div>
    }
}
