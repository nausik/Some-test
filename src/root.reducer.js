import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import list from './ducks/list.duck';
import item from './ducks/item.duck';
import cache from './ducks/cache.duck';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  list,
  item,
  cache,
});

export default rootReducer;
