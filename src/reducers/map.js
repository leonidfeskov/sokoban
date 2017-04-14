import { SET_DATA } from '../constants/Map';


const initialState = {
    data: [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 2, 0, 1],
        [1, 0, 0, 3, 1],
        [1, 1, 1, 1, 1]
    ]
};

export default function map(state = initialState, action) {

    switch (action.type) {
        case SET_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}
