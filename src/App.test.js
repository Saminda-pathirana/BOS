import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow, mount} from 'enzyme';
import React from 'react';

import {filterOrders} from './services/order';
import orderData from './sampleData/orders';
import {OrderTabBarComponent} from './modules/order/components';
import {PlaceOrderContainer} from './modules/order/containers';

import configureStore from 'redux-mock-store'
 // create any initial state needed
 const initialState = {
    order: {
      searchString: '',
      orders: orderData,
      filteredOrders: orderData,
    }
 }; // here it is possible to pass in any middleware if needed into //configureStore
 const mockStore = configureStore();


configure({adapter: new Adapter()});

describe('Place Order component and service', () => {
  let store;
 
  beforeEach(() => {  //creates the store with any initial state or middleware needed  
    store = mockStore(initialState)
   })

  it('Should filter records using portfolio number for 123', () => {
    expect(filterOrders("123", orderData)).toEqual(
      orderData);
  })

  it('Should filter records using portfolio number 1234567', () => {
    expect(filterOrders("1234567", orderData)).toEqual(
      [{
        portfolioNumber: "1234567",
        clientName: "Thomas",
        activeStatus: "Active",
        RMName: "Lim",
        bookingCenter: "HK",
        riskProfile: "1-Conservative",
    }]);
  })

  it('Should filter records using portfolio number 134', () => {
    expect(filterOrders("134", orderData)).toEqual(
      []);
  })
  
  it('Having tab bar component', () => {
    const component = shallow(<OrderTabBarComponent onTabChange={() => {}} activeTab={"1"} />);
    const wrapper = component.find(`[data-test='tabBar']`);
    expect(wrapper.length).toBe(1);
  })

  it('Test order List', () => {
    const component = mount(<PlaceOrderContainer store={store}/>);
    const wrapper = component.find(`[data-test='listRow']`).hostNodes();
    expect(wrapper.length).toBe(6);
  })
})
