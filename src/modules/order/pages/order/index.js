// @flow
import React from 'react';
import {connect} from 'react-redux';
import type {Element as ReactElement} from 'react';

import {OrderPreviewContainer, PlaceOrderContainer} from '../../containers';
import {OrderTabBarComponent} from '../../components';

import './styles.css';

type OrderProps = {}; // TODO: Add props type here
type OrderState = {
  activeTab: string,
}; // TODO: Add state type here

class OrderPage extends React.PureComponent<OrderProps, OrderState> {
  static defaultProps: any

  state = {
    activeTab: "1",
  }

  handleTabChange = (index: number): void => {
    const {activeTab} = this.state;
    if (activeTab !== index) {
      this.setState({
        activeTab: index,
      });
    }
  }

  resolveContent = (): ReactElement<any> => {
    const {activeTab} = this.state;

    return activeTab === "2" ? <OrderPreviewContainer /> : <PlaceOrderContainer />;
  }

  renderContent = (): ReactElement<any> => {
    const {activeTab} = this.state;
    const content = this.resolveContent();

    return (
      <div className="order-container">
        <OrderTabBarComponent
          activeTab={activeTab}
          onTabChange={this.handleTabChange}
        />
        {content}
      </div>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

OrderPage.propTypes = {};

OrderPage.defaultProps = {};

const mapStateToProps = (state: any, ownProps: OrderProps) => {
  return {
    // TODO: Map additional props here
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
