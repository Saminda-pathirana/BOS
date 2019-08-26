import type {Order} from '../../types';

export const UPDATE_FILTERED_ORDER_DATA = 'UPDATE_FILTERED_ORDER_DATA';

export const updateFilteredOrderData = (filteredOrders: Array<Order>, searchString: string) => ({
    type: UPDATE_FILTERED_ORDER_DATA,
    payload: {
        searchString,
        filteredOrders,
    },
});
