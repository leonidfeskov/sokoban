import { SET_LEVEL, UNLOCK_NEXT_LEVEL } from '../constants/Levels';


export function setLevel(level) {
    return {
        type: SET_LEVEL,
        payload: level
    }
}

export function unlockNextLevel(maxAvailable) {
    return {
        type: UNLOCK_NEXT_LEVEL,
        payload: maxAvailable
    }
}
