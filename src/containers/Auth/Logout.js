import React, { Component } from "react";
import { connect} from 'react-redux';

import * as action from '../../store/actions/index';

class Logout extends Component {

 componentDidMount() {
  this.props.onLogoutHandler();
  this.props.history.push({ pathname: '/' });
 }

 render() {
  return (
   <div>{null}</div>
  );
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
   onLogoutHandler:()=> dispatch(action.userLogoutStart())
 }
}

export default connect(null,mapDispatchToProps)(Logout)