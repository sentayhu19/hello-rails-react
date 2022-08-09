import thunk from 'redux-thunk';
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import {greetingReducer} from './reactrails/greetings';

const initState = {};
const rootredcuer = combineReducers({
    greetingReducer,
});
const store = createStore(rootredcuer, initState, applyMiddleware(thunk));
export default store;