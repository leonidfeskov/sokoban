import { SET_LEVEL, UNLOCK_NEXT_LEVEL } from '../constants/levels';


const initialState = {
    active: 1,
    maxAvailable: 1,
    maps: [
        {
            data: [
                [1, 1, 1, 1, 1],
                [1, 3, 0, 0, 1],
                [1, 0, 2, 5, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1]
            ]
        },
        {
            data: [
                [1, 1, 1, 1, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 2, 0, 1],
                [1, 0, 5, 3, 1],
                [1, 1, 1, 1, 1]
            ]
        },
        {
            data: [
                [0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 1, 0, 0, 1],
                [0, 0, 0, 1, 0, 0, 1],
                [0, 0, 0, 1, 2, 5, 1],
                [1, 1, 1, 1, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 3, 2, 5, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1]
            ]
        }
    ]
};

export default function levels(state = initialState, action) {

    switch (action.type) {
        case SET_LEVEL:
            return { ...state, active: action.payload };
        case UNLOCK_NEXT_LEVEL:
            return { ...state, maxAvailable: state.maxAvailable + 1 };
        default:
            return state;
    }
}
