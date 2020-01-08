import React, { Component } from "react";
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import Toast from '../../components/UI/Toast/Toast'


const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component{

    state = {
      error: false,
      errorMsg: null
    };

    componentDidMount() {
      // Set axios interceptors
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: false });
        return req;
      });

      this.responseInterceptor = axios.interceptors.response.use(
        res => res,
         error => {
          this.setState({error:true, errorMsg: error.message });
        }
      );
    }

    componentWillUnmount() {
      // Remove handlers, so Garbage Collector will get rid of if WrappedComponent will be removed
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    hideModal = () => {
       this.setState({error: false})
    }

    render() {
      return (
        <Aux>
          {this.state.error ? <Modal
            show={this.state.error}
            hideModal={()=>this.hideModal()}>{this.state.errorMsg}</Modal> : null}
            <WrappedComponent {...this.props} />
        </Aux>);
    }
  }
}

export default withErrorHandler;