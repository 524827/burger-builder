import React, { Component } from 'react';


class Modal extends Component{

  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log('modal work successfully')
  }

  render() {
    return (
      <div className="modal fade" id="modalbox" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
               {this.props.children}
              </div>
        </div>
      </div>
    </div>
      );
  }
}

export default Modal;