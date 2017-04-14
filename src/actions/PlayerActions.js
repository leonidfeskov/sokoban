import { SET_POSITION } from '../constants/Player';


export function setPosition(position) {
    return {
        type: SET_POSITION,
        payload: position
    }
}
