import { CELL_EMPTY, CELL_WALL, CELL_BOX, CELL_TARGET, CELL_BOX_TARGET } from '../constants/App';


export function getCellNameByCode(code) {
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
        case 5:
            name = CELL_BOX_TARGET;
            break;
        default:
            name = CELL_EMPTY;
    }

    return name;
}