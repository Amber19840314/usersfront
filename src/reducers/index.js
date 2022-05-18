import {combineReducers} from 'redux';
import users from './users';
import searchR from './search';

const reducers = combineReducers({
  users,
  searchR,
});

export default reducers;