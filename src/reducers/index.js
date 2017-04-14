import { combineReducers } from 'redux';
import player from './player';
import map from './map';


export default combineReducers({
    player,
    map
});
