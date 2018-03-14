import { combineReducers } from 'redux';

import all from './all';
import selected from './selected';
import filtered from './filtered';

export default combineReducers({
  all,
  selected,
  filtered,
});
