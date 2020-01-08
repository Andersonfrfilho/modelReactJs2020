import { combineReducers } from 'redux';

import login from './login/reducer';
import home from './home/reducer';

export default combineReducers({
  login,
  home,
});
