// @flow
import React from 'react';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import { Button } from 'reactstrap';

import './styles.css';

type OrderTabBarProps = {
    onTabChange: Function,
    activeTab: string,
}; // TODO: Add props type here
type OrderTabBarState = {}; // TODO: Add state type here

class OrderTabBarComponent extends React.PureComponent<OrderTabBarProps, OrderTabBarState> {
  static defaultProps: any

  tabPressOne = (): void => {
    const {onTabChange} = this.props;
    onTabChange("1");
  }

  tabPressTwo = (): void => {
    const {onTabChange} = this.props;
    onTabChange("2");
  }

  renderContent = (): ReactElement<any> => {
    const {activeTab} = this.props;

    return (
      <div className="buttonContainer" data-test="tabBar">
        <Button className={activeTab === "1" ? 'button active' : 'button'} onClick={this.tabPressOne}>Place Order</Button>
        <Button className={activeTab === "2" ? 'button active' : 'button'} onClick={this.tabPressTwo}>Order Preview</Button>
      </div>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

OrderTabBarComponent.propTypes = {
    onTabChange: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired,
};

OrderTabBarComponent.defaultProps = {};

export default OrderTabBarComponent;
