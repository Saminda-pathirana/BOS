import type {Order} from '../types';

export const filterOrders = (text: string, orders: Array<Order>) => {
    const filteredOrders = [];
    orders.forEach((order) => {
        if (order.portfolioNumber.includes(text)) {
            filteredOrders.push(order);
        }
    });

    return filteredOrders;
  }
