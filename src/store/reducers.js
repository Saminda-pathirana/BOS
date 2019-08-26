import {combineReducers} from 'redux';

import Order from '../modules/order/reducers/order';

export default combineReducers({
    // Combine all reducers
    order: Order,
  });
