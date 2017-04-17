import { SET_DATA } from '../constants/Map';


const initialState = {
    data: []
};

export default function map(state = initialState, action) {

    switch (action.type) {
        case SET_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}
