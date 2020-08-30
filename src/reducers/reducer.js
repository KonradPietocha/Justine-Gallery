import { combineReducers } from 'redux';
import menuOpener from './menuOpener';
import menuSwitch from './menuSwitch';
import mobileSwitch from './mobileSwitch';

export default combineReducers({
    menuOpener,
    menuSwitch,
    mobileSwitch
});