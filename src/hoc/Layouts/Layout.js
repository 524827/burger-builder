import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrower from '../../components/Navigation/SideDrower/SideDrower';



class Layout extends Component {
    state = {
        showSideDrower: false
    }

    /**
     * @function SideDrowerToggleHandler()
     * This function use to close side drawer
     */
    sideDrowerCloseHandler = () => {
        this.setState({
            showSideDrower: false
        })
    }

    /**
     * @function sideDrowerToggleHandler()
     * use to toggle side drawer
     */
    sideDrowerToggleHandler = () => {
        this.setState((prevState => {
            return { showSideDrower: !prevState.showSideDrower }
        }));
    }

    render() {
        return <Aux >
    <Toolbar clicked = { this.sideDrowerToggleHandler }/>
      <SideDrower
        close = { this.sideDrowerCloseHandler }
        open = { this.state.showSideDrower }/>
        <main className={classes.Content} >
        {this.props.children}
        </main>
       </Aux >
    }
}

export default Layout;