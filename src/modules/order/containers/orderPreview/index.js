// @flow
import React from 'react';
import {connect} from 'react-redux';
import type {Element as ReactElement} from 'react';

import './styles.css';

type OrderProps = {}; // TODO: Add props type here
type OrderState = {}; // TODO: Add state type here

class OrderPreviewContainer extends React.PureComponent<OrderProps, OrderState> {
  static defaultProps: any

  renderContent = (): ReactElement<any> => {
    return (
      <div>
        <p>No Order Previews Available.</p>
      </div>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

OrderPreviewContainer.propTypes = {};

OrderPreviewContainer.defaultProps = {};

const mapStateToProps = (state: any, ownProps: OrderProps) => {
  return {
    // TODO: Map additional props here
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPreviewContainer);
