import React, { Component } from 'react';


class Modal extends Component{

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