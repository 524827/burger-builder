import React, { Component } from 'react';
import ModalView from 'react-bootstrap/Modal';


class Modal extends Component{

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
}

  render() {
    return (
      <ModalView show={this.props.show} onHide={this.props.hideModal}>
        <ModalView.Body> {this.props.children}</ModalView.Body>
      </ModalView>
      );
  }
}

export default Modal;