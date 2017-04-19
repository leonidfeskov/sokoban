import { CELL_TYPES } from '../constants/Map'


export function cloneMap(mapData) {
    let cloneMap = mapData.map(function(row) {
        return row.map(function(cell) {
            return cell;
        });
    });
    return cloneMap;
}

export function checkWinLevel(mapData) {
    let length = mapData.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < mapData[i].length; j++) {
            if (mapData[i][j] === CELL_TYPES.box) {
                return false;
            }
        }
    }
    return true;
}