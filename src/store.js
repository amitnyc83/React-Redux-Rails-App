import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
}
  from 'redux';
import thunk from 'redux-thunk';
import shoes from './reducers/shoes';





const reducers = combineReducers({
  shoes,
});

const middleware = [thunk];



const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)


export default store;
