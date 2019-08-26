import {createStore, Store} from 'redux';

import reducers from './reducers';

export default (reactotronStoreAction: any, INITIAL_STATE: any = {}): Store => {
  // Adding redux devtool extension for dev purposes
  const store: Store = createStore(reducers, INITIAL_STATE, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store;
};
