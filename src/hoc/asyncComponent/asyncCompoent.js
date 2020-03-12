import React, { Component } from 'react';

const AsyncComponent = (importCompoent) => {
 return class extends Component{
  state = {
   component:null
  }

  componentDidMount() {
   importCompoent().then(cmp => {
    this.setState({ component: cmp.default });
   })
  }
  render() {
   const Comp = this.state.component;

   return Comp ? <Comp {...this.props} /> : null;
  }
 }
}

export default AsyncComponent;