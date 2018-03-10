import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import category from './category/reducers';
import skill from './skill/reducers';
import project from './project/reducers';
import author from './author/reducers';
import session from './session/reducers';
import notification from './notification/reducers';

const rootReducer = combineReducers({
  author,
  category,
  project,
  skill,
  session,
  notification,
});

const logger = createLogger({
  collapsed: true,
  duration: true,
});

// logger must be the last middleware in chain, otherwise
// it will log thunk and promise, not actual actions
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(ReduxThunk, logger)); //eslint-disable-line

export default store;
