import { SET_DATA } from '../constants/Map';


export function setData(data) {
    return {
        type: SET_DATA,
        payload: data
    }
}
