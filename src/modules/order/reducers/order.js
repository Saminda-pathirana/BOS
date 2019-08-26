import {createReducer} from 'reduxsauce';

import {
    UPDATE_FILTERED_ORDER_DATA
} from '../actions/order';

import type {ReduxAction, Order} from '../../types';
import orderData from '../../../sampleData/orders';

export type OrderState = {
    searchString: string,
    orders: Array<Order>,
    filteredOrders: Array<Order>,
};

export const INITIAL_STATE: OrderState = {
    searchString: '',
    orders: orderData,
    filteredOrders: orderData,
};

export const updateFilteredOrderData = (state: OrderState = INITIAL_STATE, {payload: {filteredOrders, searchString}}:
  ReduxAction): OrderState => ({
    ...state,

    searchString,
    filteredOrders,
});

const ACTION_HANDLERS = {
    [UPDATE_FILTERED_ORDER_DATA]: updateFilteredOrderData,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
