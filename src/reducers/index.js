import { combineReducers } from 'redux';
import map from './map';
import levels from './levels';


export default combineReducers({
    map,
    levels
});
