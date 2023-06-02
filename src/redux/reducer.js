import { combineReducers } from 'redux';
import menuSwitch from './reducers/menuSwitch';
import mobileSwitch from './reducers/mobileSwitch';
import dehazer from './reducers/dehazer';
import indexer from './reducers/indexer';
import enlarger from './reducers/enlarger';

export default combineReducers({
    menuSwitch,
    mobileSwitch,
    dehazer,
    indexer,
    enlarger
});
