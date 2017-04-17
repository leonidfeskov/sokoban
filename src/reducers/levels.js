import { SET_LEVEL } from '../constants/levels';


const initialState = {
    active: 1,
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
        default:
            return state;
    }
}
