import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
}
  from 'redux';
import thunk from 'redux-thunk';
import shoes from './reducers/shoes';
import shoeFormData from './reducers/shoeFormData';
import errors from './reducers/errors';





const reducers = combineReducers({
  shoes,
  shoeFormData,
  errors
});





const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)


export default store;
