import { combineReducers } from 'redux';
import menuOpener from './menuOpener';
import menuSwitch from './menuSwitch';

export default combineReducers({
    menuOpener,
    menuSwitch
});