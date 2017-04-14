import { SET_POSITION } from '../constants/Player';


const initialState = {
    position: {
        x: 0,
        y: 0
    }
};

export default function player(state = initialState, action) {
    switch (action.type) {
        case SET_POSITION:
            return { ...state, position: action.payload };
        default:
            return state;
    }
}
