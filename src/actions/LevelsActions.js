import { SET_LEVEL } from '../constants/Levels';


export function setLevel(level) {
    return {
        type: SET_LEVEL,
        payload: level
    }
}
