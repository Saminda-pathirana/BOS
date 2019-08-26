// @flow
import React from 'react';
import {connect} from 'react-redux';
import type {Element as ReactElement} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {debounce} from 'lodash';
import PropTypes from 'prop-types';

import {updateFilteredOrderData} from '../../actions/order';
import {filterOrders} from '../../../../services/order';

import './styles.css';

type OrderProps = {}; // TODO: Add props type here
type OrderState = {}; // TODO: Add state type here

class PlaceOrderContainer extends React.PureComponent<OrderProps, OrderState> {
  static defaultProps: any

  state = {
      searchString: this.props.searchString,
  }

  search = debounce((text: string) => {
    const {updateFilteredOrderData, fullOrderList} = this.props;

    const filteredOrders = filterOrders(text, fullOrderList);
    updateFilteredOrderData(filteredOrders, text);
  }, 500)

  handleChange = (e): void => {
    this.search(e.target.value);
    this.setState({
        searchString: e.target.value,
    })
  }

  renderOrders = (): ReactElement<any> => {
    const {orderList} = this.props;

    return orderList.map((order, index) => 
        <Row key={index} data-test="listRow">
            <Col>{order.portfolioNumber}</Col>
            <Col>{order.clientName}</Col>
            <Col className="column">{order.activeStatus}</Col>
            <Col className="column">{order.RMName}</Col>
            <Col>{order.bookingCenter}</Col>
            <Col className="column">{order.riskProfile}</Col>
        </Row>
    )
  }

  renderContent = (): ReactElement<any> => {
    const {searchString} = this.state;
    const orders = this.renderOrders();

    return (
      <div>
        <div className="titleWrap">
            <label className="titleText">Client Portfolio</label>
        </div>
        <label className="descriptionText">Portfolio Search</label>
        <input
            type="text"
            className="search-input"
            onChange={this.handleChange}
            placeholder="Search..."
            value={searchString}
        />
        <p className="titleText">{this.props.searchString}</p>
        <Container fluid data-test="listContainer">
        <Row data-test="listRow">
            <Col>Portfolio Number</Col>
            <Col>Client Name</Col>
            <Col className="column">Portfolio Status</Col>
            <Col className="column">RM Name</Col>
            <Col>Booking Center</Col>
            <Col className="column">Risk Profile</Col>
        </Row>
        {orders}
      </Container>
      </div>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

PlaceOrderContainer.propTypes = {
    updateFilteredOrderData: PropTypes.func.isRequired,
};

PlaceOrderContainer.defaultProps = {};

const mapStateToProps = (state: any, ownProps: OrderProps) => {
  return {
    searchString: state.order.searchString,
    orderList: state.order.filteredOrders,
    fullOrderList: state.order.orders,
  };
};

const mapDispatchToProps = {
    updateFilteredOrderData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrderContainer);
